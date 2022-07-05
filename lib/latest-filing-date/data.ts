
import { Query, QueryFiles } from "../query";

export const LATEST_FILING_DATE = new QueryFiles(`latest-filing-date`);

export function convertLatestFilingDateRow(row: any) {
    return {
        latest_date: row.latest_date,
    };
}

export type LatestFilingDateRow = ReturnType<typeof convertLatestFilingDateRow>;

function getLatestFilingDateCsvHeader(): string[] {
    return [
        'latest_date'
    ];
}

function toLatestFilingDateCsvRow(row: LatestFilingDateRow): string[] {
    return [
        row.latest_date,
    ];
}

export const LatestFilingDateQuery: Query<LatestFilingDateRow> = {
    files: LATEST_FILING_DATE,
    sqlToRow: convertLatestFilingDateRow,
    csvHeader: getLatestFilingDateCsvHeader(),
    toCsvRow: toLatestFilingDateCsvRow,
};