import React, { Suspense } from "react";
import type { VegaLiteProps } from "./vega";
import { VizFallback } from "./viz-util";

const VegaLite = React.lazy(() => import("./vega"));

export const LazyVegaLite: React.FC<VegaLiteProps> = props => {
  return (
    <Suspense fallback={<VizFallback className={props.className || ''} />}>
      <VegaLite {...props} />
    </Suspense>
  );
};
