import React from "react";
import { useTable, Column, useGroupBy, useExpanded } from "react-table";
import { FilingsByZipOutsideNYCRow, FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import { JsonLoader } from "../json-loader";

export const FilingsByZipOutsideNYCTable: React.FC<{}> = () => {
    return (
        <JsonLoader<FilingsByZipOutsideNYCRow[]> url={FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <FilingsByZipOutsideNYCTableWithValues values={values} />}
        </JsonLoader>
    );
}

const FilingsByZipOutsideNYCTableWithValues: React.FC<{values: FilingsByZipOutsideNYCRow[]}> = (values) => {
    var data = values.values;
    type FilingsByZipOutsideNYCDisplayRow = {court_name: string, zipcode: string, filings: number};
    const columns: Column<FilingsByZipOutsideNYCDisplayRow>[] = [
        {
            Header: "Court",
            accessor: "court_name",
        },
        {
            Header: "Zipcode",
            accessor: "zipcode",
        },
        {
            Header: "Total cases filed since March 23, 2020",
            accessor: "filings",
        },
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useGroupBy,
        useExpanded
    );
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
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
                            <td align="right"
                                {...cell.getCellProps()}
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