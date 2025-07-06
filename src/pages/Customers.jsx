import React from 'react'
import CustomerComponent from '../components/CustomerCompo'
import { Header } from '../components'

const Customers = () => {
  return (
    <div>
      <Header category="Page" title="Customers" />
      <CustomerComponent/>
    </div>
  )
}

export default Customers