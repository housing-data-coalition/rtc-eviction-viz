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
        '  without NYC commercial #s',
        'Pre-Pandemic #',
        '  without NYC commercial #s',
        'Pandemic #',
        '  without NYC commercial #s',
        'NYC Totals',
        '  residential only #s',
        'Pre-Pandemic #',
        '  residential only #s',
        'Pandemic #',
        '  residential only #s',
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
                                        [0,6,12].includes(cell.row.index)
                                        ? 'yellow'
                                        : 'white',
                                    fontWeight:
                                        [0,2,4,6,8,10,12].includes(cell.row.index)
                                        ? 'bold'
                                        : 'normal'
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
    var table = Array.from(Array(15), () => Array(3)); // 15 rows, 3 cols
    return fillTable(table, easyAccessMap);
}

function fillTable(table: number[][], easyAccessMap: {[key: string]: {'Non-Payment': number, 'Holdover': number}}) {
    const total_col = 0; // total column index
    const np_col = 1; // nonpayment column
    const ho_col = 2; // holdover column
    const state_row = 0;
    const nyc_row = 6;
    const outside_row = 12;
    table[nyc_row+2][np_col] = easyAccessMap['nyc-prepandemic-residential']['Non-Payment'] + easyAccessMap['nyc-prepandemic-commercial']['Non-Payment']
    table[nyc_row+2][ho_col] = easyAccessMap['nyc-prepandemic-residential']['Holdover'] + easyAccessMap['nyc-prepandemic-commercial']['Holdover']
    table[nyc_row+3][np_col] = easyAccessMap['nyc-prepandemic-residential']['Non-Payment']
    table[nyc_row+3][ho_col] = easyAccessMap['nyc-prepandemic-residential']['Holdover']
    table[nyc_row+4][np_col] = easyAccessMap['nyc-pandemic-residential']['Non-Payment'] + easyAccessMap['nyc-pandemic-commercial']['Non-Payment']
    table[nyc_row+4][ho_col] = easyAccessMap['nyc-pandemic-residential']['Holdover'] + easyAccessMap['nyc-pandemic-commercial']['Holdover']
    table[nyc_row+5][np_col] = easyAccessMap['nyc-pandemic-residential']['Non-Payment']
    table[nyc_row+5][ho_col] = easyAccessMap['nyc-pandemic-residential']['Holdover']

    table[outside_row+1][np_col] = easyAccessMap['outside-prepandemic-all']['Non-Payment']
    table[outside_row+1][ho_col] = easyAccessMap['outside-prepandemic-all']['Holdover']
    table[outside_row+2][np_col] = easyAccessMap['outside-pandemic-all']['Non-Payment']
    table[outside_row+2][ho_col] = easyAccessMap['outside-pandemic-all']['Holdover']

    // Sum outside NYC vertically
    table[outside_row][np_col] = table[outside_row+1][np_col] + table[outside_row+2][np_col]
    table[outside_row][ho_col] = table[outside_row+1][ho_col] + table[outside_row+2][ho_col]
    // Sum outside NYC horizontally
    table[outside_row][total_col] = table[outside_row][np_col] + table[outside_row][ho_col]
    table[outside_row+1][total_col] = table[outside_row+1][np_col] + table[outside_row+1][ho_col]
    table[outside_row+2][total_col] = table[outside_row+2][np_col] + table[outside_row+2][ho_col]

    // Sum NYC vertically
    table[nyc_row][np_col] = table[nyc_row+2][np_col] + table[nyc_row+4][np_col]
    table[nyc_row][ho_col] = table[nyc_row+2][ho_col] + table[nyc_row+4][ho_col]
    table[nyc_row+1][np_col] = table[nyc_row+3][np_col] + table[nyc_row+5][np_col]
    table[nyc_row+1][ho_col] = table[nyc_row+3][ho_col] + table[nyc_row+5][ho_col]
    
    // Sum NYC horizontally
    for(var i=nyc_row; i<outside_row; i++) {
        table[i][total_col] = table[i][np_col] + table[i][ho_col];
    }
    
    // Sum Statewide vertically
    table[state_row+2][np_col] = table[nyc_row+2][np_col] + table[outside_row+1][np_col]
    table[state_row+2][ho_col] = table[nyc_row+2][ho_col] + table[outside_row+1][ho_col]
    table[state_row+3][np_col] = table[nyc_row+3][np_col] + table[outside_row+1][np_col]
    table[state_row+3][ho_col] = table[nyc_row+3][ho_col] + table[outside_row+1][ho_col]
    table[state_row+4][np_col] = table[nyc_row+4][np_col] + table[outside_row+2][np_col]
    table[state_row+4][ho_col] = table[nyc_row+4][ho_col] + table[outside_row+2][ho_col]
    table[state_row+5][np_col] = table[nyc_row+5][np_col] + table[outside_row+2][np_col]
    table[state_row+5][ho_col] = table[nyc_row+5][ho_col] + table[outside_row+2][ho_col]
    
    // Sum Statewide horizontally
    for(var i=state_row+2; i<nyc_row; i++) {
        table[i][total_col] = table[i][np_col] + table[i][ho_col]
    }
    
    // Top lines vertical
    table[state_row][np_col] = table[state_row+2][np_col] + table[state_row+4][np_col]
    table[state_row][ho_col] = table[state_row+2][ho_col] + table[state_row+4][ho_col]
    table[state_row+1][np_col] = table[state_row+3][np_col] + table[state_row+5][np_col]
    table[state_row+1][ho_col] = table[state_row+3][ho_col] + table[state_row+5][ho_col]

    // Top line horizontal
    table[state_row][total_col] = table[state_row][np_col] + table[state_row][ho_col]
    table[state_row+1][total_col] = table[state_row+1][np_col] + table[state_row+1][ho_col]

    return table;
}
