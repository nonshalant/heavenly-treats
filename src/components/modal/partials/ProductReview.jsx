import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductReview = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [productReview, setProductReview] = useState({fullName: "", customerRating: "", customerReview: ""})
  const {productName} = useParams()

  const updateRange = (e) => {
    const rating = e.target.value;
    setRangeValue(rating);
    setProductReview({ ...productReview, customerRating: rating,  productName: productName });
  }

  const handleProductReview = (e) => {
    const { name, value } = e.target
    setProductReview({...productReview, [name]: value})
  }

  const onsubmit = async(e) => {
    e.preventDefault()

    const body = JSON.stringify(productReview)

    await axios({
      method: 'post',
      data: body,
      url: 'http://localhost:4000/reviews',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
      setProductReview({
        fullName: '',
        customerRating: '',
        customerReview: '',
      })
    })
  }

  return (
    <div className='product-review'>
      <h2>Leave a review</h2>
      <div className="review-inputs">
        <form onSubmit={onsubmit}>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Full Name' value={productReview.fullName} onChange={handleProductReview} name="fullName" id="name" required />
          </div>

          <div className="field">
            <label htmlFor="range">Rating: {rangeValue} out of 5</label>
            <input type="range" onChange={updateRange} value={productReview.customerRating} name="custumerRating" min="0" max="5" id="range" required />
          </div>

          <div className="field">
            <label htmlFor="reviewerReview">Review</label>
            <textarea type="text" placeholder='Write your review' value={productReview.customerReview} onChange={handleProductReview} name="customerReview" id="reviewerReview" required />
          </div>

          <button className='button'>Submit Review</button>
        </form>
      </div>
    </div>
  )
}

export default ProductReview