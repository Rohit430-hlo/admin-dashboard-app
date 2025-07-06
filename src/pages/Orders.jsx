import React from 'react'
import OrderComponent from '../components/OrderComponent'
import Button from '../components/Button'
import { Header } from '../components'

const Orders = () => {
  return (
    <div> 
      <Header category={'Page'} title={'Orders'} />
      <OrderComponent/>
    </div>
  )
}

export default Orders