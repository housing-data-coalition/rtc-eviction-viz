
import React from "react";
import { useTable, Column, useGroupBy, useExpanded, CellProps} from "react-table";
import { MonthlyFilingsCitywideRow, MONTHLY_FILINGS_CITYWIDE } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import { JsonLoader } from "../json-loader"
import {numberWithCommas} from "../vega";
import { toInt } from "../converters";

export const MonthlyFilingsTableCitywide: React.FC<{}> = () => {
    return <>
        <span>Note: Filings from past 5-6 weeks may be artificially low due to reporting lags.</span>
        <JsonLoader<MonthlyFilingsCitywideRow[]> url={MONTHLY_FILINGS_CITYWIDE.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <MonthlyFilingsCitywideWithValues values={values} />}
        </JsonLoader>
    </>;
}

type MonthlyFilingsCitywideDisplayRow = {
    borough: string,
    region: string,
    two_months_ago: number,
    three_months_ago: number,
    num_increase: number,
    percent_increase: number
};

interface Props {
    columns: Array<Column<MonthlyFilingsCitywideDisplayRow>>;
    data: Array<MonthlyFilingsCitywideDisplayRow>;
}

const Table: React.FC<Props> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<MonthlyFilingsCitywideDisplayRow>(
        {
            columns,
            data,
            initialState: {groupBy: ['region']},
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

function makeColumns(): Column<MonthlyFilingsCitywideDisplayRow>[] {
    const cols: Column<MonthlyFilingsCitywideDisplayRow>[] =
        React.useMemo(
            () =>
        [
            {
                Header: "Region",
                accessor: "region" as keyof MonthlyFilingsCitywideDisplayRow,
                id: "region",
            },
            {
                Header: "Borough",
                accessor: "borough" as keyof MonthlyFilingsCitywideDisplayRow,
                aggregate: "count",
                Aggregated: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => `${value} boroughs`,
            },
            {
                Header: "3 months ago",
                accessor: "three_months_ago" as keyof MonthlyFilingsCitywideDisplayRow,
                // "sum" doesn't handle negative values properly: https://github.com/tannerlinsley/react-table/issues/3273
                aggregate: (leafValues) => leafValues.reduce((value, next) => parseInt(value) + parseInt(next)),
                Aggregated: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => `${numberWithCommas(value)}`,
                Cell: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => value
            },
            {
                Header: "2 months ago",
                accessor: "two_months_ago" as keyof MonthlyFilingsCitywideDisplayRow,
                // "sum" doesn't handle negative values properly: https://github.com/tannerlinsley/react-table/issues/3273
                aggregate: (leafValues) => leafValues.reduce((value, next) => parseInt(value) + parseInt(next)),
                Aggregated: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => `${numberWithCommas(value)}`,
                Cell: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => value
            },
            {
                Header: "# Increase",
                accessor: "num_increase" as keyof MonthlyFilingsCitywideDisplayRow,
                // "sum" doesn't handle negative values properly: https://github.com/tannerlinsley/react-table/issues/3273
                aggregate: (leafValues) => leafValues.reduce((value, next) => parseInt(value) + parseInt(next)),
                Aggregated: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => `${numberWithCommas(value)}`,
                Cell: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => value
            },
            {
                Header: "% Increase",
                accessor: "percent_increase" as keyof MonthlyFilingsCitywideDisplayRow,
                aggregate: (leafValues: string[]) => calculate_percentage_increase(leafValues),
                aggregateValue: (_value: CellProps<MonthlyFilingsCitywideDisplayRow>, { original }: CellProps<MonthlyFilingsCitywideDisplayRow>) => `${original.two_months_ago}-${original.three_months_ago}`,
                Aggregated: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>) => `${value}%`,
                Cell: ({value}: CellProps<MonthlyFilingsCitywideDisplayRow>): string => `${numberWithCommas(value)}%`
            },
        ], []);
    return cols;
}

/**
 *  leafValues looks like:
 *  ['123-455', '467-234']
*/
function calculate_percentage_increase(leafValues: string[]) {
    var two_months_ago_sum = 0;
    var three_months_ago_sum = 0;
    for (let idx in leafValues){
        let spl = leafValues[idx].split('-');
        two_months_ago_sum += parseInt(spl[0]);
        three_months_ago_sum += parseInt(spl[1]);
    }

    return Math.round((two_months_ago_sum - three_months_ago_sum) / three_months_ago_sum * 100);
}

const MonthlyFilingsCitywideWithValues: React.FC<{values: MonthlyFilingsCitywideRow[]}> = (values) => {
    var data = values.values;
    const columns = makeColumns();
    return (<Table columns={columns} data={data} />);
}