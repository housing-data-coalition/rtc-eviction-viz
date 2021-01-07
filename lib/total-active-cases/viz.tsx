import { assertNotUndefined } from "@justfixnyc/util";
import React from "react";
import { useState } from "react";
import type { VisualizationSpec } from "vega-embed";
import { JsonLoader } from "../json-loader";
import { LazyVegaLite } from "../vega-lazy";
import { VizFallback, VIZ_TIME_SERIES_CLASS } from "../viz-util";
import { ActiveCasesNumericFields, ActiveCasesRow, ACTIVE_CASES } from "./data";

/**
 * Take the array of data rows and get the date for the latest week we
 * have data and subtract a given number of weeks. This is used to draw
 * the rectangle on the graphs for the period where we have incomplete
 * data, due to repoting lags. The result is a string in the same format
 * as the "week" dates stored in the input data.
 */
function getActiveCasesLagDate(
  data: ActiveCasesRow[],
  lagDays: number
): string {
  const maxActiveCasesDateNum = Math.max.apply(
    Math,
    data.map(row => Date.parse(row.day))
  );
  let returnDate = new Date(maxActiveCasesDateNum);
  returnDate.setDate(returnDate.getDate() - lagDays);
  returnDate.setHours(0, 0, 0, 0);
  return returnDate.toISOString();
}

type ActiveCasesTimeUnit = "yearweek"|"yearmonth"|"yearmonthdate";

type ActiveCasesVizProps = {
  fieldName: keyof ActiveCasesNumericFields,
  title: string,
  timeUnit: ActiveCasesTimeUnit,
  height: number,
};

const ActiveCasesViz: React.FC<ActiveCasesVizProps> = (props) => {
  return (
    <JsonLoader<ActiveCasesRow[]> url={ACTIVE_CASES.json} fallback={<VizFallback className={VIZ_TIME_SERIES_CLASS} />}>
      {(values) => <ActiveCasesVizWithValues values={values} {...props} />}
    </JsonLoader>
  );
};

const ActiveCasesVizWithValues: React.FC<ActiveCasesVizProps & {
  values: ActiveCasesRow[],
}> = ({values, fieldName, title, timeUnit, height}) => {
  values = values.filter(
    // If we are viewing data by week, let's grab data since the first Sunday of Jan 2020
    // Otherwise, we can grab data from 1/1/2020 onwards
    row => row.day >= (timeUnit === "yearweek" ? "2020-01-05 00:00:00" : "2020-01-01 00:00:00")
  );
//   const casesSinceCovid = values.filter(
//     row => row.day >= "2020-03-23 00:00:00"
//   ).reduce(
//     (total, row) => total + row[fieldName], 0
//   );
// commented this out because this counter should probably be different from total active cases
  const ActiveCasesDataLagStart = getActiveCasesLagDate(values, 30); // 4 weeks for lag
  const ActiveCasesDataLagEnd = getActiveCasesLagDate(values, 0); // latest date
  const timeUnitLabel = timeUnit === "yearmonthdate" ? "Day"
    : timeUnit === "yearweek" ? "Week" 
    : "Month";
  const lineColor = "#AF2525";
  const spec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height,
    title: {
      text: `${title}, 2020 - Present`,
    //   subtitle: [
    //     `Cases since COVID-19: ${casesSinceCovid.toLocaleString()}`,
    //     // This effectively adds extra padding below the subtitle.
    //     ""
    //   ]
    },
    layer: [
      {
        data: {
          values: [
            {
              lagDateStart: ActiveCasesDataLagStart,
              lagDateEnd: ActiveCasesDataLagEnd,
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
              dy: -(height / 2) - 1,
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
              format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y",
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
                  title: `Active Eviction Cases per ${timeUnitLabel}`,
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

  return <LazyVegaLite spec={spec} className={VIZ_TIME_SERIES_CLASS} />;
};

export function isActiveCasesNumericField(value: string): value is keyof ActiveCasesNumericFields {
  return ACTIVECASES_VISUALIZATIONS.has(value as any);
}

export const ACTIVECASES_VISUALIZATIONS: Map<keyof ActiveCasesNumericFields, string> = new Map([
  ["active_cases", "Total Active Cases"],
]);

export const ActiveCasesVisualizations: React.FC<{
  height: number,
  fieldNames?: (keyof ActiveCasesNumericFields)[]
}> = ({height, fieldNames}) => {
  const [timeUnit, setTimeUnit] = useState<ActiveCasesTimeUnit>("yearweek");

  fieldNames = fieldNames || Array.from(ACTIVECASES_VISUALIZATIONS.keys());

  return (
    <>
      {/* <p>
        View by:&nbsp;&nbsp;
        <label>
          <input type="radio" name="timeUnit" value="yearmonthdate" checked={timeUnit === "yearmonthdate"} onChange={(e) => setTimeUnit("yearmonthdate")} />
          Day
        </label>&nbsp;&nbsp;
        <label>
          <input type="radio" name="timeUnit" value="yearweek" checked={timeUnit === "yearweek"} onChange={(e) => setTimeUnit("yearweek")} />
          Week
        </label>&nbsp;&nbsp;
        <label>
          <input type="radio" name="timeUnit" value="yearmonth" checked={timeUnit === "yearmonth"} onChange={(e) => setTimeUnit("yearmonth")} />
          Month
        </label>
      </p> 
      Commented out because not working properly and probably not necessary for total active cases.
      */}
      
      {fieldNames.map(fieldName => (
        <ActiveCasesViz
          key={fieldName}
          height={height}
          timeUnit={timeUnit}
          fieldName={fieldName}
          title={assertNotUndefined(ACTIVECASES_VISUALIZATIONS.get(fieldName))}
        />
      ))}
    </>
  );
};
