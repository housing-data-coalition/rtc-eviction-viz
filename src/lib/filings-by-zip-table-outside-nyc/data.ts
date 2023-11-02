import { ensureString, toInt, toIntOrNull } from "../converters";
import { Query, QueryFiles } from "../query";

export const FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE = new QueryFiles(`filings-by-zip-table-outside-nyc`);

export const FILINGS_BY_ZIP_OUTSIDE_NYC_EMPTY_ROW: FilingsByZipOutsideNYCRow = {
  court_name: '',
  zipcode: '',
  filings: 0,
};

export function convertFilingsByZipOutsideNYCRow(row: any) {
  return {
    court_name: ensureString(row.court_name),
    zipcode: ensureString(row.zipcode),
    filings: toInt(row.filings),
  };
}

export type FilingsByZipOutsideNYCRow = ReturnType<typeof convertFilingsByZipOutsideNYCRow>;

function getCsvHeader(): string[] {
  return [
    'court_name',
    'zipcode',
    'filings',
  ];
}

function toCsvRow(row: FilingsByZipOutsideNYCRow): string[] {
  return [
    row.court_name,
    row.zipcode,
    row.filings.toString(),
  ];
}

export const FilingsByZipOutsideNYCQuery: Query<FilingsByZipOutsideNYCRow> = {
  files: FILINGS_BY_ZIP_OUTSIDE_NYC_TABLE,
  sqlToRow: convertFilingsByZipOutsideNYCRow,
  csvHeader: getCsvHeader(),
  toCsvRow: toCsvRow,
};
