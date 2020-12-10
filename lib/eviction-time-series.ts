export const EVICTION_TIME_SERIES = `eviction-time-series`;

export const EVICTION_TIME_SERIES_JSON = `${EVICTION_TIME_SERIES}.json`;

export const EVICTION_TIME_SERIES_CSV = `${EVICTION_TIME_SERIES}.csv`;

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

export function getEvictionTimeSeriesCsvHeader(): string[] {
  return [
    'week',
    'nyc_holdover_filings',
    'nyc_nonpay_filings',
    'outside_nyc_holdover_filings',
    'outside_nyc_nonpay_filings',
    'total_filings',
  ];
}

export function toEvictionTimeSeriesCsvRow(row: EvictionTimeSeriesRow): string[] {
  return [
    row.week.substr(0, 10),
    row.nyc_holdover_filings.toString(),
    row.nyc_nonpay_filings.toString(),
    row.outside_nyc_holdover_filings.toString(),
    row.outside_nyc_nonpay_filings.toString(),
    row.total_filings.toString(),
  ];
}
