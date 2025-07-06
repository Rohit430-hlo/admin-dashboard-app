// import React from 'react'
// import { ordersData } from '../data/dummy'

// const OrderComponent = () => {
//   return (
//     <div>
//         {ordersData.map((item , id)=>{
//             return(
//                 <div className='mt-10 ml-4 flex' key={id}>
//                     <div className='m-4'>
//                       <img className='h-[70px] w-[70px] rounded-lg' src={item.ProductImage} alt="" />
//                     </div>
//                     <div className='m-4'>
//                       <p>{item.OrderItems}</p>
//                     </div>
//                     <div className='m-4'>
//                       <p>{item.CustomerName}</p>
//                     </div>
//                     <div className='m-4'>
//                       <p>{item.TotalAmount}</p>
//                     </div>
//                     <div className='m-4'>
//                       <button style={{backgroundColor : item.StatusBg}} className='rounded-xl px-2 text-white' >{item.Status}</button>
//                     </div>
//                     <div className='m-4'>
//                       <p>{item.OrderID}</p>
//                     </div>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default OrderComponent



// import React from 'react'
// import { ordersData } from '../data/dummy'

// const OrderComponent = () => {
//   return (
//     <div className="p-4">
//       {/* Header */}
//       <div className="grid grid-cols-7 overflow-x-auto border border-gray-300 bg-gray-200 font-semibold text-center text-gray-700">
//         <div className="p-3 border-r">Image</div>
//         <div className="p-3 border-r">Item</div>
//         <div className="p-3 border-r">Customer Name</div>
//         <div className="p-3 border-r">Total Amount</div>
//         <div className="p-3 border-r">Status</div>
//         <div className="p-3 bottom-r">Order ID</div>
//         <div className="p-3">Location</div>
//       </div>

//       {/* Data Rows */}
//       {ordersData.map((item, index) => (
//         <div
//           key={index}
//           className={`grid grid-cols-7 border-x border-b border-gray-300 text-center items-center ${
//             index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
//           }`}
//         >
//           <div className="p-3 border-r">
//             <img
//               src={item.ProductImage}
//               alt=""
//               className="w-14 h-14 rounded-lg object-cover mx-auto"
//             />
//           </div>
//           <div className="p-3 border-r">{item.OrderItems}</div>
//           <div className="p-3 border-r">{item.CustomerName}</div>
//           <div className="p-3 border-r">{item.TotalAmount}</div>
//           <div className="p-3 border-r">
//             <button
//               style={{ backgroundColor: item.StatusBg }}
//               className="text-white px-3 py-1 rounded-full text-sm"
//             >
//               {item.Status}
//             </button>
//           </div>
//           <div className="p-3 border-r">{item.OrderID}</div>
//           <div className="p-3">{item.Location}</div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default OrderComponent

// import React, { useContext, useState } from 'react'
// import { ordersData } from '../data/dummy'
// import { stateContext } from '../context/ContextProvider';

// const OrderComponent = () => {
//   const{currentPage , setCurrentPage} = useContext(stateContext)
//   const itemsPerPage = 10;

//   const totalPages = Math.ceil(ordersData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = ordersData.slice(startIndex, endIndex);

//   return (
//     <div className="p-4 mt-[80px] md:mt-0">
//       {/* 💡 Horizontal Scroll Wrapper */}
//       <div className="overflow-x-auto">
//         {/* Header */}
//         <div className="min-w-[700px] grid grid-cols-7 border border-gray-300 bg-gray-200 font-semibold text-center text-gray-700">
//           <div className="p-3 border-r">Image</div>
//           <div className="p-3 border-r">Item</div>
//           <div className="p-3 border-r">Customer Name</div>
//           <div className="p-3 border-r">Total Amount</div>
//           <div className="p-3 border-r">Status</div>
//           <div className="p-3 border-r">Order ID</div>
//           <div className="p-3">Location</div>
//         </div>

//         {/* Paginated Data Rows */}
//         {currentItems.map((item, index) => (
//           <div
//             key={index}
//             className={`min-w-[700px] grid grid-cols-7 border-x border-b border-gray-300 text-center items-center ${
//               index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
//             }`}
//           >
//             <div className="p-3 border-r">
//               <img
//                 src={item.ProductImage}
//                 alt=""
//                 className="w-14 h-14 rounded-lg object-cover mx-auto"
//               />
//             </div>
//             <div className="p-3 border-r">{item.OrderItems}</div>
//             <div className="p-3 border-r">{item.CustomerName}</div>
//             <div className="p-3 border-r">{item.TotalAmount}</div>
//             <div className="p-3 border-r">
//               <button
//                 style={{ backgroundColor: item.StatusBg }}
//                 className="text-white px-3 py-1 rounded-full text-sm"
//               >
//                 {item.Status}
//               </button>
//             </div>
//             <div className="p-3 border-r">{item.OrderID}</div>
//             <div className="p-3">{item.Location}</div>
//           </div>
//         ))}

//         {/* Pagination Buttons */}
//         <div className="flex justify-center gap-2 mt-6">
//           {[...Array(totalPages)].map((_, index) => {
//             const pageNum = index + 1;
//             return (
//               <button
//                 key={pageNum}
//                 onClick={() => setCurrentPage(pageNum)}
//                 className={`px-4 py-2 rounded border text-sm font-medium ${
//                   currentPage === pageNum
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//                 }`}
//               >
//                 {pageNum}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderComponent;


import React, { useContext, useState } from 'react';
import { ordersData } from '../data/dummy';
import { stateContext } from '../context/ContextProvider';

const OrderComponent = () => {
  const { currentPage, setCurrentPage } = useContext(stateContext);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = ordersData.slice(startIndex, endIndex);

  return (
    <div className="p-4 mt-[80px] md:mt-0 dark:bg-[#0d1321] dark:text-gray-200">
      {/* 💡 Horizontal Scroll Wrapper */}
      <div className="overflow-x-auto">
        {/* Header */}
        <div className="min-w-[700px] grid grid-cols-7 border border-gray-300 bg-gray-200 font-semibold text-center text-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600">
          <div className="p-3 border-r">Image</div>
          <div className="p-3 border-r">Item</div>
          <div className="p-3 border-r">Customer Name</div>
          <div className="p-3 border-r">Total Amount</div>
          <div className="p-3 border-r">Status</div>
          <div className="p-3 border-r">Order ID</div>
          <div className="p-3">Location</div>
        </div>

        {/* Paginated Data Rows */}
        {currentItems.map((item, index) => (
          <div
            key={index}
            className={`min-w-[700px] grid grid-cols-7 border-x border-b border-gray-300 text-center items-center ${
              index % 2 === 0
                ? 'bg-white dark:bg-[#1e293b]'
                : 'bg-gray-100 dark:bg-[#334155]'
            } dark:border-gray-600`}
          >
            <div className="p-3 border-r">
              <img
                src={item.ProductImage}
                alt=""
                className="w-14 h-14 rounded-lg object-cover mx-auto"
              />
            </div>
            <div className="p-3 border-r">{item.OrderItems}</div>
            <div className="p-3 border-r">{item.CustomerName}</div>
            <div className="p-3 border-r">{item.TotalAmount}</div>
            <div className="p-3 border-r">
              <button
                style={{ backgroundColor: item.StatusBg }}
                className="text-white px-3 py-1 rounded-full text-sm"
              >
                {item.Status}
              </button>
            </div>
            <div className="p-3 border-r">{item.OrderID}</div>
            <div className="p-3">{item.Location}</div>
          </div>
        ))}

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-4 py-2 rounded border text-sm font-medium ${
                  currentPage === pageNum
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
