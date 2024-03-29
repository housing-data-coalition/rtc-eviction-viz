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

function thousands_separators(num: any)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

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
  const MoratoriumStart = new Date("2020-03-17");
  const MoratoriumEnd = new Date("2020-06-20");
  const MoratoriumMid = new Date("2020-05-05");
  const MorTwoStart = new Date("2020-12-28");
  const MorTwoEnd = new Date("2021-02-26");
  const MorTwoMid = new Date("2021-01-26");
  const lineTop = 20;
  const lineBottom = 20;
  

  const casesCovidStart = values.find(datapoint => datapoint.day === '2020-03-16T04:00:00.000Z')?.active_cases;
  const casesCovidStartThousands = thousands_separators(casesCovidStart);

  const spec: VisualizationSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    description: title,
    width: "container",
    height: 400,
    title: {
      text: `${title}`,
      fontSize: 16,
      subtitle: [
        `January 2020 - Present`,
        // This effectively adds extra padding below the subtitle.
        ""
      ]
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
              title: `${timeUnitLabel} of`,
              type: "temporal",
              format: timeUnit === "yearmonth" ? "%B" : "%b %d, %Y",
            },
            {
              field: fieldName,
              aggregate: "sum",
              title: "Active Cases",
              formatType: "numberWithCommas"
            },
          ],
        },
        layer: [
          {
            mark: {
              type: "area",
              color: lineColor,
              interpolate: "monotone",
              opacity: 0.6,
            },
            encoding: {
              x: {
                timeUnit,
                field: "day",
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
                  title: `Total Active Cases`,
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
                  // @ts-ignore
                  selection: "index",
                  value: 1,
                },
                value: 0,
              },
            },
          },
        ],
      },
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
            mark: { type: "rect", color: "grey", opacity: 0 }, // made rectangle opaque because it conflicted with second moratorium
            encoding: {
              x: { field: "lagDateStart", type: "temporal" },
              x2: { field: "lagDateEnd", type: "temporal" },
            },
          },
          // Request to take this out and include as note below chart instead.
          // {
          //   mark: {
          //     type: "text",
          //     align: "center",
          //     baseline: "bottom",
          //     dy: -(height)-35,
          //     dx: -50,
          //     fontSize: 12,
          //     text: ["Recent court data incomplete", "due to reporting lags"]
          //   },
          //   encoding: {
          //     x: { field: "lagDateEnd", type: "temporal" },
          //   },
          // },

        ],
      },
      {
        data: {
          values: [
            {
              morDateStart: MoratoriumStart,
              morDateEnd: MoratoriumEnd,
              morDateMid: MoratoriumMid,
              morTwoStart: MorTwoStart,
              morTwoEnd: MorTwoEnd,
              morTwoMid: MorTwoMid,
              covidCasesStart: 150000,
            },
          ],
        },
        layer: [
          {
            // For some reason this gray rectangle and the
            mark: { type: "rect", color: "gray", opacity: 0.2 },
            encoding: {
              x: { field: "morDateStart", type: "temporal" },
              x2: { field: "morDateEnd", type: "temporal" },
            },
          },
          {
            mark: {
              type: "text",
              align: "center",
              baseline: "bottom",
              dy: -(height*0.05),
              fontSize: 14,
              opacity: 0.6,
              text:
                ["Eviction", "Moratorium"],
            },
            encoding: {
              x: { field: "morDateMid", type: "temporal" },  
            },
          },
          {
            mark: { type: "rect", color: "gray", opacity: 0.2 },
            encoding: {
              x: { field: "morTwoStart", type: "temporal" },
              x2: { field: "morTwoEnd", type: "temporal" },
            },
          },
          {
            mark: {
              type: "text",
              align: "center",
              baseline: "bottom",
              dy: -(height*0.05),
              fontSize: 14,
              opacity: 0.6,
              text:
                ["Most Eviction", "Cases Paused"],
            },
            encoding: {
              x: { field: "morTwoMid", type: "temporal" },  
            },
          },
          { 
            mark: {
              type: "text",
              align: "center",
              baseline: "bottom",
              fontSize: 12,             
              dy: height/6,
              text: [`There were ${casesCovidStartThousands}`, `eviction cases at the`,`start of the pandemic`],
            },
            encoding: {
              x: { field: "morDateStart", type: "temporal" },
            },  
          },
          // {
          //   mark: { 
          //     type: "rect", 
          //     color: "black", 
          //     opacity: 1,
          //     width: 2, 
          //     y: 170,
          //     y2: 240,
          // },
          //   encoding: {
          //     x: { field: "morDateStart", type: "temporal" },
          //   },
          // },
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
  ["active_cases", "Active Eviction Cases in New York State"],
]);

export const ActiveCasesVisualizations: React.FC<{
  height: number,
  fieldNames?: (keyof ActiveCasesNumericFields)[]
}> = ({height, fieldNames}) => {
  const [timeUnit, setTimeUnit] = useState<ActiveCasesTimeUnit>("yearweek");

  fieldNames = fieldNames || Array.from(ACTIVECASES_VISUALIZATIONS.keys());

  return (
    <>
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