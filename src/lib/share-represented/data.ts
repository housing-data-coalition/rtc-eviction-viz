import { Query, QueryFiles } from "../query";

export const PCT_REPPED = new QueryFiles(`share-represented`);

export function convertPctReppedRow(row: any) {
  return {
    day: (row.day as Date).toISOString(),
    rep_rate: row.rep_rate,
  };
}

export type PctReppedRow = ReturnType<typeof convertPctReppedRow>;

export type PctReppedNumericFields = Omit<PctReppedRow, "day">;

function getPctReppedCsvHeader(): string[] {
  return [
    'day',
    'rep_rate',
  ];
}

function toPctReppedCsvRow(row: PctReppedRow): string[] {
  return [
    row.day.substr(0, 10),
    row.rep_rate.toString(),
  ];
}

export const PctReppedQuery: Query<PctReppedRow> = {
  files: PCT_REPPED,
  sqlToRow: convertPctReppedRow,
  csvHeader: getPctReppedCsvHeader(),
  toCsvRow: toPctReppedCsvRow,
};