export type Query<Row> = {
  files: QueryFiles,
  sqlToRow: (row: any) => Row,
  csvHeader: string[],
  toCsvRow: (row: Row) => string[],
};

export class QueryFiles {
  readonly sql: string;
  readonly json: string;
  readonly csv: string;

  constructor(readonly baseName: string) {
    this.sql = `${baseName}.sql`;
    this.json = `${baseName}.json`;
    this.csv = `${baseName}.csv`;
  }
}
