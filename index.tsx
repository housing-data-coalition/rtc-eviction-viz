import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { getHTMLElement } from "@justfixnyc/util";
import embedVega, { VisualizationSpec } from "vega-embed";
import * as Vega from "vega";
import { EvictionTimeSeriesNumericFields, EvictionTimeSeriesRow, EVICTION_TIME_SERIES } from "./lib/eviction-time-series";

// https://data.beta.nyc/dataset/nyc-zip-code-tabulation-areas
import ZipCodeGeoJSON from "./lib/nyc-zip-code-tabulation-areas.json";
import { FILINGS_BY_ZIP_EMPTY_ROW, FilingsByZipRow, FILINGS_BY_ZIP } from "./lib/filings-by-zip-since-0323";
import { QueryFiles } from "./lib/query";

async function fetchJSON<T>(path: string): Promise<T> {
  return (await fetch(path)).json();
}

/**
 * Return the given number with comma separators for improved readability.
 *
 * The implementation was taken from https://stackoverflow.com/a/2901298.
 *
 * Note that `Intl.NumberFormat` can do the same thing, but it's not
 * available in older browsers, and polyfilling all of `Intl` would
 * potentially add a lot of weight to our JS bundle.
 */
function numberWithCommas(x: number): string {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

Vega.expressionFunction("numberWithCommas", numberWithCommas);

/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getEvictionDataLagDate(
  data: EvictionTimeSeriesRow[],
  lagDays: number
): string {
  const maxEvictionDateNum = Math.max.apply(
    Math,
    data.map(row => Date.parse(row.day))
  );
  let returnDate = new Date(maxEvictionDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}

const VegaLite: React.FC<{spec: VisualizationSpec}> = ({spec}) => {
  const ref: React.MutableRefObject<HTMLDivElement|null> = useRef(null);

  useEffect(() => {
    const { current } = ref;
    if (!current) {
      throw new Error("Expected ref for Vega container to exist!");
    }
    const embedResult = embedVega(current, spec);

    return () => {
      embedResult.then(result => result.finalize())
    };
  }, [spec]);

  return <div ref={ref}></div>;
};

type EvictionTimeUnit = "yearweek"|"yearmonth";

const EvictionViz: React.FC<{
  values: EvictionTimeSeriesRow[],
  fieldName: keyof EvictionTimeSeriesNumericFields,
  title: string,
  timeUnit: EvictionTimeUnit
}> = ({values, fieldName, title, timeUnit}) => {
  values = values.filter(
    row => row.day >= "2020-01-01 00:00:00"
  );
  const casesSinceCovid = values.filter(
    row => row.day >= "2020-03-23 00:00:00"
  ).reduce(
    (total, row) => total + row[fieldName], 0
  );
  const EvictionDataLagStart = getEvictionDataLagDate(values, 30); // 4 weeks for lag
  const EvictionDataLagEnd = getEvictionDataLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearweek" ? "Week" : "Month";
  const lineColor = "#AF2525";
  const spec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: 750,
    height: 150,
    padding: {
      bottom: 50
    },
    title: {
      text: `${title}, 2020 - Present`,
      subtitle: [
        `Cases since COVID-19: ${casesSinceCovid.toLocaleString()}`,
        // This effectively adds extra padding below the subtitle.
        ""
      ]
    },
    layer: [
      {
        data: {
          values: [
            {
              lagDateStart: EvictionDataLagStart,
              lagDateEnd: EvictionDataLagEnd,
            },
          ],
        },
        layer: [
          {
            mark: { type: "rect", color: "grey", opacity: 0.3 },
            encoding: {
              x: { field: "lagDateStart", type: "temporal" },
              x2: { field: "lagDateEnd", type: "temporal" },
            },
          },
          {
            mark: {
              type: "text",
              align: "right",
              baseline: "bottom",
              dy: -76,
              text:
                "Due to reporting lags, data for most recent weeks (in gray) is incomplete",
            },
            encoding: {
              x: { field: "lagDateEnd", type: "temporal" },
            },
          },
        ],
      },
      {
        data: {
          values,
        },
        encoding: {
          x: {
            timeUnit,
            field: "day",
          },
          tooltip: [
            {
              field: "day",
              timeUnit,
              title: `${timeUnitLabel} of`,
              type: "temporal",
              format: "%b %d, %Y",
            },
            {
              field: fieldName,
              aggregate: "sum",
              title: "Filings",
              formatType: "numberWithCommas"
            },
          ],
        },
        layer: [
          {
            mark: {
              type: "line",
              color: lineColor,
              interpolate: "monotone",
            },
            encoding: {
              x: {
                timeUnit,
                field: "day",
                axis: {
                  title: "",
                  format: "%b ’%y",
                  labelAngle: 45,
                },
              },
              y: {
                field: fieldName,
                aggregate: "sum",
                axis: {
                  title: `Eviction Filings per ${timeUnitLabel}`,
                },
              },
            },
          },
          {
            selection: {
              index: {
                type: "single",
                on: "mousemove",
                encodings: ["x"],
                nearest: true,
                empty: "none",
                clear: "mouseout"
              },
            },
            mark: { type: "point", strokeWidth: 4, color: lineColor },
            encoding: {
              x: {
                timeUnit,
                field: "day",
              },
              y: {
                field: fieldName,
                aggregate: "sum",
                type: "quantitative",
              },
              opacity: {
                condition: {
                  selection: "index",
                  value: 1,
                },
                value: 0,
              },
            },
          },
        ],
      },
    ],
  };

  return <VegaLite spec={spec} />;
};

function mergeZipcodeFilingsIntoGeoJSON(values: FilingsByZipRow[]) {
  const map = new Map<string, FilingsByZipRow>();

  for (let value of values) {
    map.set(value.zipcode, value);
  }

  return {
    ...ZipCodeGeoJSON,
    features: ZipCodeGeoJSON.features.map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        ...(map.get(feature.properties.postalCode) || FILINGS_BY_ZIP_EMPTY_ROW),
      }
    }))
  };
}

