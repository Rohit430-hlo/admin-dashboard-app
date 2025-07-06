import React, { useContext } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from '../../data/dummy';

import { stateContext } from '../../context/ContextProvider';
import { Header } from '../../components';

const Area = () => {
  const { currentMode } = useContext(stateContext);

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-md transition-all duration-300">
      <Header category="Area" title="Inflation Rate in Percentage" />

      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#1e293b' : '#fff'} // 👈 match container bg
        legendSettings={{
          background: 'transparent',
          textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
        }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />

        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
