import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { getHTMLElement } from "@justfixnyc/util";
import { EVICTION_TIME_SERIES } from "./lib/eviction-time-series/data";
import { FILINGS_BY_ZIP } from "./lib/filings-by-zip/data";
import { QueryFiles } from "./lib/query";
import { EvictionVisualizations } from "./lib/eviction-time-series/viz";
import { VizFallback, VIZ_GEO_CLASS } from "./lib/viz-util";

const ZipCodeViz = React.lazy(() => import("./lib/filings-by-zip/viz"));

const DatasetDownloads: React.FC<{files: QueryFiles, title: string}> = ({files, title}) => (
  <>
    <p><a href={files.csv}>Download {title} CSV</a></p>
    <p><a href={files.json}>Download {title} JSON</a></p>
  </>
);

async function main() {
  ReactDOM.render(
    <div className="viz-container">
      <h2>Filings by zip code</h2>
      <Suspense fallback={<VizFallback className={VIZ_GEO_CLASS} />}>
        <ZipCodeViz height={600} />
      </Suspense>
      <small>Data sources: New York State Office of Court Administration eviction filings via github.com/nycdb/nycdb and PLUTO19v2. Total units per zip code excludes single-unit residential properties to approximate number of rental units.</small>
      <DatasetDownloads files={FILINGS_BY_ZIP} title="filings by zip code" />
      <br/>
      <h2>Filings over time</h2>
      <EvictionVisualizations height={150} />
      <DatasetDownloads files={EVICTION_TIME_SERIES} title="filings over time" />
    </div>,
    getHTMLElement('div', '#app')
  );
}

main();
