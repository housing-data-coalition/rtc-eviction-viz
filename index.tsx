import React from "react";
import ReactDOM from "react-dom";

import { getHTMLElement } from "@justfixnyc/util";
import { EvictionTimeSeriesRow, EVICTION_TIME_SERIES } from "./lib/eviction-time-series/data";

import { FilingsByZipRow, FILINGS_BY_ZIP } from "./lib/filings-by-zip/data";
import { QueryFiles } from "./lib/query";
import { EvictionVisualizations } from "./lib/eviction-time-series/viz";
import { ZipCodeViz } from "./lib/filings-by-zip/viz";

async function fetchJSON<T>(path: string): Promise<T> {
  return (await fetch(path)).json();
}

const DatasetDownloads: React.FC<{files: QueryFiles, title: string}> = ({files, title}) => (
  <>
    <p><a href={files.csv}>Download {title} CSV</a></p>
    <p><a href={files.json}>Download {title} JSON</a></p>
  </>
);

async function main() {
  const evictionValues = await fetchJSON<EvictionTimeSeriesRow[]>(EVICTION_TIME_SERIES.json);
  const zipcodeValues = await fetchJSON<FilingsByZipRow[]>(FILINGS_BY_ZIP.json);

  ReactDOM.render(
    <div>
      <h2>Filings by zip code</h2>
      <ZipCodeViz values={zipcodeValues} />
      <DatasetDownloads files={FILINGS_BY_ZIP} title="filings by zip code" />
      <br/>
      <h2>Filings over time</h2>
      <EvictionVisualizations values={evictionValues} />
      <DatasetDownloads files={EVICTION_TIME_SERIES} title="filings over time" />
    </div>,
    getHTMLElement('div', '#app')
  );
}

main();
