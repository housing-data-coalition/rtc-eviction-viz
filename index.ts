import { getHTMLElement } from "@justfixnyc/util";
import embed from "vega-embed";
import * as Vega from "vega";
import { EvictionTimeSeriesNumericFields, EvictionTimeSeriesRow, EVICTION_TIME_SERIES } from "./lib/eviction-time-series";

async function getEvictionTimeSeries(): Promise<EvictionTimeSeriesRow[]> {
  return (await fetch(EVICTION_TIME_SERIES.json)).json();
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
  lagWeeks: number
): string {
  const maxEvictionDateNum = Math.max.apply(
    Math,
    data.map(row => Date.parse(row.week))
  );
  let returnDate = new Date(maxEvictionDateNum);
  returnDate.setDate(returnDate.getDate() - lagWeeks * 7);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}

async function showViz(
  values: EvictionTimeSeriesRow[],
  fieldName: keyof EvictionTimeSeriesNumericFields,
  title: string,
) {
  const casesSinceCovid = values.filter(
      row => row.week >= "2020-03-23 00:00:00"
    ).reduce(
      (total, row) => total + row[fieldName], 0
    );
  const EvictionDataLagStart = getEvictionDataLagDate(values, 4); // 4 weeks for lag
  const EvictionDataLagEnd = getEvictionDataLagDate(values, 0); // latest date
  const div = document.createElement("div");
  const embedResult = embed(div, {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: "A simple bar chart with embedded data.",
    width: 750,
    height: 150,
    title: {
      text: `${title}, 2019 - Present`,
      subtitle: `Cases since COVID-19: ${casesSinceCovid.toLocaleString()}`
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
            field: "week",
            type: "temporal",
          },
          tooltip: [
            {
              field: "week",
              title: "Week of",
              type: "temporal",
              format: "%b %d, %Y",
            },
            {
              field: fieldName,
              title: "Filings",
              formatType: "numberWithCommas"
            },
          ],
        },
        layer: [
          {
            mark: {
              type: "line",
              interpolate: "monotone",
            },
            encoding: {
              x: {
                field: "week",
                type: "temporal",
                axis: {
                  title: "",
                  format: "%b ’%y",
                  labelAngle: 45,
                },
              },
              y: {
                field: fieldName,
                type: "quantitative",
                axis: {
                  title: "Eviction Filings per Week",
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
            mark: { type: "point", strokeWidth: 4},
            encoding: {
              x: {
                field: "week",
                type: "temporal",
              },
              y: {
                field: fieldName,
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
  });

  const root = getHTMLElement('div', '#viz');
  root.append(div);
}

async function main() {
  // Ideally we'd just hard-code these in the HTML, but we can't due to
  // https://github.com/parcel-bundler/parcel/issues/1186.
  getHTMLElement('a', '#csv').href = EVICTION_TIME_SERIES.csv;
  getHTMLElement('a', '#json').href = EVICTION_TIME_SERIES.json;

  const values = await getEvictionTimeSeries();
  showViz(values, "total_filings", "Total NY State Eviction Filings");
  showViz(values, "nyc_holdover_filings", "NYC Holdover Filings");
  showViz(values, "nyc_nonpay_filings", "NYC Non-Payment Filings");
  showViz(values, "outside_nyc_holdover_filings", "Upstate Holdover Filings");
  showViz(values, "outside_nyc_nonpay_filings", "Upstate Non-Payment Filings");
}

main();
