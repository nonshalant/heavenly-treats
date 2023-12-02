import React from 'react'
import { GrClose } from 'react-icons/gr'

const CartEmpty = ({setDisplayCart}) => {
  return (
    <div className='cart-empty'>
        <GrClose className='close-cart' onClick={()=>setDisplayCart(false)} size={25} />
        <h1>Your cart is empty. :</h1>
    </div>
  )
}

export default CartEmpty