import React, { useEffect } from 'react'
import './modal.css'
import Cart from '../cart/Cart'
import ModalProduct from './partials/ModalProduct'
import ProductReview from './partials/ProductReview'

const Modal = (props) => {
    const {addToCart, displayCart, cart, setDisplayCart, removeFromCart, itemQuantity} = props;

    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  return (
    <div className='modal-container'>
        <ModalProduct addToCart={addToCart}/>
        {
            displayCart && <Cart addToCart={addToCart} removeFromCart={removeFromCart} setDisplayCart={setDisplayCart} cart={cart} displayCart={displayCart} />
        }
        <ProductReview />
    </div>
  )
}

export default Modal