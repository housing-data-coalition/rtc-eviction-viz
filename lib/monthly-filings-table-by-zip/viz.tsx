
import React from "react";
import { useTable, Column, CellProps} from "react-table";
import { MonthlyFilingsByZipRow, MONTHLY_FILINGS_BY_ZIP } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import { JsonLoader } from "../json-loader";
import {numberWithCommas} from "../vega";

export const MonthlyFilingsTableByZip: React.FC<{}> = () => {
    return <>
        <span>Note: Filings from past 5-6 weeks may be artificially low due to reporting lags.</span>
        <JsonLoader<MonthlyFilingsByZipRow[]> url={MONTHLY_FILINGS_BY_ZIP.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <MonthlyFilingsByZipWithValues values={values} />}
        </JsonLoader>
    </>;
}

type MonthlyFilingsByZipDisplayRow = {
    zipcode: string,
    region: string,
    borough: string,
    two_months_ago: number,
    three_months_ago: number,
    num_increase: number,
    percent_increase: number
};

interface Props {
    columns: Array<Column<MonthlyFilingsByZipDisplayRow>>;
    data: Array<MonthlyFilingsByZipDisplayRow>;
}

const Table: React.FC<Props> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<MonthlyFilingsByZipDisplayRow>(
        {
            columns,
            data,
        }
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
                            <td align="left"
                                {...cell.getCellProps()}
                            >
                                {cell.isPlaceholder ? null : (
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

function makeColumns(): Column<MonthlyFilingsByZipDisplayRow>[] {
    const cols: Column<MonthlyFilingsByZipDisplayRow>[] =
        React.useMemo(
            () =>
        [
            {
                Header: "Zipcode",
                accessor: "zipcode" as keyof MonthlyFilingsByZipDisplayRow,
            },
            {
                Header: "Borough",
                accessor: "borough" as keyof MonthlyFilingsByZipDisplayRow,
            },
            {
                Header: "3 months ago",
                accessor: "three_months_ago" as keyof MonthlyFilingsByZipDisplayRow,
            },
            {
                Header: "2 months ago",
                accessor: "two_months_ago" as keyof MonthlyFilingsByZipDisplayRow,
            },
            {
                Header: "# Increase",
                accessor: "num_increase" as keyof MonthlyFilingsByZipDisplayRow,
            },
            {
                Header: "% Increase",
                accessor: "percent_increase" as keyof MonthlyFilingsByZipDisplayRow,
                Cell: ({value}: CellProps<MonthlyFilingsByZipDisplayRow>) => <>{`${numberWithCommas(value)}%`}</>
            },
        ], []);
    return cols;
}


const MonthlyFilingsByZipWithValues: React.FC<{values: MonthlyFilingsByZipRow[]}> = (values) => {
    var data = values.values;
    const columns = makeColumns();
    return (<Table columns={columns} data={data} />);
}