import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import Cart from '../cart/Cart';

const Navigation = ({setDisplayCart, cart}) => {
    const [showCart, setShowCart] = useState(false);

    // const renderCart = () =>{
    //     setShowCart(!showCart)
    // };

  return (
    <div className='desktop-navigation'>
        <header>
            <nav className='nav-bar'>
                <ul className='nav-links'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                    <Link to='/who-are-we'><li>Who We Are</li></Link>
                </ul>
                <div className="logo-container">
                    <Link to='/'> <img src="https://res.cloudinary.com/dyzydm9nl/image/upload/v1680629775/Heavenlyyy%20Treats/360_F_431266293_QMRCezi6gqseApS0o1PLwe5jI3SLBG0S-removebg-preview_t41ouk.png" alt="ADD A ALT TAG" /></Link>
                </div>
                <ul className='nav-links'>
                    <Link to='/feedback'><li>Feedback</li></Link>
                    <Link to='/get-in-touch'><li>Edi-cation</li></Link>
                    <p onClick={setDisplayCart}><li>Cart</li></p>
                </ul>
            </nav>
        </header>
        {showCart && <Cart  setDisplayCart={setDisplayCart} cart={cart} />}
    </div>
  )
}

export default Navigation