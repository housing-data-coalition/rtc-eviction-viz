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
