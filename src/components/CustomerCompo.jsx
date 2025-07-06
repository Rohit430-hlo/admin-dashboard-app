
// import React, { useContext, useState } from "react";
// import { customersData } from "../data/dummy";
// import { stateContext } from "../context/ContextProvider";

// const CustomerComponent = () => {
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleCheckboxChange = (customerId) => {
//     if (selectedRows.includes(customerId)) {
//       setSelectedRows(selectedRows.filter((id) => id !== customerId));
//     } else {
//       setSelectedRows([...selectedRows, customerId]);
//     }
//   };

//   const isSelected = (id) => selectedRows.includes(id);

//   const{currentPage , setCurrentPage} = useContext(stateContext)
//   const itemPerPage = 10;

//   const [deletedIds, setDeletedIds] = useState([]);

//   const totalPage = Math.ceil(customersData.length / itemPerPage)
//   const startIndex = (currentPage - 1)* itemPerPage ;
//   const endIndex = startIndex + itemPerPage;


//   const visibleCustomer = customersData.filter((customer)=> !deletedIds.includes(customer.CustomerID))


//   const currentItem = visibleCustomer.slice(startIndex , endIndex)




//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">Customers</h2>

//       {/* 🔴 Delete Button Color Change */}
//       <div className="mb-3">
//         <button
//             onClick={()=>{
//                 setDeletedIds([...deletedIds , ...selectedRows])
//                 setSelectedRows([])
//             }}
//           className={`px-5 py-2 rounded font-semibold transition duration-300 ${
//             selectedRows.length > 0
//               ? "bg-red-600 text-white hover:bg-red-700"
//               : "bg-gray-300 text-gray-600 cursor-not-allowed"
//           }`}
//         >
//           Delete
//         </button>
//       </div>

//       {/* 📄 Table */}
//       <div className="overflow-x-auto bg-white shadow-md rounded-xl">
//         <table className="min-w-[1000px] w-full text-sm text-left text-gray-500">
//           <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
//             <tr>
//               <th className="px-4 py-3">Select</th>
//               <th className="px-4 py-3">Image</th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Email</th>
//               <th className="px-4 py-3">Project Name</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Weeks</th>
//               <th className="px-4 py-3">Budget</th>
//               <th className="px-4 py-3">Location</th>
//               <th className="px-4 py-3">Customer ID</th>
//             </tr>
//           </thead>

//           <tbody>
//             {currentItem.map((customer, index) => (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-gray-50 transition-all duration-200"
//               >
//                 <td className="px-4 py-3">
//                   <input
//                     type="checkbox"
//                     checked={isSelected(customer.CustomerID)}
//                     onChange={() => handleCheckboxChange(customer.CustomerID)}
//                   />
//                 </td>
//                 <td className="px-4 py-3">
//                   <img
//                     src={customer.CustomerImage}
//                     alt={customer.CustomerName}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 </td>
//                 <td className="px-4 py-3 font-medium text-gray-900">
//                   {customer.CustomerName}
//                 </td>
//                 <td className="px-4 py-3 text-gray-500">
//                   {customer.CustomerEmail}
//                 </td>
//                 <td className="px-4 py-3">{customer.ProjectName}</td>
//                 <td className="px-4 py-3">
//                   <span className="flex items-center gap-2">
//                     <span
//                       className="h-3 w-3 rounded-full inline-block"
//                       style={{ backgroundColor: customer.StatusBg }}
//                     ></span>
//                     {customer.Status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">{customer.Weeks}</td>
//                 <td className="px-4 py-3">{customer.Budget}</td>
//                 <td className="px-4 py-3">{customer.Location}</td>
//                 <td className="px-4 py-3 text-blue-600">
//                   {customer.CustomerID}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>


//       </div>
//             <div className="flex justify-center gap-3 mt-6">
//                 {[...Array(totalPage)].map((_ , index)=>{
//                     const pageNum = index + 1;
//                     return(
//                         <button
//                             key={index}
//                             onClick={()=>setCurrentPage(pageNum)}
//                             className={`px-4 py-2 rounded border text-sm font-medium ${
//                                 currentPage == pageNum 
//                                 ? ('bg-blue-600 text-white')
//                                 : ('bg-gray-200 text-gray-800 hover:bg-gray-300')
//                             } `}
//                         >
//                             {pageNum}

//                         </button>
//                     )
//                 })}
//             </div>
//     </div>
//   );
// };

// export default CustomerComponent;



// import React, { useContext, useState } from "react";
// import { customersData } from "../data/dummy";
// import { stateContext } from "../context/ContextProvider";

// const CustomerComponent = () => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [deletedIds, setDeletedIds] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editableData, setEditableData] = useState({});

//   const { currentPage, setCurrentPage } = useContext(stateContext);
//   const itemPerPage = 10;

//   const handleCheckboxChange = (customerId) => {
//     if (selectedRows.includes(customerId)) {
//       setSelectedRows(selectedRows.filter((id) => id !== customerId));
//     } else {
//       setSelectedRows([...selectedRows, customerId]);
//     }
//   };

//   const isSelected = (id) => selectedRows.includes(id);

//   const visibleCustomer = customersData.filter(
//     (customer) => !deletedIds.includes(customer.CustomerID)
//   );

//   const totalPage = Math.ceil(visibleCustomer.length / itemPerPage);
//   const startIndex = (currentPage - 1) * itemPerPage;
//   const endIndex = startIndex + itemPerPage;
//   const currentItem = visibleCustomer.slice(startIndex, endIndex);


//   return (
//     <div className="p-4">
      

//       {/* 🔴 Delete Button */}
//       <div className="mb-3">
//         <button
//           onClick={() => {
//             setDeletedIds([...deletedIds, ...selectedRows]);
//             setSelectedRows([]);
//           }}
//           className={`px-5 py-2 rounded font-semibold transition duration-300 ${
//             selectedRows.length > 0
//               ? "bg-red-600 text-white hover:bg-red-700"
//               : "bg-gray-300 text-gray-600 cursor-not-allowed"
//           }`}
//         >
//           Delete
//         </button>
//       </div>

//       {/* 📄 Table */}
//       <div className="overflow-x-auto bg-white shadow-md rounded-xl">
//         <table className="min-w-[1000px] w-full text-sm text-left text-gray-500">
//           <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
//             <tr>
//               <th className="px-4 py-3">Select</th>
//               <th className="px-4 py-3">Image</th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Email</th>
//               <th className="px-4 py-3">Project Name</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Weeks</th>
//               <th className="px-4 py-3">Budget</th>
//               <th className="px-4 py-3">Location</th>
//               <th className="px-4 py-3">Customer ID</th>
//             </tr>
//           </thead>

//           <tbody>
//             {currentItem.map((customer, index) => (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-gray-50 transition-all duration-200"
//               >
//                 <td className="px-4 py-3">
//                   <input
//                     type="checkbox"
//                     checked={isSelected(customer.CustomerID)}
//                     onChange={() =>
//                       handleCheckboxChange(customer.CustomerID)
//                     }
//                   />
//                 </td>
//                 <td className="px-4 py-3">
//                   <img
//                     src={customer.CustomerImage}
//                     alt={customer.CustomerName}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 </td>

//                 {/* 👇 Editable Customer Name */}
//                 <td
//                   className="px-4 py-3 font-medium text-gray-900"
//                   onDoubleClick={() => setEditingId(customer.CustomerID)}
//                 >
//                   {editingId === customer.CustomerID ? (
//                     <input
//                       type="text"
//                       autoFocus
//                       value={
//                         editableData[customer.CustomerID]?.CustomerName !==
//                         undefined
//                           ? editableData[customer.CustomerID]?.CustomerName
//                           : customer.CustomerName
//                       }
//                       onChange={(e) =>
//                         setEditableData((prev) => ({
//                           ...prev,
//                           [customer.CustomerID]: {
//                             ...prev[customer.CustomerID],
//                             CustomerName: e.target.value,
//                           },
//                         }))
//                       }
//                       onBlur={() => setEditingId(null)}
//                       className="border px-2 py-1 rounded w-full"
//                     />
//                   ) : (
//                     editableData[customer.CustomerID]?.CustomerName ??
//                     customer.CustomerName
//                   )}
//                 </td>

//                 {/* 👇 Editable Customer Email */}
//                 <td
//                   className="px-4 py-3 text-gray-500"
//                   onDoubleClick={() => setEditingId(customer.CustomerID + "-email")}
//                 >
//                   {editingId === customer.CustomerID + "-email" ? (
//                     <input
//                       type="text"
//                       autoFocus
//                       value={
//                         editableData[customer.CustomerID]?.CustomerEmail !==
//                         undefined
//                           ? editableData[customer.CustomerID]?.CustomerEmail
//                           : customer.CustomerEmail
//                       }
//                       onChange={(e) =>
//                         setEditableData((prev) => ({
//                           ...prev,
//                           [customer.CustomerID]: {
//                             ...prev[customer.CustomerID],
//                             CustomerEmail: e.target.value,
//                           },
//                         }))
//                       }
//                       onBlur={() => setEditingId(null)}
//                       className="border px-2 py-1 rounded w-full"
//                     />
//                   ) : (
//                     editableData[customer.CustomerID]?.CustomerEmail ??
//                     customer.CustomerEmail
//                   )}
//                 </td>

//                 <td className="px-4 py-3">{customer.ProjectName}</td>
//                 <td className="px-4 py-3">
//                   <span className="flex items-center gap-2">
//                     <span
//                       className="h-3 w-3 rounded-full inline-block"
//                       style={{ backgroundColor: customer.StatusBg }}
//                     ></span>
//                     {customer.Status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-3">{customer.Weeks}</td>
//                 <td className="px-4 py-3">{customer.Budget}</td>
//                 <td className="px-4 py-3">{customer.Location}</td>
//                 <td className="px-4 py-3 text-blue-600">
//                   {customer.CustomerID}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 🔢 Pagination */}
//       <div className="flex justify-center gap-3 mt-6">
//         {[...Array(totalPage)].map((_, index) => {
//           const pageNum = index + 1;
//           return (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(pageNum)}
//               className={`px-4 py-2 rounded border text-sm font-medium ${
//                 currentPage === pageNum
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               {pageNum}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CustomerComponent;






// with dark mode




import React, { useContext, useState } from "react";
import { customersData } from "../data/dummy";
import { stateContext } from "../context/ContextProvider";

const CustomerComponent = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [deletedIds, setDeletedIds] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editableData, setEditableData] = useState({});

  const { currentPage, setCurrentPage } = useContext(stateContext);
  const itemPerPage = 10;

  const handleCheckboxChange = (customerId) => {
    if (selectedRows.includes(customerId)) {
      setSelectedRows(selectedRows.filter((id) => id !== customerId));
    } else {
      setSelectedRows([...selectedRows, customerId]);
    }
  };

  const isSelected = (id) => selectedRows.includes(id);

  const visibleCustomer = customersData.filter(
    (customer) => !deletedIds.includes(customer.CustomerID)
  );

  const totalPage = Math.ceil(visibleCustomer.length / itemPerPage);
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = visibleCustomer.slice(startIndex, endIndex);

  return (
    <div className="p-4 mt-10 dark:bg-[#0d1321] dark:text-gray-200">
      {/* 🔴 Delete Button */}
      <div className="mb-3">
        <button
          onClick={() => {
            setDeletedIds([...deletedIds, ...selectedRows]);
            setSelectedRows([]);
          }}
          className={`px-5 py-2 rounded font-semibold transition duration-300 ${
            selectedRows.length > 0
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
          }`}
        >
          Delete
        </button>
      </div>

      {/* 📄 Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-xl dark:border-gray-600 dark:bg-[#1e293b]">
        <table className="min-w-[1000px] w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-200 border-b dark:border-gray-600">
            <tr>
              <th className="px-4 py-3">Select</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Project Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Weeks</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Customer ID</th>
            </tr>
          </thead>

          <tbody>
            {currentItem.map((customer, index) => (
              <tr
                key={index}
                className={`border-x border-b text-center items-center ${
                  index % 2 === 0
                    ? 'bg-white dark:bg-[#1e293b]'
                    : 'bg-gray-100 dark:bg-[#334155]'
                } dark:border-gray-600 hover:dark:bg-gray-700 hover:bg-gray-50 transition-all duration-200`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={isSelected(customer.CustomerID)}
                    onChange={() =>
                      handleCheckboxChange(customer.CustomerID)
                    }
                  />
                </td>
                <td className="px-4 py-3">
                  <img
                    src={customer.CustomerImage}
                    alt={customer.CustomerName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>

                {/* 👇 Editable Customer Name */}
                <td
                  className="px-4 py-3 font-medium text-gray-900 dark:text-white"
                  onDoubleClick={() => setEditingId(customer.CustomerID)}
                >
                  {editingId === customer.CustomerID ? (
                    <input
                      type="text"
                      autoFocus
                      value={
                        editableData[customer.CustomerID]?.CustomerName !==
                        undefined
                          ? editableData[customer.CustomerID]?.CustomerName
                          : customer.CustomerName
                      }
                      onChange={(e) =>
                        setEditableData((prev) => ({
                          ...prev,
                          [customer.CustomerID]: {
                            ...prev[customer.CustomerID],
                            CustomerName: e.target.value,
                          },
                        }))
                      }
                      onBlur={() => setEditingId(null)}
                      className="border px-2 py-1 rounded w-full dark:bg-gray-700 dark:text-white dark:border-gray-500"
                    />
                  ) : (
                    editableData[customer.CustomerID]?.CustomerName ??
                    customer.CustomerName
                  )}
                </td>

                {/* 👇 Editable Customer Email */}
                <td
                  className="px-4 py-3 text-gray-500 dark:text-gray-300"
                  onDoubleClick={() =>
                    setEditingId(customer.CustomerID + "-email")
                  }
                >
                  {editingId === customer.CustomerID + "-email" ? (
                    <input
                      type="text"
                      autoFocus
                      value={
                        editableData[customer.CustomerID]?.CustomerEmail !==
                        undefined
                          ? editableData[customer.CustomerID]?.CustomerEmail
                          : customer.CustomerEmail
                      }
                      onChange={(e) =>
                        setEditableData((prev) => ({
                          ...prev,
                          [customer.CustomerID]: {
                            ...prev[customer.CustomerID],
                            CustomerEmail: e.target.value,
                          },
                        }))
                      }
                      onBlur={() => setEditingId(null)}
                      className="border px-2 py-1 rounded w-full dark:bg-gray-700 dark:text-white dark:border-gray-500"
                    />
                  ) : (
                    editableData[customer.CustomerID]?.CustomerEmail ??
                    customer.CustomerEmail
                  )}
                </td>

                <td className="px-4 py-3">{customer.ProjectName}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center justify-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full inline-block"
                      style={{ backgroundColor: customer.StatusBg }}
                    ></span>
                    {customer.Status}
                  </span>
                </td>
                <td className="px-4 py-3">{customer.Weeks}</td>
                <td className="px-4 py-3">{customer.Budget}</td>
                <td className="px-4 py-3">{customer.Location}</td>
                <td className="px-4 py-3 text-blue-600 dark:text-blue-400">
                  {customer.CustomerID}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔢 Pagination */}
      <div className="flex justify-center gap-3 mt-6">
        {[...Array(totalPage)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-4 py-2 rounded border text-sm font-medium ${
                currentPage === pageNum
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerComponent;
