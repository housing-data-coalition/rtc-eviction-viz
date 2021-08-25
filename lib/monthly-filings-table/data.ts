
import { toStringFieldDef } from "vega-lite/build/src/channeldef";
import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const MONTHLY_FILINGS = new QueryFiles(`monthly-filings-table`);

export function convertMonthlyFilingsRow(row: any) {
    return {
        zipcode: row.zipcode,
        region: row.region,
        borough: row.borough,
        two_months_ago: row.two_months_ago,
        three_months_ago: row.three_months_ago,
        num_increase: row.num_increase,
        percent_increase: row.percent_increase,
    };
}

export type MonthlyFilingsRow = ReturnType<typeof convertMonthlyFilingsRow>;

function getMonthlyFilingsCsvHeader(): string[] {
    return [
        'zipcode',
        'region',
        'borough',
        'two_months_ago',
        'three_months_ago',
        'num_increase',
        'percent_increase'
    ];
}

function toMonthlyFilingsCsvRow(row: MonthlyFilingsRow): string[] {
    return [
        row.zipcode,
        row.region,
        row.borough,
        row.two_months_ago,
        row.three_months_ago,
        row.num_increase,
        row.percent_increase,
    ];
}

export const MonthlyFilingsTableQuery: Query<MonthlyFilingsRow> = {
    files: MONTHLY_FILINGS,
    sqlToRow: convertMonthlyFilingsRow,
    csvHeader: getMonthlyFilingsCsvHeader(),
    toCsvRow: toMonthlyFilingsCsvRow,
};