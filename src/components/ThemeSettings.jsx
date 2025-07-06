// import React, { useContext } from 'react'
// import { MdOutlineCancel } from 'react-icons/md'
// import { BsCheck } from 'react-icons/bs'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'
// import { themeColors } from '../data/dummy'
// import { stateContext } from '../context/ContextProvider'



// const ThemeSettings = () => {

//   const { setColor , setMode , currentMode , currentColor , setThemeSettings } =useContext(stateContext)

//   return (
//     <div className='bg-half-transparent w-full fixed nav-item top-0 right-0 z-50'>
//       <div className='float-right h-screen  dark:text-gray-200 bg-white dark:bg-[#1e2637] w-72'>
//         <div className='flex justify-between p-4 ml-4 items-center'>
//           <p className='font-semibold text-xl'>Setting</p>
//           <button type='button'
//               onClick={()=>setThemeSettings(false)}
//               style={{color : 'rgb(153 , 171 , 180)' , borderRadius : '50%'}}
//               className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
//           >
//             <MdOutlineCancel/>
//           </button>
//         </div>

//         <div className='flex-col p-4 ml-4 border-t-1 border-color'>
//           <p className='font-semibold text-lg'>Theme Options</p>
          
//           <div className='mt-4'>
//             <input
//              type="radio"
//              id='light'
//              name='theme'
//              value={"Light"}
//              onChange={setMode}
//              className='cursor-pointer'
//              checked = {currentMode === 'Light'}
//             />
//             <label htmlFor="light" className='cursor-pointer ml-2 text-md  '>Light</label>
//           </div>

//           <div className='mt-4'>
//             <input
//              type="radio"
//              id='dark'
//              name='theme'
//              value={"Dark"}
//              onChange={setMode}
//              className='cursor-pointer'
//              checked = {currentMode === 'Dark'}
//             />
//             <label htmlFor="dark" className='cursor-pointer ml-2 text-md  '>Dark</label>
//           </div>

//         </div>

//           <div className='flex-col p-4 ml-4 border-t-1 border-color'>
//           <p className='font-semibold text-lg'>Theme Color</p>
//           <div className='flex gap-3 '>
//             {themeColors.map((item , index)=>{
//               return(
//                 <TooltipComponent key={index} content={item.name} position='TopCenter'>
//                   <div className='relative mt-2 gap-5 cursor-pointer flex items-center'>
//                     <button
//                       type='button'
//                       className='h-10 w-10 rounded-full cursor-pointer'
//                       style={{backgroundColor : item.color}}
//                       onClick={()=>setColor(item.color)}
//                     >
//                       <BsCheck className={`ml-2 text-2xl text-white ${item.color ===  currentColor ? 'block' : 'hidden'}`} />
//                     </button>

//                   </div>
//                 </TooltipComponent>
//               )
//             })}

//           </div>
//           </div>

//       </div>

//     </div>
//   )
// }

// export default ThemeSettings



import React, { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'
import { stateContext } from '../context/ContextProvider'

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useContext(stateContext)

  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0 z-50'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#1e2637] w-72'>
        
        {/* Header */}
        <div className='flex justify-between p-4 ml-4 items-center'>
          <p className='font-semibold text-xl'>Setting</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153 , 171 , 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Theme Options */}
        <div className='flex-col p-4 ml-4 border-t-1 border-color'>
          <p className='font-semibold text-lg'>Theme Options</p>

          {/* Light Mode */}
          <div className='mt-4 flex items-center gap-2'>
            <input
              type="radio"
              id='light'
              name='theme'
              value="Light"
              onChange={setMode}
              checked={currentMode === 'Light'}
              className={`
                appearance-none w-4 h-4 rounded-full border-2 cursor-pointer transition
                ${currentMode === 'Light' 
                  ? 'bg-black border-black dark:bg-white dark:border-white' 
                  : 'bg-transparent border-black dark:border-white'}
              `}
            />
            <label htmlFor="light" className='cursor-pointer text-md'>Light</label>
          </div>

          {/* Dark Mode */}
          <div className='mt-4 flex items-center gap-2'>
            <input
              type="radio"
              id='dark'
              name='theme'
              value="Dark"
              onChange={setMode}
              checked={currentMode === 'Dark'}
              className={`
                appearance-none w-4 h-4 rounded-full border-2 cursor-pointer transition
                ${currentMode === 'Dark' 
                  ? 'bg-white border-white dark:bg-white dark:border-white' 
                  : 'bg-transparent border-black dark:border-white'}
              `}
            />
            <label htmlFor="dark" className='cursor-pointer text-md'>Dark</label>
          </div>
        </div>

        {/* Theme Colors */}
        <div className='flex-col p-4 ml-4 border-t-1 border-color'>
          <p className='font-semibold text-lg'>Theme Color</p>
          <div className='flex gap-3 '>
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position='TopCenter'>
                <div className='relative mt-2 gap-5 cursor-pointer flex items-center'>
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ThemeSettings



