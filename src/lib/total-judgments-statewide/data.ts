import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const JUDGMENTS = new QueryFiles(`total-judgments-statewide`);

export function convertJudgmentsRow(row: any) {
  return {
    day: (row.day as Date).toISOString(),
    judgments: toInt(row.judgments),
  };
}

export type JudgmentsRow = ReturnType<typeof convertJudgmentsRow>;

export type JudgmentsNumericFields = Omit<JudgmentsRow, "day">;

function getJudgmentsCsvHeader(): string[] {
  return [
    'day',
    'judgments',
  ];
}

function toJudgmentsCsvRow(row: JudgmentsRow): string[] {
  return [
    row.day.substr(0, 10),
    row.judgments.toString(),
  ];
}

export const JudgmentsStatewideQuery: Query<JudgmentsRow> = {
  files: JUDGMENTS,
  sqlToRow: convertJudgmentsRow,
  csvHeader: getJudgmentsCsvHeader(),
  toCsvRow: toJudgmentsCsvRow,
};