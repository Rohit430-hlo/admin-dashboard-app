import React from 'react'
import EmployeeComp from '../components/EmployeeComp'
import { Header } from '../components'

const Employees = () => {
  return (
    <div>
     <Header category={'Page'} title={'Employees'}/>
      <div className='mt-4'>
        <EmployeeComp/>
      </div>
    </div>
  )
}

export default Employees
