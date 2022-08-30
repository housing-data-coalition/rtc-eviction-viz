import csvStringify from "csv-stringify/lib/sync";

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { nycdbConnector } from "./db";
import { EvictionTimeSeriesQuery } from "./eviction-time-series/data";
import { ActiveCasesQuery } from "./total-active-cases/data";
import { MarshalEvicsQuery } from "./marshal-evictions-by-week/data";
import { JudgmentsStatewideQuery } from "./total-judgments-statewide/data";
import { JudgmentsCitywideQuery } from "./total-judgments-citywide/data";
import { FilingsByZipQuery } from "./filings-by-zip/data";
import { TotalActiveCasesTableQuery } from "./total-active-cases-table/data";
import { FilingsByZipOutsideNYCQuery } from "./filings-by-zip-table-outside-nyc/data";
import { BoroughPieChartActiveCasesQuery } from "./borough-pie-chart-active-cases/data";
import { LatestFilingDateQuery } from "./latest-filing-date/data";

import { Query } from "./query";
import { MonthlyFilingsByZipTableQuery } from "./monthly-filings-table-by-zip/data";
import { MonthlyFilingsCitywideTableQuery } from "./monthly-filings-table-citywide/data";

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
    await processQuery(MarshalEvicsQuery);
    await processQuery(JudgmentsStatewideQuery);
    await processQuery(JudgmentsCitywideQuery);
    await processQuery(FilingsByZipQuery);
    await processQuery(TotalActiveCasesTableQuery);
    await processQuery(FilingsByZipOutsideNYCQuery);
    await processQuery(MonthlyFilingsByZipTableQuery);
    await processQuery(MonthlyFilingsCitywideTableQuery);
    await processQuery(BoroughPieChartActiveCasesQuery);
    await processQuery(LatestFilingDateQuery);
  } finally {
    await nycdb.$pool.end();
  }
}
