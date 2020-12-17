import React from "react";
import { useState } from "react";
import { VisualizationSpec } from "vega-embed";
import { VegaLite } from "../vega";
import { EvictionTimeSeriesNumericFields, EvictionTimeSeriesRow } from "./data";

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

type EvictionTimeUnit = "yearweek"|"yearmonth"|"yearmonthdate";

type EvictionVizProps = {
  values: EvictionTimeSeriesRow[],
  fieldName: keyof EvictionTimeSeriesNumericFields,
  title: string,
  timeUnit: EvictionTimeUnit,
  height: number,
};

const EvictionViz: React.FC<EvictionVizProps> = ({values, fieldName, title, timeUnit, height}) => {
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

  return <VegaLite spec={spec} className="viz-time-series" />;
};

export const EvictionVisualizations: React.FC<{
  values: EvictionTimeSeriesRow[],
  height: number,
}> = ({values, height}) => {
  const [timeUnit, setTimeUnit] = useState<EvictionTimeUnit>("yearweek");
  const props: Pick<EvictionVizProps, 'timeUnit'|'height'|'values'> = {
    height,
    timeUnit,
    values
  };

  return (
    <>
      <p>
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
      <EvictionViz {...props} fieldName="total_filings" title="Total NY State Eviction Filings" />
      <EvictionViz {...props} fieldName="nyc_holdover_filings" title="NYC Holdover Filings" />
      <EvictionViz {...props} fieldName="nyc_nonpay_filings" title="NYC Non-Payment Filings" />
      <EvictionViz {...props} fieldName="outside_nyc_holdover_filings" title="Upstate Holdover Filings" />
      <EvictionViz {...props} fieldName="outside_nyc_nonpay_filings" title="Upstate Non-Payment Filings" />
    </>
  );
};
