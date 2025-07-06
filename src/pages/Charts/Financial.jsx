import React, { useContext } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Logarithmic,
  Zoom,
  Crosshair,
  HiloSeries,
  Tooltip as ChartTooltip,
} from '@syncfusion/ej2-react-charts';

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from '../../data/dummy';

import { stateContext } from '../../context/ContextProvider';
import { Header } from '../../components';

const Financial = () => {
  const { currentMode } = useContext(stateContext);

  return (
    <div className="m-4 md:m-10 p-6 md:p-10 mt-24 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-lg transition-all duration-300">
      <Header category="Financial" title="AAPLE Historical" />

      <ChartComponent
        id="financial-chart"
        height="420px"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: 'Both' }}
        background={currentMode === 'Dark' ? '#1e293b' : '#fff'}
      >
        <Inject
          services={[
            HiloSeries,
            ChartTooltip,
            DateTime,
            Logarithmic,
            Crosshair,
            Zoom,
          ]}
        />

        <SeriesCollectionDirective>
          <SeriesDirective
            type="Hilo"
            dataSource={financialChartData}
            xName="x"
            low="low"
            high="high"
            name="Apple Inc."
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
