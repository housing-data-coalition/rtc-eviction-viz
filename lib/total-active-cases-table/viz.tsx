import React from "react";
import { JsonLoader } from "../json-loader";
import { TotalActiveCasesRow, TOTAL_ACTIVE_CASES_TABLE } from "./data";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";
import {unflatten} from "flat"; // what's the right way to import this?

export const ActiveCasesTable: React.FC<{}> = () => {
    return (
        <JsonLoader<TotalActiveCasesRow[]> url={TOTAL_ACTIVE_CASES_TABLE.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <ActiveCasesTableWithValues values={values} />}
        </JsonLoader>
    );
};

// consider using https://danfo.jsdata.org/, especially to do sum() operations

const ActiveCasesTableWithValues: React.FC<{values: TotalActiveCasesRow[]}> = (values) => {
    var activeCasesMap = Object.fromEntries(new Map(values.values.map(key => [key.category, key.count] as [string, number])));
    var unflatten = require('flat').unflatten; // can i change this?
    var activeCasesDeepObject = unflatten(activeCasesMap);
    console.log(activeCasesDeepObject);
    const easyAccessMap = {
        'outside-pandemic-all': activeCasesDeepObject['Outside NYC']['Issued Pandemic']['All'],
        'outside-prepandemic-all': activeCasesDeepObject['Outside NYC']['Issued Prepandemic']['All'],
        'nyc-pandemic-residential': activeCasesDeepObject['NYC']['Issued Pandemic']['Residential'], 
        'nyc-pandemic-commercial': activeCasesDeepObject['NYC']['Issued Pandemic']['Commercial'],
        'nyc-prepandemic-residential': activeCasesDeepObject['NYC']['Issued Prepandemic']['Residential'],
        'nyc-prepandemic-commercial': activeCasesDeepObject['NYC']['Issued Prepandemic']['Commercial'] 
    }

    return (
        <>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <th>Total Active Cases</th>
                    <th>Non-payment</th>
                    <th>Holdover</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-header">
                    <th scope="rowgroup">
                        Statewide Totals
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                
                </tr>
                <tr>
                    <th scope="row">
                        Pre-Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr>
                    <th scope="row">
                        Pandemic
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                </tr>
                <tr className="table-header">
                    <th scope="rowgroup">
                        NYC Totals
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                
                </tr>
                <tr>
                    <th scope="row">
                        Pre-Pandemic
                    </th>
                    <td>{easyAccessMap['nyc-prepandemic-residential']['Non-Payment'] 
                        + easyAccessMap['nyc-prepandemic-residential']['Holdover']}</td>
                    <td>{easyAccessMap['nyc-prepandemic-residential']['Non-Payment']}</td>
                    <td>{easyAccessMap['nyc-prepandemic-residential']['Holdover']}</td>
                </tr>
                <tr>
                    <th scope="row">
                        Pandemic
                    </th>
                    <td>{easyAccessMap['nyc-pandemic-residential']['Non-Payment'] 
                        + easyAccessMap['nyc-pandemic-residential']['Holdover']}</td>
                    <td>{easyAccessMap['nyc-pandemic-residential']['Non-Payment']}</td>
                    <td>{easyAccessMap['nyc-pandemic-residential']['Holdover']}</td>
                </tr>
                <tr className="table-header">
                    <th scope="rowgroup">
                        Outside NYC Totals
                    </th>
                    <td>#</td>
                    <td>#</td>
                    <td>#</td>
                
                </tr>
                <tr>
                    <th scope="row">
                        Pre-Pandemic
                    </th>
                    <td>{easyAccessMap['outside-prepandemic-all']['Non-Payment'] + 
                        easyAccessMap['outside-prepandemic-all']['Holdover']}</td>
                    <td>{easyAccessMap['outside-prepandemic-all']['Non-Payment']}</td>
                    <td>{easyAccessMap['outside-prepandemic-all']['Holdover']}</td>
                </tr>
                <tr>
                    <th scope="row">
                        Pandemic
                    </th>
                    <td>{easyAccessMap['outside-pandemic-all']['Non-Payment'] + 
                        easyAccessMap['outside-pandemic-all']['Holdover']}</td>
                    <td>{easyAccessMap['outside-pandemic-all']['Non-Payment']}</td>
                    <td>{easyAccessMap['outside-pandemic-all']['Holdover']}</td>
                </tr>
                    
            </tbody>
        </table>
        </>
    );
};
