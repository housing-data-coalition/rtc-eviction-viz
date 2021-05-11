import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const TOTAL_ACTIVE_CASES_TABLE = new QueryFiles(`total-active-cases-table`);

export function convertTotalActiveCasesRow(row: any) {
  return {
    count: toInt(row.count),
    category: row.category,
  };
}

export type TotalActiveCasesRow = ReturnType<typeof convertTotalActiveCasesRow>;

//export type ActiveCasesNumericFields = Omit<ActiveCasesRow, "day">;

function getTotalActiveCasesCsvHeader(): string[] {
  return [
    'count',
    'category',
  ];
}

function toTotalActiveCasesCsvRow(row: TotalActiveCasesRow): string[] {
  return [
    row.count,
    row.category
  ];
}

export const TotalActiveCasesTableQuery: Query<TotalActiveCasesRow> = {
  files: TOTAL_ACTIVE_CASES_TABLE,
  sqlToRow: convertTotalActiveCasesRow,
  csvHeader: getTotalActiveCasesCsvHeader(),
  toCsvRow: toTotalActiveCasesCsvRow,
};
