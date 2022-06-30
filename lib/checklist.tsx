import React from "react";
import { useEffect, useState } from "react";
import { Query, QueryFiles } from "./query";




function getLatestFilingDate(): JSX.Element {
    const [latestFilingDate, setLatestFilingDate] = useState<string | null>(null);

    const latest_filing_date_url = new QueryFiles(`latest-filing-date`);

    const getDate = async () => {
        const date = await fetch(latest_filing_date_url.json)
            .then(res => res.json())
            .then(data => {
                return data[0].latest_date;
            })
        setLatestFilingDate(date);
    };

    useEffect(() => {
        getDate();
    }, [latest_filing_date_url.json]);

    if (latestFilingDate === null) return <></>;

    return (
        <li>
            NYCDB is automatically updated with the latest OCA files overnight each Tuesday.{" "}
            If successfully updated, the latest filing date in the data should be the latest Monday.{" "}
            The latest filing date in NYCDB is {latestFilingDate}.
        </li>
    );
};


function getOcaUpdateDate(): JSX.Element {
    const [ocaUpdateDate, setOcaUpdateDate] = useState<string | null>(null);

    const oca_url: string = "https://oca-data.s3.amazonaws.com/public/last-updated-date.txt"

    const getDate = async () => {
        const date = await fetch(oca_url).then(res => res.text())
        setOcaUpdateDate(date);
    };

    useEffect(() => {
        getDate();
    }, [oca_url]);

    if (ocaUpdateDate === null) return <></>;

    return (
        <li>
            <a href="https://github.com/housing-data-coalition/oca#csv-files">
                Raw data files from Office of Court Administration
            </a>{" "}
            should be updated every Tuesday. These files were last updated on {`${ocaUpdateDate}`}.
        </li>
    );
};



export const MaintenanceChecklist: React.FC = () => {
    return (
        <>
            <p>Maintenance Checklist:</p>
            <ul>
                {getOcaUpdateDate()}
                {getLatestFilingDate()}
            </ul>
        </>
    )
};