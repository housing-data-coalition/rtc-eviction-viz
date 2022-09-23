import { assertNotUndefined } from "@justfixnyc/util";
import React from "react";
import { useState } from "react";
import type { VisualizationSpec } from "vega-embed";
import { JsonLoader } from "../json-loader";
import { LazyVegaLite } from "../vega-lazy";
import { VizFallback, VIZ_TIME_SERIES_CLASS } from "../viz-util";
import { PctReppedNumericFields, PctReppedRow, PCT_REPPED } from "./data";



type PctReppedTimeUnit = "yearweek"|"yearmonth"|"yearmonthdate";

type PctReppedVizProps = {
  fieldName: keyof PctReppedNumericFields,
  title: string,
  timeUnit: PctReppedTimeUnit,
  height: number,
};

const PctReppedViz: React.FC<PctReppedVizProps> = (props) => {
  return (
    <JsonLoader<PctReppedRow[]> url={PCT_REPPED.json} fallback={<VizFallback className={VIZ_TIME_SERIES_CLASS} />}>
      {(values) => <PctReppedVizWithValues values={values} {...props} />}
    </JsonLoader>
  );
};

function thousands_separators(num: any)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

const PctReppedVizWithValues: React.FC<PctReppedVizProps & {
  values: PctReppedRow[],
}> = ({values, fieldName, title, timeUnit, height}) => {
  values = values.filter(
    // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
    // Otherwise, we can grab data from 1/1/2020 onwards
  row => row.day >= (timeUnit === "yearweek" ? "2022-01-01 00:00:00" : "2022-01-01 00:00:00")
  );
  // const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day"
  //   : timeUnit === "yearweek" ? "Week" 
  //   : "Month";
  const lineColor = "#AF2525";

  const spec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      align: "left",
      anchor: "start",
      text: `Share of Represented Tenants`,
      fontSize: 24,
      subtitle: [
        `Percent of all tenants with eviction cases who are represented`, `by an attorney by the week the case was filed`,
        // This effectively adds extra padding below the subtitle.
        ""
      ],
      subtitleFontSize: 16,
    },
    layer: [
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
              title: `Week of`,
              type: "temporal",
              format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y",
            },
            {
              field: fieldName,
              // aggregate: "sum",
              title: "Represented tenants (%)",
              // formatType: "numberWithCommas"
            },
          ],
        },
        layer: [
          {
            mark: {
              type: "line",
              color: lineColor,
              interpolate: "monotone",
              opacity: 1,
            },
            encoding: {
              x: {
                timeUnit,
                field: "day",
                axis: {
                  title: "",
                  format: "%b %d ’%y",
                  labelAngle: 45,
                  grid: false,
                },
              },
              y: {
                field: `${fieldName}`,
                aggregate: "sum",
                axis: {
                  title: `Percent of tenants with representation (%)`,
                },
                scale: {"zero": false},
              },
            },
          },
          {
            mark: {
              type: "line",
              color: lineColor,
              interpolate: "monotone",
              strokeWidth: 4,
            },
            encoding: {
              x: {
                timeUnit,
                field: "day",
                axis: {
                  title: "",
                  format: "%b ’%y",
                },
              },
              y: {
                field: fieldName,
                aggregate: "sum",
                axis: {
                },
                scale: {"zero": false},
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
  return <LazyVegaLite spec={spec} className={VIZ_TIME_SERIES_CLASS} />;
};

export function isPctReppedNumericField(value: string): value is keyof PctReppedNumericFields {
  return PCT_REPPED_VISUALIZATIONS.has(value as any);
}

export const PCT_REPPED_VISUALIZATIONS: Map<keyof PctReppedNumericFields, string> = new Map([
  ["rep_rate", "PctRepped"],
]);

export const PctReppedVisualizations: React.FC<{
  height: number,
  fieldNames?: (keyof PctReppedNumericFields)[]
}> = ({height, fieldNames}) => {
  const [timeUnit, setTimeUnit] = useState<PctReppedTimeUnit>("yearweek");

  fieldNames = fieldNames || Array.from(PCT_REPPED_VISUALIZATIONS.keys());

  return (
    <>
      {fieldNames.map(fieldName => (
        <PctReppedViz
          key={fieldName}
          height={height}
          timeUnit={timeUnit}
          fieldName={fieldName}
          title={assertNotUndefined(PCT_REPPED_VISUALIZATIONS.get(fieldName))}
        />
      ))}
    </>
  );
};