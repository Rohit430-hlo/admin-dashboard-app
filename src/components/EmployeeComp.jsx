// import React, { useState } from 'react'
// import { employeesData } from '../data/dummy'
// import { IoSearch } from "react-icons/io5";

// const EmployeeComp = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const[searchName , setSearchName] = useState("")
//   const itemsPerPage = 10;

//   const totalPages = Math.ceil(employeesData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
  
//   const filteredEmployees = employeesData.filter((item) =>
//     item.Name.toLowerCase().includes(searchName.toLowerCase())
// );

// const currentItems = filteredEmployees.slice(startIndex, endIndex);

//   return (
//     <div className="p-4 mt-[80px] md:mt-0">
//       {/* 💡 Horizontal Scroll Wrapper */}
//       <div className=" w-full overflow-x-auto">
//         <div className='w-[250px] relative'>
//             <input 
//                 type="text"
//                 placeholder='Search Name'
//                 value={searchName}
//                 onChange={(e)=>{
//                     setSearchName(e.target.value)
//                     setCurrentPage(1)
//                 }}
//                 className='border border-gray-500 w-full pl-10 pr-3 py-2'
//             />
//             <span className='absolute right-3 inset-y-0 pl-3 flex items-center text-gray-500'>
//                 <IoSearch onClick={()=>{setCount(count+1)}} className='text-lg' />
//             </span>
//         </div>
//         {/* Header */}
//         <div className="min-w-[900px] grid grid-cols-6 border border-gray-300 bg-gray-200 font-semibold text-center text-gray-700">
//           <div className="p-3 border-r">Employee</div>
//           <div className="p-3 border-r">Designation</div>
//           <div className="p-3 border-r">Country</div>
//           <div className="p-3 border-r">Hire Date</div>
//           <div className="p-3 border-r">Reports To</div>
//           <div className="p-3">Employee ID</div>
//         </div>

//         {/* Paginated Data Rows */}
//         {currentItems.map((item, index) => (
//           <div
//             key={index}
//             className={`min-w-[900px] grid grid-cols-6 border-x border-b border-gray-300 text-center items-center ${
//               index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
//             }`}
//           >
//             <div className="p-3 border-r flex items-center gap-3">
//               <img
//                 src={item.EmployeeImage}
//                 alt=""
//                 className="w-12 h-12 rounded-full object-cover "
//               />
//               <p className='text-left'>{item.Name}</p>
//             </div>
//             <div className="p-3 border-r">{item.Title}</div>
//             <div className="p-3 border-r">{item.Country}</div>
//             <div className="p-3 border-r">{item.HireDate}</div>
//             <div className="p-3 border-r">{item.ReportsTo}</div>
           
//             <div className="p-3 border-r">{item.EmployeeID}</div>
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

// export default EmployeeComp;


// import React, { useState } from 'react';
// import { employeesData } from '../data/dummy';
// import { IoSearch } from "react-icons/io5";

// const EmployeeComp = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchName, setSearchName] = useState("");
//   const itemsPerPage = 10;

//   const filteredEmployees = employeesData.filter((item) =>
//     item.Name.toLowerCase().includes(searchName.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = filteredEmployees.slice(startIndex, endIndex);

//   return (
//     <div className="p-4 mt-[80px] md:mt-0">
//       <div className="w-full overflow-x-auto">
//         {/* 🔍 Search Box */}
//         <div className='flex justify-between items-center mb-4'>
//           <div className='w-[300px] relative'>
//             <input
//               type="text"
//               placeholder='Search Name...'
//               value={searchName}
//               onChange={(e) => {
//                 setSearchName(e.target.value);
//                 setCurrentPage(1);
//               }}
//               className='border border-gray-400 w-full pl-10 pr-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
//             />
//             <span className='absolute left-3 inset-y-0 flex items-center text-gray-500'>
//               <IoSearch className='text-xl' />
//             </span>
//           </div>
//         </div>

//         {/* 🧾 Header */}
//         <div className="min-w-[900px] grid grid-cols-6 border border-gray-300 bg-blue-100 font-semibold text-center text-gray-700 rounded-t-lg">
//           <div className="p-3 border-r">Employee</div>
//           <div className="p-3 border-r">Designation</div>
//           <div className="p-3 border-r">Country</div>
//           <div className="p-3 border-r">Hire Date</div>
//           <div className="p-3 border-r">Reports To</div>
//           <div className="p-3">Employee ID</div>
//         </div>

