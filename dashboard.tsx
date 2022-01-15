import React, { Suspense, useState } from "react";
import { EvictionTimeSeriesNumericFields, EVICTION_TIME_SERIES } from "./lib/eviction-time-series/data";
import { FILINGS_BY_ZIP } from "./lib/filings-by-zip/data";
import { QueryFiles } from "./lib/query";
import { EvictionVisualizations, EVICTION_VISUALIZATIONS } from "./lib/eviction-time-series/viz";
import { ActiveCasesVisualizations } from "./lib/total-active-cases/viz";
import { JudgmentsStatewideVisualizations } from "./lib/total-judgments-statewide/viz";
import { JudgmentsCitywideVisualizations } from "./lib/total-judgments-citywide/viz";
import { ActiveCasesTable } from "./lib/total-active-cases-table/viz";
import { VizFallback, VIZ_GEO_CLASS } from "./lib/viz-util";
import { FilingsByZipOutsideNYCTable } from "./lib/filings-by-zip-table-outside-nyc/viz";
import { MonthlyFilingsTableByZip } from "./lib/monthly-filings-table-by-zip/viz";
import { MonthlyFilingsTableCitywide } from "./lib/monthly-filings-table-citywide/viz";
import { BoroughPieChartsActiveCases } from "./lib/borough-pie-chart-active-cases/viz";
import {
  VIEW_CONFIGURE_WIDGET,
  EVICTION_VIZ_DEFAULT_HEIGHT,
  VIEW_WIDGET,
  QS_VIEW,
  QS_FIELD_NAME,
  QS_HEIGHT,
  ACTIVE_CASES_VIZ_DEFAULT_HEIGHT,
  JUDGMENTS_VIZ_DEFAULT_HEIGHT
} from "./contants";

const ZipCodeViz = React.lazy(() => import("./lib/filings-by-zip/viz"));

type OtherVisualization = "filings_by_zip" | "total_active_cases" | "total_judgments";

type WidgetVisualization = keyof EvictionTimeSeriesNumericFields | OtherVisualization;

const OTHER_VISUALIZATIONS: Map<OtherVisualization, string> = new Map([
  ["filings_by_zip", "Filings By Zip Code"],
  ["total_active_cases", "Total Active Cases"],
  ["total_judgments", "Total Eviction Judgments"],
]);

const DatasetDownloads: React.FC<{files: QueryFiles, title: string}> = ({files, title}) => (
  <>
    <p><a href={files.csv}>Download {title} CSV</a></p>
    <p><a href={files.json}>Download {title} JSON</a></p>
  </>
);

const LazyZipCodeViz: React.FC<{height: number}> = ({height}) => (
  <Suspense fallback={<VizFallback className={VIZ_GEO_CLASS} />}>
    <ZipCodeViz height={height} />
  </Suspense>
);

export const FullDocument: React.FC<{}> = () => (
  <div className="container">
    <h1>New York Eviction Filings Tracker</h1>
    <p>
      Managed by RTC Coalition's <a href="https://www.righttocounselnyc.org/hcmc" target="_blank">Housing Courts Must Change! Campaign</a><br />
      <em>Powered by the <a href="https://www.housingdatanyc.org/" target="_blank">Housing Data Coalition</a>, <a href="https://www.justfix.nyc/" target="_blank">JustFix.nyc</a>, and <a href="https://anhd.org/" target="_blank">ANHD</a></em>
    </p>
    <h2>Total Active Cases</h2>
    <ActiveCasesTable />
    <br/>
    <BoroughPieChartsActiveCases />
    <br/>
    <h2>Active Cases since 2020</h2>
    <ActiveCasesVisualizations height={ACTIVE_CASES_VIZ_DEFAULT_HEIGHT} />
    <br/>
    <h2>Eviction Judgments since 3/23/2020</h2>
    <JudgmentsStatewideVisualizations height={JUDGMENTS_VIZ_DEFAULT_HEIGHT} />
    <JudgmentsCitywideVisualizations height={JUDGMENTS_VIZ_DEFAULT_HEIGHT} />
    <br/>
    <h2>Filings by zip code (NYC)</h2>
    <LazyZipCodeViz height={600} />
    <small><strong>Data sources:</strong> New York State Office of Court Administration eviction filings and PLUTO19v2 via <a href="https://github.com/nycdb/nycdb" target="_blank">NYCDB</a>. By the <a href="https://housingdatanyc.org" target="_blank">Housing Data Coalition</a>, <a href="https://justfix.nyc" target="_blank">JustFix.nyc</a>, and <a href="https://anhd.org" target="_blank">ANHD</a>. *Numbers of total units per zip code exclude single-unit properties to approximate the number of rental units.</small>
    <DatasetDownloads files={FILINGS_BY_ZIP} title="filings by zip code (NYC)" />
    <br/>
    <h2>Filings by zip code (Outside NYC)</h2>
    <FilingsByZipOutsideNYCTable />
    <br />
    <h2>Monthly filings</h2>
    <h3>By zip code</h3>
    <MonthlyFilingsTableByZip />
    <h3>Statewide</h3>
    <MonthlyFilingsTableCitywide />
    <br />
    <h2>Filings over time</h2>
    <EvictionVisualizations height={EVICTION_VIZ_DEFAULT_HEIGHT} />
    <DatasetDownloads files={EVICTION_TIME_SERIES} title="filings over time" />
    <p><a href={`?${QS_VIEW}=${VIEW_CONFIGURE_WIDGET}`}>Configure this page as a widget</a></p>
    <p><a href="https://github.com/housing-data-coalition/rtc-eviction-viz">Learn more on GitHub</a></p>
    <p><a href="https://github.com/housing-data-coalition/rtc-eviction-viz/actions/workflows/deploy.yml">See when this site was last deployed</a></p>
    <br/>
  </div>
);

export const Widget: React.FC<{
  fieldName: WidgetVisualization,
  height: number,
}> = ({fieldName, height}) => {
  if (fieldName === "filings_by_zip") return <LazyZipCodeViz height={height} />;
  if (fieldName === "total_active_cases") return <ActiveCasesVisualizations height={height} />;
  if (fieldName === "total_judgments") return <JudgmentsStatewideVisualizations height={height} />;
  return <EvictionVisualizations height={height} fieldNames={[fieldName]} />;
};

export const ConfigureWidget: React.FC<{}> = () => {
  return (
    <div className="container">
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
        <p>Other visualization:</p>
        {Array.from(OTHER_VISUALIZATIONS.entries()).map(([fieldName, title]) => (
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
    </div>
  );
};

function isWidgetVisualization(fieldName: string): fieldName is WidgetVisualization {
  const combinedMap = new Map<WidgetVisualization, string>([
    ...EVICTION_VISUALIZATIONS.entries(),
    ...OTHER_VISUALIZATIONS.entries(),
  ]);
  return combinedMap.has(fieldName as any);
}

export function validateFieldName(fieldName: string|null): WidgetVisualization {
  fieldName = fieldName || '';
  if (isWidgetVisualization(fieldName)) return fieldName;
  return "total_filings";
}

export function validatePositiveInt(value: string|null, defaultValue: number): number {
  const num = parseInt(value || '');
  if (!isNaN(num) && num > 0) return num;
  return defaultValue;
}