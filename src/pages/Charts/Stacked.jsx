import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-lg transition-all duration-300">
      
      {/* 🔖 Page Header */}
      <Header category="Stacked" title="Revenue Breakdown" />

      {/* 📊 Chart Wrapper */}
      <div className="w-full mt-6">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
