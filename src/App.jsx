// import React, { useContext } from 'react'
// import { BrowserRouter  , Router , Route, Routes } from 'react-router-dom'

// import {TooltipComponent} from '@syncfusion/ej2-react-popups'
// import {FiSettings} from 'react-icons/fi'
// import {stateContext} from '../src/context/ContextProvider'
// import {Navbar , Footer , Sidebar , ThemeSettings} from './components'
// import {Pyramid , Customers , Kanban , Area , Bar ,Editor, Pie , Line , Ecommerce , Orders , Calendar , Employees , Stacked , Financial , ColorPicker , ColorMapping } from './pages'

// const App = () => {

//   const{activeMenu , themeSettings , setThemeSettings , currentColor , currentMode} = useContext(stateContext)
//   return (
//     <div className={currentMode === 'Dark' ? 'dark' : ''}>
//       <BrowserRouter>
//         <div className='flex relative dark:bg-main-dark '>
//           <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
//             <TooltipComponent content={'Setting'} position='Top'>

//             <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-200 text-white' 
//             onClick={()=>setThemeSettings(true)}
//             style={{background:currentColor , borderRadius:'50%'}} >
//               <FiSettings/>
//             </button>
//             </TooltipComponent>
//           </div>
//           {activeMenu?(
//             <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50'>
//               <Sidebar/>  
//             </div>
//           ):(
//             <div className='w-0 dark:bg-secondary-dark-bg'>
//               <Sidebar/>
//             </div>
//           )}

//           <div className={
//             `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`    
//           }>
//             <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
//              < Navbar/>
//             </div>
         

//           <div>
//            {themeSettings && <ThemeSettings/>}
//             <Routes>
//               {/* Dashboard */}
//               <Route path='/' element={<Ecommerce/>}/>
//               <Route path='/ecommerce' element={<Ecommerce/>}/>

//               {/*Pages */}

//               <Route path='/orders' element={<Orders/>}/>
//               <Route path='/employees' element={<Employees/>}/>
//               <Route path='/customers' element={<Customers/>}/>

//               {/*Apps */}

//               <Route path='/kanban' element={<Kanban/>}/>
//               <Route path='/editor' element={<Editor/>}/>
//               <Route path='/calendar' element={<Calendar/>}/>
//               <Route path='/color-picker' element={<ColorPicker/>}/>

//               {/*Apps */}
//               <Route path='/line' element={<Line/>}/>
//               <Route path='/area' element={<Area/>}/>
//               <Route path='/bar' element={<Bar/>}/>
//               <Route path='/pie' element={<Pie/>}/>
//               <Route path='/financial' element={<Financial/>}/>
//               <Route path='/color-mapping' element={<ColorMapping/>}/>
//               <Route path='/pyramid' element={<Pyramid/>}/>
//               <Route path='/stacked' element={<Stacked/>}/>

//             </Routes>
//              </div>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



import React, { useContext } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { stateContext } from '../src/context/ContextProvider'
import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings
} from './components'
import {
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Editor,
  Pie,
  Line,
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Financial,
  ColorPicker,
  ColorMapping
} from './pages'

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode
  } = useContext(stateContext)

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <Router>
        <div className='flex relative dark:bg-[#0d1321] bg-[#f4f7fa]'>
          <div className='fixed right-4 bottom-4 z-[1000]'>
            <TooltipComponent content={'Setting'} position='Top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-200 text-white'
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-[#1e2637] bg-white z-50'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-[#1e2637]'>
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-[#0d1321] bg-[#f4f7fa] min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
          >
            <div className='fixed md:static bg-[#f4f7fa] dark:bg-[#0d1321] navbar w-full'>
              <Navbar />
            </div>

            <div className='pt-20  px-4'>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App