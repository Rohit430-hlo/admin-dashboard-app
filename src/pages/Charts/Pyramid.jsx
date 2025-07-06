import React, { useContext } from 'react';
import {
  Inject,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { stateContext } from '../../context/ContextProvider';
import { Header } from '../../components';

const Pyramid = () => {
  const { currentMode } = useContext(stateContext);

  return (
    <div className="m-4 md:m-10 p-6 md:p-10 mt-24 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-lg transition-all duration-300">
      <Header category="Pyramid" title="Food Comparison Chart" />

      <AccumulationChartComponent
        id="pyramid-chart"
        height="420px"
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#1e293b' : '#fff'}
        legendSettings={{
          visible: true,
          background: currentMode === 'Dark' ? '#1e293b' : '#fff',
          textStyle: {
            color: currentMode === 'Dark' ? '#e5e7eb' : '#333',
          },
        }}
      >
        <Inject
          services={[
            PyramidSeries,
            AccumulationTooltip,
            AccumulationLegend,
            AccumulationDataLabel,
          ]}
        />

        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="70%"
            height="90%"
            explode={true}
            emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
            dataLabel={{
              visible: true,
              position: 'Outside',
              name: 'text',
              font: {
                 size:'14px',
                color: 'Black',
                fontWeight: '600',
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
