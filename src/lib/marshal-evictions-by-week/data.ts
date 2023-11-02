import { toInt } from "../converters";
import { Query, QueryFiles } from "../query";

export const MARSHALEVICS = new QueryFiles(`marshal-evictions-by-week`);

export function convertMarshalEvicsRow(row: any) {
  return {
    week_eviction: (row.week_eviction as Date).toISOString(),
    marshalevictions: toInt(row.marshalevictions),
  };
}

export type MarshalEvicsRow = ReturnType<typeof convertMarshalEvicsRow>;

export type MarshalEvicsNumericFields = Omit<MarshalEvicsRow, "week_eviction">;

function getMarshalEvicsCsvHeader(): string[] {
  return [
    'week_eviction',
    'marshalevictions',
  ];
}

function toMarshalEvicsCsvRow(row: MarshalEvicsRow): string[] {
  return [
    row.week_eviction.substr(0, 10),
    row.marshalevictions.toString(),
  ];
}

export const MarshalEvicsQuery: Query<MarshalEvicsRow> = {
  files: MARSHALEVICS,
  sqlToRow: convertMarshalEvicsRow,
  csvHeader: getMarshalEvicsCsvHeader(),
  toCsvRow: toMarshalEvicsCsvRow,
};