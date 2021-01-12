import csvStringify from "csv-stringify/lib/sync";

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { nycdbConnector } from "./db";
import { EvictionTimeSeriesQuery } from "./eviction-time-series/data";
import { ActiveCasesQuery } from "./total-active-cases/data";
import { FilingsByZipQuery } from "./filings-by-zip/data";
import { Query } from "./query";

async function processQuery<Row>(query: Query<Row>) {
  const data = await getQueryOutput(query);
  writeQueryOutputFiles(query, data);
}

function writeQueryOutputFiles<Row>(query: Query<Row>, data: Row[]) {
  const staticDir = 'static';
  const jsonOutfile = `${staticDir}/${query.files.json}`;
  const csvOutfile = `${staticDir}/${query.files.csv}`;
  if (!existsSync(staticDir)) {
    mkdirSync(staticDir);
  }

  console.log(`Writing ${jsonOutfile}.`);
  writeFileSync(jsonOutfile, JSON.stringify(data, null, 2));

  console.log(`Writing ${csvOutfile}.`);
  const lines = [query.csvHeader];
  for (let row of data) {
    lines.push(query.toCsvRow(row));
  }
  writeFileSync(csvOutfile, csvStringify(lines));
}

async function getQueryOutput<Row>(query: Query<Row>): Promise<Row[]> {
  const nycdb = nycdbConnector.get();
  const sqlfile = `sql/${query.files.sql}`;
  const sql = readFileSync(sqlfile, { encoding: "utf-8" });
  console.log(`Running SQL in ${sqlfile}.`);
  return (await nycdb.any(sql)).map(query.sqlToRow);
}

export async function main() {
  const nycdb = nycdbConnector.get();

  try {
    await processQuery(EvictionTimeSeriesQuery);
    await processQuery(ActiveCasesQuery);
    await processQuery(FilingsByZipQuery);
  } finally {
    await nycdb.$pool.end();
  }
}
