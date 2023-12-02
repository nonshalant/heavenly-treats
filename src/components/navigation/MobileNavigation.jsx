import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link } from 'react-router-dom'

const MobileNavigation = () => {

  const handleClick = () => {

  }
  
  return (
    <div className='mobile-navigation'>
        <div className="mobile-nav-container">
            <div className="logo-container">
                <Link to='/'>
                    <img src="https://res.cloudinary.com/dyzydm9nl/image/upload/v1680629775/Heavenlyyy%20Treats/360_F_431266293_QMRCezi6gqseApS0o1PLwe5jI3SLBG0S-removebg-preview_t41ouk.png" alt="ADD A ALT TAG" />
                </Link>
            </div>
            <RxHamburgerMenu onClick={handleClick} size={40}/>
        </div>
    </div>
  )
}

export default MobileNavigation