import { Query, QueryFiles } from "./query";

export const ZIPCODE_TIME_SERIES = new QueryFiles(`filings-by-zip-since-0323`);

export function convertZipcodeTimeSeriesRow(row: any) {
  return {
    zipcode: row.zipcode as string,
    filings_since_032320: row.filings_since_032320 as string|null,
    unitsres_total: row.unitsres_total as string|null,
    unitsres_2: row.unitsres_2 as string|null,
    filingsrate_total: row.filingsrate_total as string|null,
    filingsrate_2plus: row.filingsrate_2plus as string|null,
  };
}

export type ZipcodeTimeSeriesRow = ReturnType<typeof convertZipcodeTimeSeriesRow>;

function getCsvHeader(): string[] {
  return [
    'zipcode',
    'filings_since_032320',
    'unitsres_total',
    'unitsres_2',
    'filingsrate_total',
    'filingsrate_2plus',
  ];
}

function toTimeSeriesCsvRow(row: ZipcodeTimeSeriesRow): string[] {
  return [
    row.zipcode,
    row.filings_since_032320 || '',
    row.unitsres_total || '',
    row.unitsres_2 || '',
    row.filingsrate_total || '',
    row.filingsrate_2plus || '',
  ];
}

export const ZipcodeTimeSeriesQuery: Query<ZipcodeTimeSeriesRow> = {
  files: ZIPCODE_TIME_SERIES,
  sqlToRow: convertZipcodeTimeSeriesRow,
  csvHeader: getCsvHeader(),
  toCsvRow: toTimeSeriesCsvRow,
};
