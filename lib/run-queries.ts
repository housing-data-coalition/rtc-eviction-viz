import path from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { nycdbConnector } from "./db";
import { convertEvictionTimeSeriesRow } from "./eviction-time-series";

export async function main() {
  const nycdb = nycdbConnector.get();
  const sqlfile = 'sql/eviction-time-series.sql';
  const sql = readFileSync(sqlfile, { encoding: "utf-8" });
  console.log(`Running SQL in ${sqlfile}.`);
  const data = (await nycdb.any(sql)).map(convertEvictionTimeSeriesRow);
  await nycdb.$pool.end();
  const outfile = 'static/eviction-time-series.json';
  if (!existsSync("static")) {
    mkdirSync("static");
  }
  console.log(`Writing ${outfile}.`);
  writeFileSync(outfile, JSON.stringify(data, null, 2));
}
