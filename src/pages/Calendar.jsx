import React from 'react'
import CalendarCompon from '../components/CalendarCompon'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div>
       <div className="m-4 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-[#1e293b] text-black dark:text-white rounded-3xl shadow-lg transition-all duration-300">
    
     <Header category={'App'} title={"Calendar"}/>
      <CalendarCompon/>
       </div>
        
    </div>
  )
}

export default Calendar