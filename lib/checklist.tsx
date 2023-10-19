import React from "react";
import { useEffect, useState } from "react";
import { QueryFiles } from "./query";

const HDC_GITHUB = "https://github.com/housing-data-coalition";

const to_formatted_date = (x: string): string => {
  return new Date(x).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};
const getLatestFilingDate = (): JSX.Element => {
  const [latestFilingDate, setLatestFilingDate] = useState<string | null>(null);

  const latest_filing_date_url = new QueryFiles(`latest-filing-date`);

  useEffect(() => {
    fetch(latest_filing_date_url.json)
      .then((res) => res.json())
      .then((data) => {
        const date = to_formatted_date(data[0].latest_date);
        setLatestFilingDate(date);
      });
  }, [latest_filing_date_url.json]);

  if (latestFilingDate === null) return <></>;

  return (
    <li>
      NYCDB is automatically updated with the latest OCA files overnight each
      Sunday. If successfully updated, the latest filing date in the data
      should be the latest Friday. The latest filing date in NYCDB is{" "}
      <b>{latestFilingDate}</b>.
    </li>
  );
};

const getOcaUpdateDate = (): JSX.Element => {
  const [ocaUpdateDate, setOcaUpdateDate] = useState<string | null>(null);

  const oca_url: string =
    "https://oca-2-dev.s3.amazonaws.com/public/last-updated-date.txt";

  useEffect(() => {
    fetch(oca_url)
      .then((res) => res.text())
      .then((data) => {
        const date = to_formatted_date(data);
        setOcaUpdateDate(date);
      });
  }, [oca_url]);

  if (ocaUpdateDate === null) return <></>;

  return (
    <li>
      <a href={`${HDC_GITHUB}/oca#csv-files`} target="_blank">
        Raw data files from Office of Court Administration
      </a>{" "}
      should be updated every Tuesday. These files were last updated on{" "}
      <b>{`${ocaUpdateDate}`}</b>.
    </li>
  );
};

export const MaintenanceChecklist: React.FC<{}> = () => {
  return (
    <>
      <p>Maintenance Checklist:</p>
      <ul>
        {getOcaUpdateDate()}
        {getLatestFilingDate()}
        <li>
          Check the tracker’s{" "}
          <a
            href={`${HDC_GITHUB}/rtc-eviction-viz/actions/workflows/deploy.yml`}
            target="_blank"
          >
            build/deploy history
          </a>{" "}
          to confirm latest build/deploy date is today and there are no recent
          unsuccessful builds.
        </li>
      </ul>
    </>
  );
};
