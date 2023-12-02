import React from 'react'
import './cart.css'
import { Image } from 'cloudinary-react';
import {GrClose} from 'react-icons/gr'
import CartSummary from './partials/CartSummary';
import CartEmpty from './partials/CartEmpty';

const Cart = (props) => {
  const {displayCart, cart, setDisplayCart, removeFromCart,} = props;
  
  return (
    <div className={`cart-container-${displayCart ? 'after' : 'before'}`}>
      {
        cart.length !== 0 ?
          <div className="cart-container-top">
            <div className="top-cart">
              <h1>Cart</h1>
              <GrClose className='close-cart' onClick={()=>setDisplayCart(false)} size={25} />
            </div>
          {
            cart.map(item => 
              <div key={item.id} className="shopping-cart">
                <div className="column image-container">
                  <Image cloudName={item.cloudName} publicId={item.image}/>
                </div>
                <div className="column">
                  {item.name}
                  <div className="quantity">
                    <span onClick={()=>removeFromCart(item, 'minus')} className='minus'>-</span>
                    <p>{item.quantity}</p> 
                    <span  className='plus'>+</span>
                  </div>
                </div>
                <div className="column price-container">
                  <GrClose/>
                  ${item.quantity * item.price}
                </div>
              </div>
            )
          }
        </div> : <CartEmpty setDisplayCart={setDisplayCart} />

      }
      <div className="cart-container-bottom">
        <CartSummary cart={cart}/>
      </div>
    </div>
  )
}
export default Cart