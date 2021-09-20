import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { BoroughPieChartActiveCasesRow, BOROUGH_PIE_CHART_ACTIVE_CASES } from './data';
import { JsonLoader } from "../json-loader";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";

export const BoroughPieChartActiveCases: React.FC<{}> = () => {
    return <>
        <JsonLoader<BoroughPieChartActiveCasesRow[]> url={BOROUGH_PIE_CHART_ACTIVE_CASES.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <BoroughPieChartActiveCasesWithValues values={values} />}
        </JsonLoader>
    </>;
}

const BoroughPieChartActiveCasesWithValues: React.FC<{values: BoroughPieChartActiveCasesRow[]}> = (values) => {
    const data = formatData(values.values);
   
    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
    };
    // TODO: Add CSS so they're next to each other
    return (
        <>
            <PieChart
                data={data.pandemicData}
                label={({ dataEntry }) => dataEntry.title + ": " + Math.round(dataEntry.percentage) + '%'}
                labelStyle={{
                    ...defaultLabelStyle
                }}
                style={{ height: '250px' }}
            />
            <PieChart
                data={data.prePandemicData}
                label={({ dataEntry }) => dataEntry.title + ": " + Math.round(dataEntry.percentage) + '%'}
                labelStyle={{
                    ...defaultLabelStyle
                }}
                style={{ height: '250px' }}
            />
        </>
    );
}

type BoroughPieChartActiveCasesSlice = {
    title: string,
    value: number,
    color: string
};

function formatData(data: BoroughPieChartActiveCasesRow[]): { pandemicData: BoroughPieChartActiveCasesSlice[], prePandemicData: BoroughPieChartActiveCasesSlice[]} {
    const colors: { [borough:string] : string } = {
        'Bronx': '#B3EFFF',
        'Brooklyn': '#00CFFF',
        'Manhattan': '#046B99',
        'Queens': '#4373B1',
        'Staten Island': '#606060'
    };
    
    let rowToSection = (item:BoroughPieChartActiveCasesRow) => ({
        'title': item.borough,
        'value': item.count,
        'color': colors[item.borough]
    });
    return {
        prePandemicData: data.filter(item => item.timeBucket == 'Issued Prepandemic').map(
            rowToSection
        ),
        pandemicData: data.filter(item => item.timeBucket == 'Issued Pandemic').map(
            rowToSection
        )
    };
}

