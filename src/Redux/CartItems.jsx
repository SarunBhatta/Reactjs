import React from 'react'
import { useSelector } from 'react-redux'
import ChangeItems from './ChangeItems'
import Student from './Student'

const CartItems = () => {
    const data =useSelector(store=>store.cart)
  return (
    <>
    <h1 className='text-success'>
        The total number of items in the Cart is :{data.cartCount}
    </h1>
    <ChangeItems/>
    <Student/>
    </>
  )
}

export default CartItems
