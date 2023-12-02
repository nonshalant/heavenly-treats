import React, { useEffect, useState } from 'react'
import Products from './Products'
import Filters from './Filters';

const MobileShop = () => {
    const [addFilters, setAddFilters] = useState('');
    
    useEffect(()=>{
        setAddFilters(<Filters />)
    },[])

  return (
    <div className='mobile-shop'>
        <Products addFilters={addFilters}/>
    </div>
  )
}

export default MobileShop