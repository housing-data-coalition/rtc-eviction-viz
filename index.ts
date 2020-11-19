import embed from "vega-embed";
import { EvictionTimeSeriesRow } from "./lib/eviction-time-series";

async function getEvictionTimeSeries(): Promise<EvictionTimeSeriesRow[]> {
  return (await fetch("eviction-time-series.json")).json();
}

async function showViz() {
  const values = await getEvictionTimeSeries();
  const embedResult = embed("#viz", {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: "A simple bar chart with embedded data.",
    width: 750,
    height: 200,
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
          labelAngle: 45
        },
      },
      y: {
        field: "total_filings",
        type: "quantitative",
        axis: {
          title: "Eviction Filings per Week",
        },
      },
    },
  });
}

showViz();
