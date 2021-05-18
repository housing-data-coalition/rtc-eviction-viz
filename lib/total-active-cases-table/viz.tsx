import React from "react";
import { useTable, CellProps, Column, useRowState } from "react-table";
import { JsonLoader } from "../json-loader";
import { TotalActiveCasesRow, TOTAL_ACTIVE_CASES_TABLE } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import {unflatten} from "flat";
import { createLiteral } from "typescript";

export const ActiveCasesTable: React.FC<{}> = () => {
    return (
        <JsonLoader<TotalActiveCasesRow[]> url={TOTAL_ACTIVE_CASES_TABLE.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <ActiveCasesTableWithValues values={values} />}
        </JsonLoader>
    );
};

const ActiveCasesTableWithValues: React.FC<{values: TotalActiveCasesRow[]}> = (values) => {
    const dataTable = constructDataTable(values);

    type ActiveCasesDisplayRow = {id: string, totalActiveCases: number, nonPayment: number, holdover: number}
    const rowLabels = [
        'Statewide Totals',
        'Pre-Pandemic #',
        'Pandemic #',
        'NYC Totals',
        'Pre-Pandemic #',
        'Pandemic #',
        'Outside NYC Totals',
        'Pre-Pandemic #',
        'Pandemic #'
    ]
    var data = [];
    for (var i = 0; i < rowLabels.length; i++) {
        data[i] = {
            id: rowLabels[i],
            totalActiveCases: dataTable[i][0],
            nonPayment: dataTable[i][1],
            holdover: dataTable[i][2]
        };
    }
    
    const columns: Column<ActiveCasesDisplayRow>[] = [
        {
            Header: "",
            accessor: "id",
        },
        {
            Header: "Total Active Cases",
            accessor: 'totalActiveCases'
        },
        {
            Header: "Non-payment",
            accessor: "nonPayment",
        },
        {
            Header: "Holdover",
            accessor: "holdover",
        }
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return (
                            <td align='right'
                                {...cell.getCellProps()}
                                style={{
                                    background:
                                        [0,3,6].includes(cell.row.index)
                                        ? 'lightgray'
                                        : 'white',
                                }}
                            >
                                {cell.render("Cell")}
                            </td>);
                    })}
                    </tr>
                );
                })}
            </tbody>
        </table>
    )
};


function constructDataTable(values: React.PropsWithChildren<{
    values: TotalActiveCasesRow[];
}>) {
    var activeCasesMap = Object.fromEntries(new Map(values.values.map(key => [key.category, key.count] as [string, number])));
    var activeCasesDeepObject: any = unflatten(activeCasesMap);

    const easyAccessMap = {
        'outside-pandemic-all': activeCasesDeepObject['Outside NYC']['Issued Pandemic']['All'],
        'outside-prepandemic-all': activeCasesDeepObject['Outside NYC']['Issued Prepandemic']['All'],
        'nyc-pandemic-residential': activeCasesDeepObject['NYC']['Issued Pandemic']['Residential'], 
        'nyc-pandemic-commercial': activeCasesDeepObject['NYC']['Issued Pandemic']['Commercial'],
        'nyc-prepandemic-residential': activeCasesDeepObject['NYC']['Issued Prepandemic']['Residential'],
        'nyc-prepandemic-commercial': activeCasesDeepObject['NYC']['Issued Prepandemic']['Commercial'] 
    }
    var table = Array.from(Array(9), () => Array(3)); // 9 rows, 3 cols
    return fillTable(table, easyAccessMap);
}

function fillTable(table: number[][], easyAccessMap: {[key: string]: {'Non-Payment': number, 'Holdover': number}}) {
    const total = 0; // total column index
    const np = 1; // nonpayment column
    const ho = 2; // holdover column
    table[4][np] = easyAccessMap['nyc-prepandemic-residential']['Non-Payment'] + easyAccessMap['nyc-prepandemic-commercial']['Non-Payment']
    table[4][ho] = easyAccessMap['nyc-prepandemic-residential']['Holdover'] + easyAccessMap['nyc-prepandemic-commercial']['Holdover']
    table[5][np] = easyAccessMap['nyc-pandemic-residential']['Non-Payment'] + easyAccessMap['nyc-pandemic-commercial']['Non-Payment']
    table[5][ho] = easyAccessMap['nyc-pandemic-residential']['Holdover'] +  + easyAccessMap['nyc-pandemic-commercial']['Holdover']
    table[7][np] = easyAccessMap['outside-prepandemic-all']['Non-Payment']
    table[7][ho] = easyAccessMap['outside-prepandemic-all']['Holdover']
    table[8][np] = easyAccessMap['outside-pandemic-all']['Non-Payment']
    table[8][ho] = easyAccessMap['outside-pandemic-all']['Holdover']

    // Sum outside NYC vertically
    table[6][np] = table[7][np] + table[8][np]
    table[6][ho] = table[7][ho] + table[8][ho]
    // Sum outside NYC horizontally
    table[6][total] = table[6][np] + table[6][ho]
    table[7][total] = table[7][np] + table[7][ho]
    table[8][total] = table[8][np] + table[8][ho]

    // Sum NYC vertically
    table[3][np] = table[4][np] + table[5][np]
    table[3][ho] = table[4][ho] + table[5][ho]
    // Sum NYC horizontally
    table[3][total] = table[3][np] + table[3][ho]
    table[4][total] = table[4][np] + table[4][ho]
    table[5][total] = table[5][np] + table[5][ho]

    // Sum Statewide vertically
    table[1][np] = table[4][np] + table[7][np]
    table[1][ho] = table[4][ho] + table[7][ho]
    table[2][np] = table[5][np] + table[8][np]
    table[2][ho] = table[5][ho] + table[8][ho]
    // Sum Statewide horizontally
    table[1][total] = table[4][total] + table[7][total]
    table[2][total] = table[5][total] + table[8][total]
    
    // Top line vertical
    table[0][np] = table[1][np] + table[2][np]
    table[0][ho] = table[1][ho] + table[2][ho]
    // Top line horizontal
    table[0][total] = table[0][np] + table[0][ho]
    return table;
}
