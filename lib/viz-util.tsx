import React from "react";

export const VIZ_GEO_CLASS = "viz-geo";

export const VIZ_TIME_SERIES_CLASS = "viz-time-series";

export const VizFallback: React.FC<{className: string}> = ({className}) => (
  <div className={className}></div>
);
