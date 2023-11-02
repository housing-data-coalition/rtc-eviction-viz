import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const EVICTION_TIME_SERIES = new QueryFiles(`eviction-time-series`);

export function convertEvictionTimeSeriesRow(row: any) {
  return {
    day: (row.day as Date).toISOString(),
    nyc_holdover_filings: toInt(row.nyc_holdover_filings),
    nyc_holdover_res_filings: toInt(row.nyc_holdover_res_filings),
    nyc_nonpay_filings: toInt(row.nyc_nonpay_filings),
    nyc_nonpay_res_filings: toInt(row.nyc_nonpay_res_filings),
    outside_nyc_holdover_filings: toInt(row.outside_nyc_holdover_filings),
    outside_nyc_nonpay_filings: toInt(row.outside_nyc_nonpay_filings),
    total_filings: toInt(row.total_filings),
  };
}

export type EvictionTimeSeriesRow = ReturnType<typeof convertEvictionTimeSeriesRow>;

export type EvictionTimeSeriesNumericFields = Omit<EvictionTimeSeriesRow, "day">;

function getEvictionTimeSeriesCsvHeader(): string[] {
  return [
    'day',
    'nyc_holdover_filings',
    'nyc_holdover_res_filings',
    'nyc_nonpay_filings',
    'nyc_nonpay_res_filings',
    'outside_nyc_holdover_filings',
    'outside_nyc_nonpay_filings',
    'total_filings',
  ];
}

function toEvictionTimeSeriesCsvRow(row: EvictionTimeSeriesRow): string[] {
  return [
    row.day.substr(0, 10),
    row.nyc_holdover_filings.toString(),
    row.nyc_holdover_res_filings.toString(),
    row.nyc_nonpay_filings.toString(),
    row.nyc_nonpay_res_filings.toString(),
    row.outside_nyc_holdover_filings.toString(),
    row.outside_nyc_nonpay_filings.toString(),
    row.total_filings.toString(),
  ];
}

export const EvictionTimeSeriesQuery: Query<EvictionTimeSeriesRow> = {
  files: EVICTION_TIME_SERIES,
  sqlToRow: convertEvictionTimeSeriesRow,
  csvHeader: getEvictionTimeSeriesCsvHeader(),
  toCsvRow: toEvictionTimeSeriesCsvRow,
};
