import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const BOROUGH_PIE_CHART_ACTIVE_CASES = new QueryFiles(`borough-pie-chart-active-cases`);

export function convertBoroughPieChartActiveCasesRow(row: any) {
  return {
    count: toInt(row.count),
    borough: row.borough,
    timeBucket: row.timebucket
  };
}

export type BoroughPieChartActiveCasesRow = ReturnType<typeof convertBoroughPieChartActiveCasesRow>;

function getBoroughPieChartActiveCasesCsvHeader(): string[] {
  return [
    'count',
    'borough',
    'timeBucket'
  ];
}

function toBoroughPieChartActiveCasesCsvRow(row: BoroughPieChartActiveCasesRow): string[] {
  return [
    row.count,
    row.borough,
    row.timeBucket
  ];
}

export const BoroughPieChartActiveCasesQuery: Query<BoroughPieChartActiveCasesRow> = {
  files: BOROUGH_PIE_CHART_ACTIVE_CASES,
  sqlToRow: convertBoroughPieChartActiveCasesRow,
  csvHeader: getBoroughPieChartActiveCasesCsvHeader(),
  toCsvRow: toBoroughPieChartActiveCasesCsvRow,
};
