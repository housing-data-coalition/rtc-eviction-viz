import React from "react";
import { useTable, Column, useGroupBy, useExpanded, CellProps} from "react-table";
import { FilingsByZipOutsideNYCRow, FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import { JsonLoader } from "../json-loader";
import {numberWithCommas} from "../vega";

export const FilingsByZipOutsideNYCTable: React.FC<{}> = () => {
    return <>
        <span>Note: Zip codes may appear in multiple courts.</span>
        <JsonLoader<FilingsByZipOutsideNYCRow[]> url={FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <FilingsByZipOutsideNYCTableWithValues values={values} />}
        </JsonLoader>
    </>;
}

type FilingsByZipOutsideNYCDisplayRow = {court_name: string, zipcode: string, filings: number};

interface Props {
    columns: Array<Column<FilingsByZipOutsideNYCDisplayRow>>;
    data: Array<FilingsByZipOutsideNYCDisplayRow>;
}

const Table: React.FC<Props> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<FilingsByZipOutsideNYCDisplayRow>(
        {
            columns,
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
                            <td align="left"
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
                        })
                    }
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
                accessor: "court_name" as keyof FilingsByZipOutsideNYCDisplayRow,
                id: "court",
            },
            {
                Header: "Zipcode",
                accessor: "zipcode" as keyof FilingsByZipOutsideNYCDisplayRow,
                aggregate: "count",
                Aggregated: ({value}: CellProps<FilingsByZipOutsideNYCDisplayRow>) => <>{`${value} zip codes`}</>,
            },
            {
                Header: "Total cases filed since March 23, 2020",
                accessor: "filings" as keyof FilingsByZipOutsideNYCDisplayRow,
                aggregate: "sum",
                Aggregated: ({value}: CellProps<FilingsByZipOutsideNYCDisplayRow>) => <>{`${numberWithCommas(value)}`}</>,
            },
        ], []);
    return cols;
}

const FilingsByZipOutsideNYCTableWithValues: React.FC<{values: FilingsByZipOutsideNYCRow[]}> = (values) => {
    var data = values.values;
    const columns = makeColumns();
    return (<Table columns={columns} data={data} />);
}