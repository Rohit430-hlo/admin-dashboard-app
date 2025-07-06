// import React, { useContext } from 'react'
// import { BsCurrencyDollar } from 'react-icons/bs'

// import { Stacked , Pie , Button , SparkLine } from '../components'
// import { earningData , SparklineAreaData , ecomPieChartData } from '../data/dummy'
// import homePageBanner from '../data/homePageBanner.png'
// import { WiMoonFull } from "react-icons/wi";
// import { stateContext } from '../context/ContextProvider'


// const Ecommerce = () => {

//   const{currentColor} = useContext(stateContext)

//   return (
//     <div className='mt-12'>
//       <div className='flex flex-wrap lg:flex-nowrap justify-center'>
//         <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-no-repeat bg-cover'  style={{ backgroundImage: `url(${homePageBanner})` }}>
//           <div className='flex justify-between items-center '>
//             <div>
//               <p className='font-bold text-gray-400'>Earning</p>
//               <p className='text-2xl text-slate-700'>$63,449.78</p>
//             </div>
//           </div>
//           <div className='mt-6'>
//             <Button
//               color ='white'
//               bgColor={currentColor}
//               text ='Download'
//               borderRadius = '10px'
//             />

//           </div>
//       </div>
//         <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
//           {earningData.map((item)=>{
//             return(
//               <div
//                 key={item.title}
//                 className='bg-white dark:text-gray-200 dark:#33373E md:w-56 p-4 pt-9 rounded-2xl'
//               >
//                 <button type='button' style={{color:item.iconColor , background:item.iconBg}} className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
//                   {item.icon}
//                 </button>
//                 <p className='mt-3 '>
//                   <span className='text-lg font-semibold text-slate-700'>{item.amount}</span>
//                   <span className={`text-sm ml-2`} style={{color: item.pcColor}}>{item.percentage}</span>
//                 </p>
//                 <p className='text-sm text-gray-400'>{item.title}</p>
//               </div>
//             )
//           })}

//         </div>
//       </div>
//       <div className='flex gap-10 flex-wrap justify-center '>
//         <div className='bg-white dark:text-gray-200 dark:bg-slate-800 m-3 p-4 rounded-2xl md:w-780'>
//             <div className='flex justify-between '>
//               <p className='font-semibold text-xl md:text-lg'>Revenue Updates</p>
//               <div className='flex items-center gap-4'>
//                 <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl '>
//                   <span><WiMoonFull/></span>
//                   <span>Expense</span>
//                 </p>
//                 <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl '>
//                   <span><WiMoonFull/></span>
//                   <span>Budget</span>
//                 </p>
//               </div>
//             </div>

//             <div className='mt-10 flex flex-wrap justify-center gap-10'>
//               <div className='border-r-1 border-color m-4 pr-10'>
//                 <div className=''>
//                   <p>
//                     <span className='text-3xl font-semibold'>$93,438</span>
//                     <span className='p-1.5 hover:drop-shadow-xl bg-green-400 ml-3 text-xs text-white cursor-pointer rounded-full'>23%</span>
//                   </p>
//                   <p className='text-green-500 mt-1'>Budget</p>
//                 </div>

//                 <div className='mt-8'>
//                   <p>
//                     <span className='text-3xl font-semibold'>$43,438</span>
//                   </p>
//                   <p className='text-gray-500 mt-1'>Expense</p>
//                 </div>

//                 <div className='mt-5'>
//                   <SparkLine
//                     id = 'line-sparkline'
//                     currentColor = {currentColor}
//                     height = '80px'
//                     width ='250px'
//                     color = {currentColor}
//                     type='Line'
//                     data={SparklineAreaData}
//                   />
//                 </div>

//                 <div className='mt-10'>
//                   <Button
//                     color={'white'}
//                     bgColor={currentColor}
//                     text={'Download Report'}
//                     borderRadius={'10px'}
//                   />
//                 </div>
//               </div>

//               <div className=''>
//                 <Stacked width="320px" height="360px"/>
//               </div>

//             </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Ecommerce





import React, { useContext } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import homePageBanner from '../data/homePageBanner.png';
import { WiMoonFull } from "react-icons/wi";
import { stateContext } from '../context/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useContext(stateContext);

  return (
    <div className="mt-12">
      {/* Earnings Banner */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:bg-[#1e2637] dark:text-gray-100 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${homePageBanner})` }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400 dark:text-gray-300">Earning</p>
              <p className="text-2xl text-slate-700 dark:text-white">$63,449.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center overflow-x-auto">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white  dark:bg-[#1e2637] dark:text-gray-200 md:w-56 p-4 pt-9 rounded-2xl shadow-sm"
            >
              <button
                type="button"
                style={{ color: item.iconColor, background: item.iconBg }}
                className="text-2xl z-10 opacity-90 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold text-slate-700 dark:text-white">
                  {item.amount}
                </span>
                <span className="text-sm ml-2" style={{ color: item.pcColor }}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Updates Section */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:bg-[#1e2637] dark:text-gray-200 m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl md:text-lg">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:drop-shadow-xl">
                <WiMoonFull />
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <WiMoonFull />
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {/* Budget & Sparkline */}
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl bg-green-400 ml-3 text-xs text-white cursor-pointer rounded-full">
                    23%
                  </span>
                </p>
                <p className="text-green-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$43,438</span>
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  id="line-sparkline"
                  currentColor={currentColor}
                  height="80px"
                  width="250px"
                  color={currentColor}
                  type="Line"
                  data={SparklineAreaData}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            {/* Stacked Chart */}
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;




