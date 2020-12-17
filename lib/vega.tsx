import React, { useRef, useEffect } from "react";
import embedVega, { VisualizationSpec } from "vega-embed";
import * as Vega from "vega";

/**
 * Return the given number with comma separators for improved readability.
 *
 * The implementation was taken from https://stackoverflow.com/a/2901298.
 *
 * Note that `Intl.NumberFormat` can do the same thing, but it's not
 * available in older browsers, and polyfilling all of `Intl` would
 * potentially add a lot of weight to our JS bundle.
 */
function numberWithCommas(x: number): string {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

Vega.expressionFunction("numberWithCommas", numberWithCommas);

export type VegaLiteProps = {
  spec: VisualizationSpec,
  className?: string,
};

const VegaLite: React.FC<VegaLiteProps> = ({spec, className}) => {
  const ref: React.MutableRefObject<HTMLDivElement|null> = useRef(null);

  useEffect(() => {
    const { current } = ref;
    if (!current) {
      throw new Error("Expected ref for Vega container to exist!");
    }
    const embedResult = embedVega(current, spec);

    return () => {
      embedResult.then(result => result.finalize())
    };
  }, [spec]);

  return <div ref={ref} className={className}></div>;
};

export default VegaLite;
