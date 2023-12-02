import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'

const CartSummary = (props) => {
  const {cart} = props;
  let cartTotal = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    cartTotal += subtotal;
  });
  
  return (
    <div className='cart-summary'>
        <div className="row">
            <h2>Shipping</h2>
            <p>calculated at checkout</p>
        </div>
        <div className="row">
            <h2>Subtotal</h2>
            <p className='total'> <BsCurrencyDollar/> {cartTotal}</p>
        </div>
        <div className="checkout">
          <button className='button'>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default CartSummary