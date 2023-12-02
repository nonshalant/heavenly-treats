import React, { useEffect, useState } from 'react'
import LandingPage from './partials/LandingPage'
import ProductCategories from './partials/ProductCategories'
import BestSellers from './partials/BestSellers'
import ProductFeelings from './partials/ProductFeelings'
import './home.css'

const Home = () => {
  const [renderProducts, setRenderProducts] = useState('category')

  const onClick = (e) => {
    if(e.target.innerText === 'Feelings'){
      setRenderProducts('Feelings')
    }else{
      setRenderProducts('Category')
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0)
    
  },[])

  return (
    <div className='home'> 
      <LandingPage />
      <div className="products-container">
        <h2>Browse by</h2>
        <div className="browse-options">
          <h3 onClick={onClick} className={renderProducts === 'Category' && 'addBoldFeelings'}>Category</h3>
          <span> | </span>
          <h3 onClick={onClick} className={renderProducts === 'Feelings' && 'addBoldCategory'}>Feelings</h3>
        </div>
        {
          renderProducts === 'Category' ? <ProductCategories /> : <ProductFeelings />
        }
      </div>
      <div className="best-sellers">
        <BestSellers />
      </div>
    </div>
  )
}

export default Home