import csvStringify from "csv-stringify/lib/sync";

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { nycdbConnector } from "./db";
import { convertEvictionTimeSeriesRow, EvictionTimeSeriesRow, EVICTION_TIME_SERIES_CSV, EVICTION_TIME_SERIES_JSON, getEvictionTimeSeriesCsvHeader, toEvictionTimeSeriesCsvRow } from "./eviction-time-series";

function writeOutputFiles(data: EvictionTimeSeriesRow[]) {
  const staticDir = 'static';
  const jsonOutfile = `${staticDir}/${EVICTION_TIME_SERIES_JSON}`;
  const csvOutfile = `${staticDir}/${EVICTION_TIME_SERIES_CSV}`;
  if (!existsSync(staticDir)) {
    mkdirSync(staticDir);
  }

  console.log(`Writing ${jsonOutfile}.`);
  writeFileSync(jsonOutfile, JSON.stringify(data, null, 2));

  console.log(`Writing ${csvOutfile}.`);
  const lines = [getEvictionTimeSeriesCsvHeader()];
  for (let row of data) {
    lines.push(toEvictionTimeSeriesCsvRow(row));
  }
  writeFileSync(csvOutfile, csvStringify(lines));
}

export async function main() {
  const nycdb = nycdbConnector.get();
  const sqlfile = 'sql/eviction-time-series.sql';
  const sql = readFileSync(sqlfile, { encoding: "utf-8" });
  console.log(`Running SQL in ${sqlfile}.`);
  const data = (await nycdb.any(sql)).map(convertEvictionTimeSeriesRow);
  await nycdb.$pool.end();
  writeOutputFiles(data);
}
