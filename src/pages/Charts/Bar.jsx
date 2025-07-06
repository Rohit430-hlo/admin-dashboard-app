import React, { useContext } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  DataLabel,
  Category,
  Tooltip,
  Legend,
} from '@syncfusion/ej2-react-charts';

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from '../../data/dummy';

import { stateContext } from '../../context/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = useContext(stateContext);

  return (
    <div className="m-4 md:m-10 p-6 md:p-10 mt-24 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-md transition-all duration-300">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />

      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#1e293b' : '#fff'}
        legendSettings={{
          background: 'transparent',
          textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
        }}
      >
        <Inject services={[ColumnSeries, DataLabel, Tooltip, Category, Legend]} />

        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