//         {/* 📦 Data Rows */}
//         {currentItems.length > 0 ? (
//           currentItems.map((item, index) => (
//             <div
//               key={index}
//               className={`min-w-[900px] grid grid-cols-6 border-x border-b border-gray-300 text-center items-center transition-all duration-200 ${
//                 index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
//               } hover:bg-blue-50`}
//             >
//               <div className="p-3 border-r flex items-center gap-3">
//                 <img
//                   src={item.EmployeeImage}
//                   alt=""
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <p className='text-left'>{item.Name}</p>
//               </div>
//               <div className="p-3 border-r">{item.Title}</div>
//               <div className="p-3 border-r">{item.Country}</div>
//               <div className="p-3 border-r">{item.HireDate}</div>
//               <div className="p-3 border-r">{item.ReportsTo}</div>
//               <div className="p-3">{item.EmployeeID}</div>
//             </div>
//           ))
//         ) : (
//           <div className="min-w-[900px] py-6 text-center text-gray-500 border-x border-b border-gray-300">
//             No matching employee found.
//           </div>
//         )}

//         {/* 📃 Pagination */}
//         {totalPages > 1 && (
//           <nav className="flex justify-center gap-2 mt-6 flex-wrap">
//             {[...Array(totalPages)].map((_, index) => {
//               const pageNum = index + 1;
//               return (
//                 <button
//                   key={pageNum}
//                   onClick={() => setCurrentPage(pageNum)}
//                   className={`px-4 py-2 rounded-lg border text-sm font-medium ${
//                     currentPage === pageNum
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//                   }`}
//                 >
//                   {pageNum}
//                 </button>
//               );
//             })}
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EmployeeComp;




import React, { useState } from 'react';
import { employeesData } from '../data/dummy';
import { IoSearch } from "react-icons/io5";

const EmployeeComp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const itemsPerPage = 10;

  const filteredEmployees = employeesData.filter((item) =>
    item.Name.toLowerCase().includes(searchName.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredEmployees.slice(startIndex, endIndex);

  return (
    <div className="p-4 mt-[80px] md:mt-0 dark:bg-[#0d1321] dark:text-gray-200">
      <div className="w-full overflow-x-auto">
        {/* 🔍 Search Box */}
        <div className='flex justify-between items-center mb-4'>
          <div className='w-[300px] relative'>
            <input
              type="text"
              placeholder='Search Name...'
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
                setCurrentPage(1);
              }}
              className='border border-gray-400 w-full pl-10 pr-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-gray-400'
            />
            <span className='absolute left-3 inset-y-0 flex items-center text-gray-500 dark:text-gray-400'>
              <IoSearch className='text-xl' />
            </span>
          </div>
        </div>

        {/* 🧾 Header */}
        <div className="min-w-[900px] grid grid-cols-6 border border-gray-300 bg-blue-100 font-semibold text-center text-gray-700 rounded-t-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600">
          <div className="p-3 border-r">Employee</div>
          <div className="p-3 border-r">Designation</div>
          <div className="p-3 border-r">Country</div>
          <div className="p-3 border-r">Hire Date</div>
          <div className="p-3 border-r">Reports To</div>
          <div className="p-3">Employee ID</div>
        </div>

        {/* 📦 Data Rows */}
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div
              key={index}
              className={`min-w-[900px] grid grid-cols-6 border-x border-b border-gray-300 text-center items-center transition-all duration-200 ${
                index % 2 === 0
                  ? 'bg-white dark:bg-[#1e293b]'
                  : 'bg-gray-50 dark:bg-[#334155]'
              } hover:bg-blue-50 dark:hover:bg-gray-700 dark:border-gray-600`}
            >
              <div className="p-3 border-r flex items-center gap-3">
                <img
                  src={item.EmployeeImage}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className='text-left'>{item.Name}</p>
              </div>
              <div className="p-3 border-r">{item.Title}</div>
              <div className="p-3 border-r">{item.Country}</div>
              <div className="p-3 border-r">{item.HireDate}</div>
              <div className="p-3 border-r">{item.ReportsTo}</div>
              <div className="p-3">{item.EmployeeID}</div>
            </div>
          ))
        ) : (
          <div className="min-w-[900px] py-6 text-center text-gray-500 border-x border-b border-gray-300 dark:text-gray-400 dark:border-gray-600">
            No matching employee found.
          </div>
        )}

        {/* 📃 Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center gap-2 mt-6 flex-wrap">
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
};

export default EmployeeComp;
