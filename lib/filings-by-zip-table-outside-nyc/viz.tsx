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

type FilingsByZipOutsideNYCDisplayRow = {court_name: string, zipcode: string, filings: number};


function Table({ columns: cols, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns: cols,
            data,
            initialState: {groupBy: ['court']},
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
                                {column.id == 'court' ? (
                                    <span {...column.getGroupByToggleProps()}>
                                    {column.isGrouped ? '➡️ ' : '⬇️ '}
                                    </span>
                                ) : null}
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
                                {cell.isGrouped ? (
                                    <>
                                    <span {...row.getToggleRowExpandedProps()}>
                                        {row.isExpanded ? '⬇️' : '➡️'}
                                    </span>{' '}
                                    {cell.render('Cell')} ({row.subRows.length})
                                    </>
                                ) : cell.isAggregated ? (
                                    cell.render('Aggregated')
                                ) : cell.isPlaceholder ? null : (
                                    cell.render('Cell')
                                )}
                            </td>);
                    })}
                    </tr>
                );
                })}
            </tbody>
        </table>
    )
}

function makeColumns(): Column<FilingsByZipOutsideNYCDisplayRow>[] {
    const cols: Column<FilingsByZipOutsideNYCDisplayRow>[] =
    React.useMemo(
        () =>
    [
        {
            Header: "Court",
            accessor: "court_name",
            id: "court",
        },
        {
            Header: "Zipcode",
            accessor: "zipcode",
            aggregate: "count",
            Aggregated: ({ value }) => `${value} zip codes`,
        },
        {
            Header: "Total cases filed since March 23, 2020",
            accessor: "filings",
            aggregate: "sum",
            Aggregated: ({ value }) => `${value}`,
        },
    ], []);
    return cols;
}

const FilingsByZipOutsideNYCTableWithValues: React.FC<{values: FilingsByZipOutsideNYCRow[]}> = (values) => {
    var data = [
        {
            'court_name': '1',
            'zipcode': '2',
            'filings': 10,
        },
        {
            'court_name': '1',
            'zipcode': '23',
            'filings': 5
        },
        {
            'court_name': '1',
            'zipcode': '24',
            'filings': 5
        }
    ]
    //values.values;
    const columns: Column<FilingsByZipOutsideNYCDisplayRow>[] = makeColumns();
    return (<Table columns={columns} data={data} />);
}