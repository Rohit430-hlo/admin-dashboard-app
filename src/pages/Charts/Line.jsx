import React from 'react';
import { ChartsHeader, LineChart } from '../../components';
import { Header } from '../../components'

const Line = () => {
  return (
    
   <div>
    <div className="m-4 md:m-10 p-6 md:p-10 mt-24 bg-white dark:bg-[#1e293b] rounded-3xl shadow-lg transition-all duration-300">
     <Header category="Line" title="Inflation Trends Over Time" />
       

      {/* Chart Section */}
      <div className="w-full">
        <LineChart />
      </div>
    </div>
   </div>
  );
};

export default Line;
