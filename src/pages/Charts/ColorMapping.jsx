// import React from 'react';
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   ColumnSeries,
//   Category,
//   Legend,
//   Tooltip,
// } from '@syncfusion/ej2-react-charts';

// import {
//   colorMappingData,
//   rangeColorMapping,
//   ColorMappingPrimaryXAxis,
//   ColorMappingPrimaryYAxis,
// } from '../../data/dummy';

// import { Header } from '../../components';

// const ColorMapping = () => {
//   return (
//     <div className="m-4 md:m-10 p-10 bg-white rounded-3xl">

//       <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />

//       <ChartComponent
//         id="color-mapping"
//         primaryXAxis={ColorMappingPrimaryXAxis}
//         primaryYAxis={ColorMappingPrimaryYAxis}
//         chartArea={{ border: { width: 0 } }}
//         tooltip={{ enable: true }}
//         title="USA Climate - Weather by Month"
//         legendSettings={{ mode: 'Range', background: 'white' }}
//       >
//         <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />

//         <SeriesCollectionDirective>
//           <SeriesDirective
//             dataSource={colorMappingData}
//             xName="x"
//             yName="y"
//             type="Column"
//             cornerRadius={{ topLeft: 10, topRight: 10 }}
//             /** 👇 Pass color mapping here */
//             rangeColorSettings={rangeColorMapping}
//           />
//         </SeriesCollectionDirective>
//       </ChartComponent>
//     </div>
//   );
// };

// export default ColorMapping;




import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from '../../data/dummy';

import { Header } from '../../components';

const ColorMapping = () => {
  return (
    <div className="m-4 md:m-10 p-10 bg-white dark:bg-[#1e293b] rounded-3xl shadow-md">
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />

      <ChartComponent
        id="color-mapping"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background='transparent' // 👈 Important for dark mode to inherit container bg
        title="USA Climate - Weather by Month"
        legendSettings={{
          mode: 'Range',
          background: 'transparent', // 👈 For dark mode compatibility
          textStyle: {
            color: '#fff', // 👈 Legend text color in dark
          },
        }}
      >
        <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData}
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{ topLeft: 10, topRight: 10 }}
            rangeColorSettings={rangeColorMapping}
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
