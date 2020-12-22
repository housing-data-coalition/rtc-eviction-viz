import { ensureString, toInt, toIntOrNull } from "../converters";
import { Query, QueryFiles } from "../query";

export const FILINGS_BY_ZIP = new QueryFiles(`filings-by-zip-since-0323`);

export const FILINGS_BY_ZIP_EMPTY_ROW: FilingsByZipRow = {
  zipcode: '',
  filings_since_032320: 0,
  unitsres_total: null,
  unitsrental: null,
  filingsrate_2plus: null,
};

export function convertFilingsByZipRow(row: any) {
  return {
    zipcode: ensureString(row.zipcode),
    filings_since_032320: toInt(row.filings_since_032320),
    unitsres_total: toIntOrNull(row.unitsres_total),
    unitsrental: toIntOrNull(row.unitsrental),
    filingsrate_2plus: toIntOrNull(row.filingsrate_2plus),
  };
}

export type FilingsByZipRow = ReturnType<typeof convertFilingsByZipRow>;

function getCsvHeader(): string[] {
  return [
    'zipcode',
    'filings_since_032320',
    'unitsres_total',
    'unitsrental',
    'filingsrate_2plus',
  ];
}

function toCsvRow(row: FilingsByZipRow): string[] {
  return [
    row.zipcode,
    row.filings_since_032320.toString(),
    row.unitsres_total?.toString() ?? '',
    row.unitsrental?.toString() ?? '',
    row.filingsrate_2plus?.toString() ?? '',
  ];
}

export const FilingsByZipQuery: Query<FilingsByZipRow> = {
  files: FILINGS_BY_ZIP,
  sqlToRow: convertFilingsByZipRow,
  csvHeader: getCsvHeader(),
  toCsvRow: toCsvRow,
};
