import embed from "vega-embed";
import { EvictionTimeSeriesRow } from "./lib/eviction-time-series";

async function getEvictionTimeSeries(): Promise<EvictionTimeSeriesRow[]> {
  return (await fetch("eviction-time-series.json")).json();
}

async function showViz(
  values: EvictionTimeSeriesRow[],
  fieldName: keyof EvictionTimeSeriesRow,
  title: string,
) {
  const div = document.createElement("div")
  const embedResult = embed(div, {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: "A simple bar chart with embedded data.",
    width: 750,
    height: 200,
    title,
    data: {
      values,
    },
    mark: {
      type: "line",
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
          title: "Eviction Filings per Week"
        },
      },
    },
  });
  document.body.append(div);
}

async function main() {
  const values = await getEvictionTimeSeries();
  showViz(values, "total_filings","Total NY State Eviction Filings, 2019 - Present");
  showViz(values, "nyc_holdover_filings","NYC Holdover Filings, 2019 - Present");
  showViz(values, "nyc_nonpay_filings","NYC Non-Payment Filings, 2019 - Present");
  showViz(values, "outside_nyc_holdover_filings","Upstate Holdover Filings 2019 - Present");
  showViz(values, "outside_nyc_nonpay_filings","Upstate Non-Payment Filings, 2019 - Present");
}

main();