const ZipCodeViz: React.FC<{values: FilingsByZipRow[]}> = ({values}) => {
  const geoJson = mergeZipcodeFilingsIntoGeoJSON(values);

  return <VegaLite spec={{
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    width: 640,
    height: 640,
    title: {
      text: `NYC Eviction Filings By Zip Code, March 23, 2020 - Present`,
    },
    data: {
      values: geoJson.features,
    },
    projection: {
      type: "albersUsa",
    },
    mark: "geoshape",
    encoding: {
      color: {
        field: "properties.filingsrate_2plus",
        type: "quantitative",
        title: [
          "Filings per unit of multi-family",
          "buildings"
        ],
      },
      tooltip: [
        {
          field: "properties.zipcode",
          title: "Zip code",
        },
        {
          field: "properties.filings_since_032320",
          title: "Total filings",
          formatType: "numberWithCommas"
        },
        {
          field: "properties.filingsrate_2plus",
          title: "Filings per unit",
          formatType: "numberWithCommas"
        },
      ]
    }
  }} />;
};

const EvictionVisualizations: React.FC<{values: EvictionTimeSeriesRow[]}> = ({values}) => {
  const [timeUnit, setTimeUnit] = useState<EvictionTimeUnit>("yearweek");

  return (
    <>
      <p>
        View by:&nbsp;&nbsp;
        <label>
          <input type="radio" name="timeUnit" value="yearweek" checked={timeUnit === "yearweek"} onClick={(e) => setTimeUnit("yearweek")} />
          Week
        </label>&nbsp;&nbsp;
        <label>
          <input type="radio" name="timeUnit" value="yearmonth" checked={timeUnit === "yearmonth"} onClick={(e) => setTimeUnit("yearmonth")} />
          Month
        </label>
      </p>
      <EvictionViz timeUnit={timeUnit} values={values} fieldName="total_filings" title="Total NY State Eviction Filings" />
      <EvictionViz timeUnit={timeUnit} values={values} fieldName="nyc_holdover_filings" title="NYC Holdover Filings" />
      <EvictionViz timeUnit={timeUnit} values={values} fieldName="nyc_nonpay_filings" title="NYC Non-Payment Filings" />
      <EvictionViz timeUnit={timeUnit} values={values} fieldName="outside_nyc_holdover_filings" title="Upstate Holdover Filings" />
      <EvictionViz timeUnit={timeUnit} values={values} fieldName="outside_nyc_nonpay_filings" title="Upstate Non-Payment Filings" />
    </>
  );
};

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
