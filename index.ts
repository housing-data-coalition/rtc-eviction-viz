import embed from "vega-embed";
import * as Vega from "vega";
import { EvictionTimeSeriesRow } from "./lib/eviction-time-series";

async function getEvictionTimeSeries(): Promise<EvictionTimeSeriesRow[]> {
  return (await fetch('eviction-time-series.json')).json();
}

console.log("WOOO", embed, Vega, getEvictionTimeSeries());
