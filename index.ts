import { getHTMLElement } from "@justfixnyc/util";
import embed from "vega-embed";
import { EvictionTimeSeriesNumericFields, EvictionTimeSeriesRow, EVICTION_TIME_SERIES_CSV, EVICTION_TIME_SERIES_JSON } from "./lib/eviction-time-series";

async function getEvictionTimeSeries(): Promise<EvictionTimeSeriesRow[]> {
  return (await fetch(EVICTION_TIME_SERIES_JSON)).json();
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
  });

  const root = getHTMLElement('div', '#viz');
  root.append(div);
}

async function main() {
  // Ideally we'd just hard-code these in the HTML, but we can't due to
  // https://github.com/parcel-bundler/parcel/issues/1186.
  getHTMLElement('a', '#csv').href = EVICTION_TIME_SERIES_CSV;
  getHTMLElement('a', '#json').href = EVICTION_TIME_SERIES_JSON;

  const values = await getEvictionTimeSeries();
  showViz(values, "total_filings", "Total NY State Eviction Filings");
  showViz(values, "nyc_holdover_filings", "NYC Holdover Filings");
  showViz(values, "nyc_nonpay_filings", "NYC Non-Payment Filings");
  showViz(values, "outside_nyc_holdover_filings", "Upstate Holdover Filings");
  showViz(values, "outside_nyc_nonpay_filings", "Upstate Non-Payment Filings");
}

main();
