import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const ACTIVE_CASES = new QueryFiles(`total-active-cases`);

export function convertActiveCasesRow(row: any) {
  return {
    day: (row.day as Date).toISOString(),
    active_cases: toInt(row.active_cases),
  };
}

export type ActiveCasesRow = ReturnType<typeof convertActiveCasesRow>;

export type ActiveCasesNumericFields = Omit<ActiveCasesRow, "day">;

function getActiveCasesCsvHeader(): string[] {
  return [
    'day',
    'active_cases',
  ];
}

function toActiveCasesCsvRow(row: ActiveCasesRow): string[] {
  return [
    row.day.substr(0, 10),
    row.active_cases.toString(),
  ];
}

export const ActiveCasesQuery: Query<ActiveCasesRow> = {
  files: ACTIVE_CASES,
  sqlToRow: convertActiveCasesRow,
  csvHeader: getActiveCasesCsvHeader(),
  toCsvRow: toActiveCasesCsvRow,
};
