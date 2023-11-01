import React, { Suspense } from "react";
import type { VegaLiteProps } from "./vega";
import { VizFallback } from "./viz-util";

const VegaLite = React.lazy(() => import("./vega"));

/**
 * Lazily-load a Vega visualization, showing a throbber while it's loading.
 * This will also lazily load the Vega library itself, which can be quite large.
 */
export const LazyVegaLite: React.FC<VegaLiteProps> = props => {
  return (
    <Suspense fallback={<VizFallback className={props.className || ''} />}>
      <VegaLite {...props} />
    </Suspense>
  );
};
