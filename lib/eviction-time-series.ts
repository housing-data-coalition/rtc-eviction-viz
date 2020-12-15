import { Query, QueryFiles } from "./query";

export const EVICTION_TIME_SERIES = new QueryFiles(`eviction-time-series`);

export function convertEvictionTimeSeriesRow(row: any) {
  return {
    week: (row.week as Date).toISOString(),
    nyc_holdover_filings: parseInt(row.nyc_holdover_filings),
    nyc_nonpay_filings: parseInt(row.nyc_nonpay_filings),
    outside_nyc_holdover_filings: parseInt(row.outside_nyc_holdover_filings),
    outside_nyc_nonpay_filings: parseInt(row.outside_nyc_nonpay_filings),
    total_filings: parseInt(row.total_filings),
  };
}

export type EvictionTimeSeriesRow = ReturnType<typeof convertEvictionTimeSeriesRow>;

export type EvictionTimeSeriesNumericFields = Omit<EvictionTimeSeriesRow, "week">;

function getEvictionTimeSeriesCsvHeader(): string[] {
  return [
    'week',
    'nyc_holdover_filings',
    'nyc_nonpay_filings',
    'outside_nyc_holdover_filings',
    'outside_nyc_nonpay_filings',
    'total_filings',
  ];
}

function toEvictionTimeSeriesCsvRow(row: EvictionTimeSeriesRow): string[] {
  return [
    row.week.substr(0, 10),
    row.nyc_holdover_filings.toString(),
    row.nyc_nonpay_filings.toString(),
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
