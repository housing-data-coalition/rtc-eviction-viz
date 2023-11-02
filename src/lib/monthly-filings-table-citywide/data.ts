import { Query, QueryFiles } from "../query";

export const MONTHLY_FILINGS_CITYWIDE = new QueryFiles(`monthly-filings-table-citywide`);

export function convertMonthlyFilingsCitywideRow(row: any) {
    return {
        borough: row.borough,
        region: row.region,
        two_months_ago: row.two_months_ago,
        three_months_ago: row.three_months_ago,
        num_increase: row.num_increase,
        percent_increase: row.percent_increase,
    };
}

export type MonthlyFilingsCitywideRow = ReturnType<typeof convertMonthlyFilingsCitywideRow>;

function getMonthlyFilingsCitywideCsvHeader(): string[] {
    return [
        'borough',
        'region',
        'two_months_ago',
        'three_months_ago',
        'num_increase',
        'percent_increase'
    ];
}

function toMonthlyFilingsCitywideCsvRow(row: MonthlyFilingsCitywideRow): string[] {
    return [
        row.borough,
        row.region,
        row.two_months_ago,
        row.three_months_ago,
        row.num_increase,
        row.percent_increase,
    ];
}


export const MonthlyFilingsCitywideTableQuery: Query<MonthlyFilingsCitywideRow> = {
    files: MONTHLY_FILINGS_CITYWIDE,
    sqlToRow: convertMonthlyFilingsCitywideRow,
    csvHeader: getMonthlyFilingsCitywideCsvHeader(),
    toCsvRow: toMonthlyFilingsCitywideCsvRow,
};