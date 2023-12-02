import React, { useEffect, useState } from 'react'
import Filters from './partials/Filters'
import Products from './partials/Products'
import './shop.css'
import MobileShop from './partials/MobileShop'

const Shop = ({renderMobile}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setfilterValue] = useState([])

  useEffect(()=>{
    window.scrollTo(0,0)
    
  },[])
  
  return (
    <div className='shop-container'>
      {
        renderMobile ? <MobileShop renderMobile={renderMobile}/> : 
        <>
          <Filters setfilterValue={setfilterValue} />
          <Products filterValue={filterValue} searchValue={searchValue} setSearchValue={setSearchValue} />
        </>
      }
    </div>
  )
}

export default Shop