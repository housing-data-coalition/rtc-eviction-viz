import React from "react";

/** A visualization that represents a geographic map (e.g. chloropeth). */
export const VIZ_GEO_CLASS = "viz-geo";

/** A visualization that represents a time series. */
export const VIZ_TIME_SERIES_CLASS = "viz-time-series";
export const VIZ_TIME_SERIES_SHORT_CLASS = "viz-time-series-short";

/** A visualization that represents a table. */
export const VIZ_TABLE_CLASS = "viz-table";


// https://commons.wikimedia.org/wiki/File:Chromiumthrobber.svg
const ChromiumThrobber: React.FC<{}> = () => (
  <svg width="16" height="16" viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path d="M 150,0
            a 150,150 0 0,1 106.066,256.066
            l -35.355,-35.355
            a -100,-100 0 0,0 -70.711,-170.711 z"
          fill="#000000">
      <animateTransform attributeName="transform" attributeType="XML"
                        type="rotate" from="0 150 150" to="360 150 150"
                        begin="0s" dur="1s" fill="freeze" repeatCount="indefinite" />
    </path>
  </svg>
);

/**
 * Fallback component for a visualization that is still loading, letting
 * the user know that loading is occurring without causing layout
 * instability.
 */
export const VizFallback: React.FC<{className: string}> = ({className}) => (
  <div className={`${className} loading`}><ChromiumThrobber /></div>
);
