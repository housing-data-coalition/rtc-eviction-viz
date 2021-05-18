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
                            <td
                                {...cell.getCellProps()}
                                style={{background:
                                    [0,3,6].includes(cell.row.index)
                                    ? 'lightgray'
                                    : 'white'
                                }}
                            >
                            {cell.render("Cell")}</td>);
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
    table[4][1] = easyAccessMap['nyc-prepandemic-residential']['Non-Payment']
    table[4][2] = easyAccessMap['nyc-prepandemic-residential']['Holdover']
    table[5][1] = easyAccessMap['nyc-pandemic-residential']['Non-Payment']
    table[5][2] = easyAccessMap['nyc-pandemic-residential']['Holdover']
    table[7][1] = easyAccessMap['outside-prepandemic-all']['Non-Payment']
    table[7][2] = easyAccessMap['outside-prepandemic-all']['Holdover']
    table[8][1] = easyAccessMap['outside-pandemic-all']['Non-Payment']
    table[8][2] = easyAccessMap['outside-pandemic-all']['Holdover']

    // Sum outside NYC vertically
    table[6][1] = table[7][1] + table[8][1]
    table[6][2] = table[7][2] + table[8][2]
    // Sum outside NYC horizontally
    table[6][0] = table[6][1] + table[6][2]
    table[7][0] = table[7][1] + table[7][2]
    table[8][0] = table[8][1] + table[8][2]

    // Sum NYC vertically
    table[3][1] = table[4][1] + table[5][1]
    table[3][2] = table[4][2] + table[5][2]
    // Sum NYC horizontally
    table[3][0] = table[3][1] + table[3][2]
    table[4][0] = table[4][1] + table[4][2]
    table[5][0] = table[5][1] + table[5][2]

    // Sum Statewide vertically
    table[1][1] = table[4][1] + table[7][1]
    table[1][2] = table[4][2] + table[7][2]
    table[2][1] = table[5][1] + table[8][1]
    table[2][2] = table[5][2] + table[8][2]
    // Sum Statewide horizontally
    table[1][0] = table[4][0] + table[7][0]
    table[2][0] = table[5][0] + table[8][0]
    
    // Top line vertical
    table[0][1] = table[1][1] + table[2][1]
    table[0][2] = table[1][2] + table[2][2]
    // Top line horizontal
    table[0][0] = table[0][1] + table[0][2]
    return table;
}
