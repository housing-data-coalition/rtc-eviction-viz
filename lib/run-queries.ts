import { readFileSync, writeFileSync } from "fs";
import { nycdbConnector } from "./db";

export async function main() {
  const nycdb = nycdbConnector.get();
  const sqlfile = 'sql/eviction-time-series.sql';
  const sql = readFileSync(sqlfile, { encoding: "utf-8" });
  console.log(`Running SQL in ${sqlfile}.`);
  const data = (await nycdb.any(sql)).map(row => ({
    week: (row.week as Date).toISOString(),
    nyc_holdover_filings: parseInt(row.nyc_holdover_filings),
    nyc_nonpay_filings: parseInt(row.nyc_nonpay_filings),
    outside_nyc_holdover_filings: parseInt(row.outside_nyc_holdover_filings),
    outside_nyc_nonpay_filings: parseInt(row.outside_nyc_nonpay_filings),
    total_filings: parseInt(row.total_filings),
  }));
  await nycdb.$pool.end();
  const outfile = 'static/eviction-time-series.json';
  console.log(`Writing ${outfile}.`);
  writeFileSync(outfile, JSON.stringify(data, null, 2));
}
