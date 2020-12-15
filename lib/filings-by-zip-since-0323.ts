import { ensureString, toInt, toIntOrNull } from "./converters";
import { Query, QueryFiles } from "./query";

export const ZIPCODE_TIME_SERIES = new QueryFiles(`filings-by-zip-since-0323`);

export function convertZipcodeTimeSeriesRow(row: any) {
  return {
    zipcode: ensureString(row.zipcode),
    filings_since_032320: toInt(row.filings_since_032320),
    unitsres_total: toIntOrNull(row.unitsres_total),
    unitsres_2: toIntOrNull(row.unitsres_2),
    filingsrate_total: toIntOrNull(row.filingsrate_total),
    filingsrate_2plus: toIntOrNull(row.filingsrate_2plus),
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
    row.filings_since_032320.toString(),
    row.unitsres_total?.toString() ?? '',
    row.unitsres_2?.toString() ?? '',
    row.filingsrate_total?.toString() ?? '',
    row.filingsrate_2plus?.toString() ?? '',
  ];
}

export const ZipcodeTimeSeriesQuery: Query<ZipcodeTimeSeriesRow> = {
  files: ZIPCODE_TIME_SERIES,
  sqlToRow: convertZipcodeTimeSeriesRow,
  csvHeader: getCsvHeader(),
  toCsvRow: toTimeSeriesCsvRow,
};
