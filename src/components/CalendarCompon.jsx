// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en'; // optional for formatting

// const CalendarCompon = () => {
//   const [currentDate, setCurrentDate] = useState(dayjs());

//   const startOfMonth = currentDate.startOf('month');
//   const endOfMonth = currentDate.endOf('month');
//   const startDay = startOfMonth.day(); // Sunday = 0

//   const daysInMonth = endOfMonth.date();
//   const today = dayjs();

//   const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
//   const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

//   const handleYearChange = (e) => {
//     const year = parseInt(e.target.value);
//     if (!isNaN(year)) {
//       setCurrentDate(currentDate.year(year));
//     }
//   };

//   const handleMonthChange = (e) => {
//     const month = parseInt(e.target.value);
//     if (!isNaN(month)) {
//       setCurrentDate(currentDate.month(month));
//     }
//   };

//   const weeks = [];
//   let day = 1 - startDay;

//   while (day <= daysInMonth) {
//     const week = [];

//     for (let i = 0; i < 7; i++) {
//       if (day > 0 && day <= daysInMonth) {
//         week.push(day);
//       } else {
//         week.push(null);
//       }
//       day++;
//     }

//     weeks.push(week);
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-10">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//         <div className="flex gap-4">
//           <button onClick={prevMonth} className="text-blue-600 font-semibold text-lg">&lt; Prev</button>
//           <button onClick={nextMonth} className="text-blue-600 font-semibold text-lg">Next &gt;</button>
//         </div>
//         <h2 className="text-2xl font-bold text-gray-800">
//           {currentDate.format('MMMM YYYY')}
//         </h2>
//         <div className="flex gap-2">
//           <select
//             value={currentDate.month()}
//             onChange={handleMonthChange}
//             className="border border-gray-300 rounded px-2 py-1 text-gray-700"
//           >
//             {[
//               'January', 'February', 'March', 'April', 'May', 'June',
//               'July', 'August', 'September', 'October', 'November', 'December'
//             ].map((month, index) => (
//               <option key={index} value={index}>{month}</option>
//             ))}
//           </select>
//           <input
//             type="number"
//             value={currentDate.year()}
//             onChange={handleYearChange}
//             className="border border-gray-300 rounded px-2 py-1 w-24 text-gray-700"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-7 text-center font-semibold mb-4 text-gray-700 text-lg">
//         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
//           <div key={d}>{d}</div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 text-center gap-3">
//         {weeks.map((week, idx) => (
//           <React.Fragment key={idx}>
//             {week.map((date, i) => (
//               <div
//                 key={i}
//                 className={`h-16 flex items-center justify-center rounded-lg text-lg transition-all duration-200 shadow-sm ${
//                   date
//                     ? currentDate.date(date).isSame(today, 'day')
//                       ? 'bg-blue-600 text-white font-bold'
//                       : 'bg-blue-50 text-gray-800 hover:bg-blue-100'
//                     : ''
//                 }`}
//               >
//                 {date ?? ''}
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarCompon;





import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const CalendarCompon = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day(); // Sunday = 0
  const daysInMonth = endOfMonth.date();
  const today = dayjs();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    if (!isNaN(year)) {
      setCurrentDate(currentDate.year(year));
    }
  };

  const handleMonthChange = (e) => {
    const month = parseInt(e.target.value);
    if (!isNaN(month)) {
      setCurrentDate(currentDate.month(month));
    }
  };

  const weeks = [];
  let day = 1 - startDay;

  while (day <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (day > 0 && day <= daysInMonth) {
        week.push(day);
      } else {
        week.push(null);
      }
      day++;
    }
    weeks.push(week);
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white dark:bg-[#1e293b] dark:text-gray-200 shadow-xl rounded-xl mt-10">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-4">
          <button
            onClick={prevMonth}
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg"
          >
            &lt; Prev
          </button>
          <button
            onClick={nextMonth}
            className="text-blue-600 dark:text-blue-400 font-semibold text-lg"
          >
            Next &gt;
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {currentDate.format('MMMM YYYY')}
        </h2>

        <div className="flex gap-2">
          <select
            value={currentDate.month()}
            onChange={handleMonthChange}
            className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-gray-700 dark:text-white dark:bg-[#334155]"
          >
            {[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December'
            ].map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={currentDate.year()}
            onChange={handleYearChange}
            className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 w-24 text-gray-700 dark:text-white dark:bg-[#334155]"
          />
        </div>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-7 text-center font-semibold mb-4 text-gray-700 dark:text-gray-300 text-lg">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 text-center gap-3">
        {weeks.map((week, idx) => (
          <React.Fragment key={idx}>
            {week.map((date, i) => (
              <div
                key={i}
                className={`h-16 flex items-center justify-center rounded-lg text-lg transition-all duration-200 shadow-sm ${
                  date
                    ? currentDate.date(date).isSame(today, 'day')
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-blue-50 text-gray-800 hover:bg-blue-100 dark:bg-[#334155] dark:text-white dark:hover:bg-[#475569]'
                    : ''
                }`}
              >
                {date ?? ''}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalendarCompon;
