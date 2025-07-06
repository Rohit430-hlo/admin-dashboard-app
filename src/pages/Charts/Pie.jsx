import React, { useContext } from 'react';
import {
  Inject,
  AccumulationDataLabel,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationTooltip,
  PieSeries,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { stateContext } from '../../context/ContextProvider';
import { Header } from '../../components';

const Pie = () => {
  const { currentMode } = useContext(stateContext);

  return (
    <div className="m-4 md:m-10 p-6 md:p-10 mt-24 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-lg transition-all duration-300">
      <Header category="Pie" title="Project Cost Breakdown" />

      <AccumulationChartComponent
        id="pie-chart"
        height="420px"
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#1e293b' : '#fff'}
        legendSettings={{
          visible: true,
          background: 'transparent',
          textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
        }}
      >
        <Inject services={[PieSeries, AccumulationTooltip, AccumulationLegend , AccumulationDataLabel]} />

        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            type="Pie"
            radius="90%"
            dataLabel={{
              visible: true,
              position: 'Inside',
              name: 'text',
              font: {
                size:'20px',
                fontWeight: '600',
                color: 'white',
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
