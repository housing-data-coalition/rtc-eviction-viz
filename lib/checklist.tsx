import React from "react";
import { useEffect, useState } from "react";


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
            </ul>
        </>
    )
};