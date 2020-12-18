import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { getHTMLElement } from "@justfixnyc/util";
import { EvictionTimeSeriesNumericFields, EVICTION_TIME_SERIES } from "./lib/eviction-time-series/data";
import { FILINGS_BY_ZIP } from "./lib/filings-by-zip/data";
import { QueryFiles } from "./lib/query";
import { EvictionVisualizations, isEvictionTimeSeriesNumericField } from "./lib/eviction-time-series/viz";
import { VizFallback, VIZ_GEO_CLASS } from "./lib/viz-util";

const EVICTION_VIZ_DEFAULT_HEIGHT = 150;

const ZipCodeViz = React.lazy(() => import("./lib/filings-by-zip/viz"));

const DatasetDownloads: React.FC<{files: QueryFiles, title: string}> = ({files, title}) => (
  <>
    <p><a href={files.csv}>Download {title} CSV</a></p>
    <p><a href={files.json}>Download {title} JSON</a></p>
  </>
);

const FullDocument: React.FC<{}> = () => (
  <div className="viz-container">
    <h1>New York Eviction Filings Tracker</h1>
    <h2>Filings by zip code</h2>
    <Suspense fallback={<VizFallback className={VIZ_GEO_CLASS} />}>
      <ZipCodeViz height={600} />
    </Suspense>
    <small>Data sources: New York State Office of Court Administration eviction filings via github.com/nycdb/nycdb and PLUTO19v2. Total units per zip code excludes single-unit residential properties to approximate number of rental units.</small>
    <DatasetDownloads files={FILINGS_BY_ZIP} title="filings by zip code" />
    <br/>
    <h2>Filings over time</h2>
    <EvictionVisualizations height={EVICTION_VIZ_DEFAULT_HEIGHT} />
    <DatasetDownloads files={EVICTION_TIME_SERIES} title="filings over time" />
    <p><a href="https://github.com/housing-data-coalition/rtc-eviction-viz">Learn more on GitHub</a></p>
  </div>
);

const Widget: React.FC<{fieldName: keyof EvictionTimeSeriesNumericFields}> = ({fieldName}) => {
  return <EvictionVisualizations height={EVICTION_VIZ_DEFAULT_HEIGHT} fieldNames={[fieldName]} />;
};

function validateFieldName(fieldName: string): keyof EvictionTimeSeriesNumericFields {
  return isEvictionTimeSeriesNumericField(fieldName) ? fieldName : "total_filings";
}

async function main() {
  const search = new URLSearchParams(window.location.search);
  let app = <FullDocument />;
  const view = search.get('view');

  if (view === "widget") {
    app = <Widget fieldName={validateFieldName(search.get('fieldName') || '')} />;
  }

  ReactDOM.render(app, getHTMLElement('div', '#app'));
}

main();
