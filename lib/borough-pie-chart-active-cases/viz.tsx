import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { BoroughPieChartActiveCasesRow, BOROUGH_PIE_CHART_ACTIVE_CASES } from './data';
import { JsonLoader } from "../json-loader";
import { VizFallback, VIZ_TABLE_CLASS } from "../viz-util";

export const BoroughPieChartsActiveCases: React.FC<{}> = () => {
    return <>
        <JsonLoader<BoroughPieChartActiveCasesRow[]> url={BOROUGH_PIE_CHART_ACTIVE_CASES.json} fallback={<VizFallback className={VIZ_TABLE_CLASS} />}>
            {(values) => <BoroughPieChartsActiveCasesWithValues values={values} />}
        </JsonLoader>
    </>;
}

const BoroughPieChartsActiveCasesWithValues: React.FC<{values: BoroughPieChartActiveCasesRow[]}> = (values) => {
    const data = formatData(values.values);
   
    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
    };
    const [hovered, setHovered] = useState<number | undefined>(undefined);

    function addHover(dataPoint: BoroughPieChartActiveCasesSlice, i:number) {
        if (hovered === i) {
            return {
              ...dataPoint,
              title: `${dataPoint.value} filings`,
            };
          }
          return dataPoint;
    }

    return (
        <div className="pie-chart-section">
            <section className="pie-chart">
                <h4>Pre-pandemic Active Cases (NYC)</h4>
                <PieChart
                    data={data.prePandemicData.map(addHover)}
                    label={({ dataEntry }) => `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`}
                    labelStyle={{
                        ...defaultLabelStyle
                    }}
                    style={{ height: '250px' }}
                    onMouseOver={(_, index) => {
                        setHovered(index);
                    }}
                      onMouseOut={() => {
                        setHovered(undefined);
                    }}
                />
            </section>
            <section className="pie-chart">
                <h4>Pandemic Active Cases (NYC)</h4>
                <PieChart
                    data={data.pandemicData.map(addHover)}
                    label={({ dataEntry }) => `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`}
                    labelStyle={{
                        ...defaultLabelStyle
                    }}
                    style={{ height: '250px' }}
                    onMouseOver={(_, index) => {
                        setHovered(index);
                      }}
                      onMouseOut={() => {
                        setHovered(undefined);
                      }}
                />
            </section>
        </div>
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

    function compareTitles(a: BoroughPieChartActiveCasesSlice, b: BoroughPieChartActiveCasesSlice) {
        return a.title < b.title ? -1 : 0;
    }
    let rowToSection = (item:BoroughPieChartActiveCasesRow) => ({
        'title': item.borough,
        'value': item.count,
        'color': colors[item.borough] 
    });
    return {
        prePandemicData: data.filter(item => item.timeBucket == 'Issued Prepandemic').map(
            rowToSection
        ).sort(compareTitles), // sorting makes sure the two pie charts start with the same values
        pandemicData: data.filter(item => item.timeBucket == 'Issued Pandemic').map(
            rowToSection
        ).sort(compareTitles)
    };
}

