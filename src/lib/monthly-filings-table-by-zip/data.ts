
import { Query, QueryFiles } from "../query";

export const MONTHLY_FILINGS_BY_ZIP = new QueryFiles(`monthly-filings-table-by-zip`);

export function convertMonthlyFilingsByZipRow(row: any) {
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

export type MonthlyFilingsByZipRow = ReturnType<typeof convertMonthlyFilingsByZipRow>;

function getMonthlyFilingsByZipCsvHeader(): string[] {
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

function toMonthlyFilingsByZipCsvRow(row: MonthlyFilingsByZipRow): string[] {
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

export const MonthlyFilingsByZipTableQuery: Query<MonthlyFilingsByZipRow> = {
    files: MONTHLY_FILINGS_BY_ZIP,
    sqlToRow: convertMonthlyFilingsByZipRow,
    csvHeader: getMonthlyFilingsByZipCsvHeader(),
    toCsvRow: toMonthlyFilingsByZipCsvRow,
};