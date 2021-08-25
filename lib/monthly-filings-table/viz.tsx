
import React from "react";
import { useTable, Column, useGroupBy, useExpanded, CellProps} from "react-table";
import { MonthlyFilingsRow, MONTHLY_FILINGS } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import { JsonLoader } from "../json-loader"

export const MonthlyFilingsTable: React.FC<{}> = () => {
    return <>
        <span>Note: Filings from past 5-6 weeks may be artificially low due to reporting lags.</span>
        <JsonLoader<MonthlyFilingsRow[]> url={MONTHLY_FILINGS.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <MonthlyFilingsWithValues values={values} />}
        </JsonLoader>
    </>;
}

type MonthlyFilingsDisplayRow = {
    zipcode: string,
    region: string,
    borough: string,
    two_months_ago: number,
    three_months_ago: number,
    num_increase: number,
    percent_increase: number
};

interface Props {
    columns: Array<Column<MonthlyFilingsDisplayRow>>;
    data: Array<MonthlyFilingsDisplayRow>;
}

const Table: React.FC<Props> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<MonthlyFilingsDisplayRow>(
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

function makeColumns(): Column<MonthlyFilingsDisplayRow>[] {
    const cols: Column<MonthlyFilingsDisplayRow>[] =
        React.useMemo(
            () =>
        [
            {
                Header: "Zipcode",
                accessor: "zipcode" as keyof MonthlyFilingsDisplayRow,
            },
            {
                Header: "Borough",
                accessor: "borough" as keyof MonthlyFilingsDisplayRow,
            },
            {
                Header: "2 months ago",
                accessor: "two_months_ago" as keyof MonthlyFilingsDisplayRow,
            },
            {
                Header: "3 months ago",
                accessor: "three_months_ago" as keyof MonthlyFilingsDisplayRow,
            },
            {
                Header: "# Increase",
                accessor: "num_increase" as keyof MonthlyFilingsDisplayRow,
            },
            {
                Header: "% Increase",
                accessor: "percent_increase" as keyof MonthlyFilingsDisplayRow,
            },
        ], []);
    return cols;
}


const MonthlyFilingsWithValues: React.FC<{values: MonthlyFilingsRow[]}> = (values) => {
    var data = values.values;
    const columns = makeColumns();
    return (<Table columns={columns} data={data} />);
}