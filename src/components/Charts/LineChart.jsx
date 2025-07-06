// import React, { useContext } from 'react'
// import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , DateTime , Legend , Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
// import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis } from '../../data/dummy'
// import { stateContext } from '../../context/ContextProvider'


// const LineChart = () => {

//   const {currentMode } = useContext(stateContext)
//   return (
//     <div>
//       <ChartComponent 
//         id='line-chart'
//         height='420px'
//         primaryXAxis={LinePrimaryXAxis}
//         primaryYAxis={LinePrimaryYAxis}
//         chartArea={{border : {width : 0}}}
//         tooltip={{enable : true}}
//         background={currentMode === 'Dark' ? '#33373E' : ''}
//       >
//         <Inject services={[LineSeries , DateTime , Legend , Tooltip ]}/>

//         <SeriesCollectionDirective>
//           {lineCustomSeries.map((item , index)=>
//             <SeriesDirective key={index} {...item}/>
//           )}
//         </SeriesCollectionDirective>

//       </ChartComponent>
//     </div>
//   )
// }

// export default LineChart


import React, { useContext } from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from '@syncfusion/ej2-react-charts';

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../../data/dummy';

import { stateContext } from '../../context/ContextProvider';

const LineChart = () => {
  const { currentMode } = useContext(stateContext);

  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-md transition-all duration-300">
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#1e293b' : '#fff'}
        legendSettings={{
          background: 'transparent',
          textStyle: { color: currentMode === 'Dark' ? '#fff' : '#000' },
        }}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
