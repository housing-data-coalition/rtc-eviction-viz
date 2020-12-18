import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { getHTMLElement } from "@justfixnyc/util";
import { EvictionTimeSeriesNumericFields, EVICTION_TIME_SERIES } from "./lib/eviction-time-series/data";
import { FILINGS_BY_ZIP } from "./lib/filings-by-zip/data";
import { QueryFiles } from "./lib/query";
import { EvictionVisualizations, EVICTION_VISUALIZATIONS, isEvictionTimeSeriesNumericField } from "./lib/eviction-time-series/viz";
import { VizFallback, VIZ_GEO_CLASS } from "./lib/viz-util";

const EVICTION_VIZ_DEFAULT_HEIGHT = 150;

const VIEW_WIDGET = "widget";

const VIEW_CONFIGURE_WIDGET = "config";

const QS_VIEW = "view";

const QS_FIELD_NAME = "fieldName";

const QS_HEIGHT = "height";

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
    <p><a href={`?${QS_VIEW}=${VIEW_CONFIGURE_WIDGET}`}>Configure this page as a widget</a></p>
    <p><a href="https://github.com/housing-data-coalition/rtc-eviction-viz">Learn more on GitHub</a></p>
  </div>
);

const Widget: React.FC<{
  fieldName: keyof EvictionTimeSeriesNumericFields,
  height: number,
}> = ({fieldName, height}) => {
  return <EvictionVisualizations height={height} fieldNames={[fieldName]} />;
};

const ConfigureWidget: React.FC<{}> = () => {
  return (
    <>
      <h1>New York Eviction Filings Widget Configurator</h1>
      <p>
        Use the following form to generate a widget. Once you submit it, grab the URL
        from the address bar and put it in an <code>&lt;iframe&gt;</code>. The widget will
        horizontally expand to fill all available space, so make sure you style your
        container as needed.
      </p>
      <form>
        <input type="hidden" name={QS_VIEW} value={VIEW_WIDGET} />
        <p>Time series visualization:</p>
        {Array.from(EVICTION_VISUALIZATIONS.entries()).map(([fieldName, title]) => (
          <div key={fieldName}>
            <label>
              <input type="radio" name={QS_FIELD_NAME} value={fieldName} />
              {title}
            </label>
          </div>
        ))}
        <p>
          <label htmlFor="height">Height of graph: </label>
          <input type="number" min="1" id="height" name={QS_HEIGHT} />
        </p>
        <p><button type="submit">Show widget</button></p>
      </form>
      <p><a href="./">Go back</a></p>
    </>
  );
};

function validateFieldName(fieldName: string|null): keyof EvictionTimeSeriesNumericFields {
  fieldName = fieldName || '';
  return isEvictionTimeSeriesNumericField(fieldName) ? fieldName : "total_filings";
}

function validatePositiveInt(value: string|null, defaultValue: number): number {
  const num = parseInt(value || '');
  if (!isNaN(num) && num > 0) return num;
  return defaultValue;
}

async function main() {
  const search = new URLSearchParams(window.location.search);
  const view = search.get(QS_VIEW);
  const app =
    view === VIEW_WIDGET ?
      <Widget
        fieldName={validateFieldName(search.get(QS_FIELD_NAME))}
        height={validatePositiveInt(search.get(QS_HEIGHT), EVICTION_VIZ_DEFAULT_HEIGHT)}
      /> :
    view === VIEW_CONFIGURE_WIDGET ? <ConfigureWidget /> :
    <FullDocument />;

  ReactDOM.render(app, getHTMLElement('div', '#app'));
}

main();
