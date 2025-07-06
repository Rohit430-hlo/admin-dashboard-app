// import React from 'react'

// const Header = ({category , title}) => {
//   return (
//     <div className='mb-10'>
//       <p className='text-gray-400'>
//         {category}
//       </p>
//       <p className='text-3xl tracking-tighter text-slate-900 font-extrabold'>{title}</p>
//     </div>
//   )
// }

// export default Header


import React from 'react';

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400 dark:text-gray-400">
        {category}
      </p>
      <p className="text-3xl tracking-tighter text-slate-900 dark:text-white font-extrabold">
        {title}
      </p>
    </div>
  );
};

export default Header;


