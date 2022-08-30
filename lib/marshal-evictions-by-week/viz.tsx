import { assertNotUndefined } from "@justfixnyc/util";
import React from "react";
import { useState } from "react";
import type { VisualizationSpec } from "vega-embed";
import { JsonLoader } from "../json-loader";
import { LazyVegaLite } from "../vega-lazy";
import { VizFallback, VIZ_TIME_SERIES_CLASS } from "../viz-util";
import { MarshalEvicsNumericFields, MarshalEvicsRow, MARSHALEVICS } from "./data";

/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getMarshalEvicsLagDate(
  data: MarshalEvicsRow[],
  lagDays: number
): string {
  const maxMarshalEvicsDateNum = Math.max.apply(
    Math,
    data.map(row => Date.parse(row.week_eviction))
  );
  let returnDate = new Date(maxMarshalEvicsDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}

type MarshalEvicsTimeUnit = "yearweek"|"yearmonth"|"yearmonthdate";

type MarshalEvicsVizProps = {
  fieldName: keyof MarshalEvicsNumericFields,
  title: string,
  height: number,
};

const MarshalEvicsViz: React.FC<MarshalEvicsVizProps> = (props) => {
  const [timeUnit, setTimeUnit] = useState<MarshalEvicsTimeUnit>("yearweek");

  return (
    <div>
      <form>
        <input type="radio" name="citywide-timeunit" id="citywide-yearweek" 
        checked={timeUnit==="yearweek"}
        onChange={e => setTimeUnit("yearweek")}/>
        <label htmlFor="citywide-yearweek">Week</label>

        <input type="radio" name="citywide-timeunit" id="citywide-yearmonth" 
        checked={timeUnit==="yearmonth"}
        onChange={e => setTimeUnit("yearmonth")}/>
        <label htmlFor="citywide-yearmonth">Month</label>
      </form>
      <JsonLoader<MarshalEvicsRow[]> url={MARSHALEVICS.json} fallback={<VizFallback className={VIZ_TIME_SERIES_CLASS} />}>
        {(values) => <MarshalEvicsVizWithValues values={values} timeUnit={timeUnit} {...props} />}
      </JsonLoader>
    </div>
  );
};

function thousands_separators(num: any)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

const MarshalEvicsVizWithValues: React.FC<MarshalEvicsVizProps & {
  values: MarshalEvicsRow[],
  timeUnit: MarshalEvicsTimeUnit
}> = ({values, fieldName, title, timeUnit, height}) => {
  values = values.filter(
    // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
    // Otherwise, we can grab data from 1/1/2020 onwards
    row => row.week_eviction >= (timeUnit === "yearweek" ? "2022-01-01 00:00:00" : "2021-12-31 00:00:00")
    );
      const evictionsSinceJan = values.filter(
    row => row.week_eviction >= "2022-01-14 00:00:00"
  ).reduce(
    (total, row) => total + row[fieldName], 0
  );

  // const MarshalEvicsDataLagStart = getMarshalEvicsLagDate(values, 30); // 4 weeks for lag
  // const MarshalEvicsDataLagEnd = getMarshalEvicsLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day"
    : timeUnit === "yearweek" ? "Week" 
    : "Month";
  const barColor = "#B73A3A"
  const selectedBarColor = "#AF2525";
  // const lineTop = 20;
  // const lineBottom = 20;
  

  // const casesCovidStart = values.find(datapoint => datapoint.day === '2020-03-16T04:00:00.000Z')?.judgments;
  // const casesCovidStartThousands = thousands_separators(casesCovidStart);

  const spec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      align: "left",
      anchor: "start",
      text: `${title}`,
      fontSize: 24,
      subtitle: [
        `There have been ${thousands_separators(evictionsSinceJan)} evictions by court-ordered marshals since`,  `eviction protections expired on January 15, 2022.`,
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
            field: "week_eviction",
          },
          tooltip: [
            {
              field: "week_eviction",
              timeUnit,
              title: `${timeUnitLabel} of`,
              type: "temporal",
              format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y",
            },
            {
              field: fieldName,
              aggregate: "sum",
              title: "Evictions",
              formatType: "numberWithCommas"
            },
          ],
        },
        layer: [
          {
            mark: {
              type: "bar",
              color: barColor,
              interpolate: "monotone",
              opacity: 0.8,
            },
            encoding: {
              x: {
                timeUnit,
                field: "week_eviction",
                axis: {
                  title: "",
                  format: "%b ’%y",
                  labelAngle: 45,
                  grid: false,
                },
              },
              y: {
                field: fieldName,
                aggregate: "sum",
                axis: {
                  title: `Total Evictions`,
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
            mark: { type: "bar", strokeWidth: 4, color: selectedBarColor },
            encoding: {
              x: {
                timeUnit,
                field: "week_eviction",
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

export function isMarshalEvicsNumericField(value: string): value is keyof MarshalEvicsNumericFields {
  return MARSHALEVICS_VISUALIZATIONS.has(value as any);
}

export const MARSHALEVICS_VISUALIZATIONS: Map<keyof MarshalEvicsNumericFields, string> = new Map([
  ["marshalevictions", "Covid Evictions in New York City"],
]);

export const MarshalEvicsVisualizations: React.FC<{
  height: number,
  fieldNames?: (keyof MarshalEvicsNumericFields)[]
}> = ({height, fieldNames}) => {

  fieldNames = fieldNames || Array.from(MARSHALEVICS_VISUALIZATIONS.keys());

  return (
    <>
      {fieldNames.map(fieldName => (
        <MarshalEvicsViz
          key={fieldName}
          height={height}
          fieldName={fieldName}
          title={assertNotUndefined(MARSHALEVICS_VISUALIZATIONS.get(fieldName))}
        />
      ))}
    </>
  );
};
