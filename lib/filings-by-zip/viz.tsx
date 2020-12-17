import React from "react";
import { JsonLoader } from "../json-loader";
import { VegaLite } from "../vega";
import { FilingsByZipRow, FILINGS_BY_ZIP, FILINGS_BY_ZIP_EMPTY_ROW } from "./data";

// https://data.beta.nyc/dataset/nyc-zip-code-tabulation-areas
import ZipCodeGeoJSON from "./nyc-zip-code-tabulation-areas.json";

const VIZ_GEO_CLASS = "viz-geo";

function mergeZipcodeFilingsIntoGeoJSON(values: FilingsByZipRow[]) {
  const map = new Map<string, FilingsByZipRow>();

  for (let value of values) {
    map.set(value.zipcode, value);
  }

  return {
    ...ZipCodeGeoJSON,
    features: ZipCodeGeoJSON.features.map(feature => ({
      ...feature,
      properties: {
        ...feature.properties,
        ...(map.get(feature.properties.postalCode) || FILINGS_BY_ZIP_EMPTY_ROW),
      }
    }))
  };
}

export const ZipCodeViz: React.FC<{
  height: number,
}> = (props) => {
  return (
    <JsonLoader<FilingsByZipRow[]> url={FILINGS_BY_ZIP.json} fallback={<div className={VIZ_GEO_CLASS} />}>
      {(values) => <ZipCodeVizWithValues values={values} {...props} />}
    </JsonLoader>
  );
};

const ZipCodeVizWithValues: React.FC<{
  values: FilingsByZipRow[],
  height: number,
}> = ({values, height}) => {
  const geoJson = mergeZipcodeFilingsIntoGeoJSON(values);

  return <VegaLite className={VIZ_GEO_CLASS} spec={{
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    width: "container",
    height,
    title: {
      text: `NYC Eviction Filings By Zip Code, March 23, 2020 - Present`,
    },
    data: {
      values: geoJson.features,
    },
    projection: {
      type: "albersUsa",
    },
    mark: "geoshape",
    encoding: {
      color: {
        field: "properties.filingsrate_2plus",
        type: "quantitative",
        title: [
          "Filings per unit of multi-family",
          "buildings"
        ],
      },
      tooltip: [
        {
          field: "properties.zipcode",
          title: "Zip code",
        },
        {
          field: "properties.filings_since_032320",
          title: "Total filings",
          formatType: "numberWithCommas"
        },
        {
          field: "properties.filingsrate_2plus",
          title: "Filings per unit",
          formatType: "numberWithCommas"
        },
      ]
    }
  }} />;
};
