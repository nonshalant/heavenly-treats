import { Image } from 'cloudinary-react'
import React from 'react'
import { Link } from 'react-router-dom'
import mediaFile from '../../media/heavenlyyyTreatsMedia'
import Search from './Search'

const Products = ({addFilters, setSearchValue, filterValue, searchValue}) => {
  const media = mediaFile.shop;

  return (
    <div className='items-container'>
        <Search setSearchValue={setSearchValue}/>
        {addFilters}
        <div className="row">
          <div className="row-title">
            <h2>Discounts</h2>
            <h3>See All</h3>
          </div>
          <div className="row-item snaps-inline">
            {
              media.filter(x => {
                if(x == ''){
                  return x
                }else if(x.name.toLowerCase().includes(searchValue.toLowerCase()) || x.type.toLowerCase().includes(searchValue.toLowerCase())){
                  return x;
                }
              }).map(media => 
                <Link to={`/shop/${media.name}`} className="item-details" key={media.id}>
                  <div className="item-image-container">
                    <Image cloudName={media.cloudName} publicId={media.image}/>
                  </div>
                  <div className="item-description">
                    <h3>{media.type}</h3>
                    <h3>{media.name}</h3>
                    <h3>strength</h3>
                    <h3>{media.price}</h3>
                  </div>
                  <div className='addTo-cart-container'>
                    <p>View Product</p>
                  </div>
                </Link>
              )
            }
            <div className="item-details view-more">
              <h2>View All</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row-title">
            <h2>Candies</h2>
            <h3>See All</h3>
          </div>
          <div className="row-item snaps-inline">
            {
              media.filter(x => {
                if(x == ''){
                  return x
                }else if(x.name.toLowerCase().includes(searchValue.toLowerCase()) || x.type.toLowerCase().includes(searchValue.toLowerCase())){
                  return x;
                }
              }).map(media => 
                <Link to={`/shop/${media.name}`} className="item-details" key={media.id}>
                  <div className="item-image-container">
                    <Image cloudName={media.cloudName} publicId={media.image}/>
                  </div>
                  <div className="item-description">
                    <h3>{media.type}</h3>
                    <h3>name</h3>
                    <h3>strength</h3>
                    <h3>price</h3>
                  </div>
                  <div to={`/shop/${media.name}`} className='addTo-cart-container'>
                    <p>View Product</p>
                  </div>
                </Link>
              )
            }
            <div className="item-details view-more">
              <h2>View All</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row-title">
            <h2>Cereals</h2>
            <h3>See All</h3>
          </div>
          <div className="row-item snaps-inline">
            {
              media.filter(x => {
                if(x == ''){
                  return x
                }else if(x.name.toLowerCase().includes(searchValue.toLowerCase()) || x.type.toLowerCase().includes(searchValue.toLowerCase())){
                  return x;
                }
              }).map(media => 
                <Link to={`/shop/${media.name}`} className="item-details" key={media.id}>
                  <div className="item-image-container">
                    <Image cloudName={media.cloudName} publicId={media.image}/>
                  </div>
                  <div className="item-description">
                    <h3>{media.type}</h3>
                    <h3>name</h3>
                    <h3>strength</h3>
                    <h3>price</h3>
                  </div>
                  <div className='addTo-cart-container'>
                    <p>View Product</p>
                  </div>
                </Link>
              )
            }
            <div className="item-details view-more">
              <h2>View All</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="row-title">
            <h2>Chips</h2>
            <h3>See All</h3>
          </div>
          <div className="row-item snaps-inline">
            {
              media.filter(x => {
                if(x == ''){
                  return x
                }else if(x.name.toLowerCase().includes(searchValue.toLowerCase()) || x.type.toLowerCase().includes(searchValue.toLowerCase())){
                  return x;
                }
              }).map(media => 
                <Link to={`/shop/${media.name}`} className="item-details" key={media.id}>
                  <div className="item-image-container">
                    <Image cloudName={media.cloudName} publicId={media.image}/>
                  </div>
                  <div className="item-description">
                    <h3>{media.type}</h3>
                    <h3>{media.name}</h3>
                    <h3>strength</h3>
                    <h3>{media.price}</h3>
                  </div>
                  <div className='addTo-cart-container'>
                    <p>View Product</p>
                  </div>
                </Link>
              )
            }
            <div className="item-details view-more">
              <h2>View All</h2>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Products