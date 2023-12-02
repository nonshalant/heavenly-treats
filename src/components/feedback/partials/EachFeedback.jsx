import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'

const EachFeedback = ({reviews, setCategory}) => {
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-top">
          <p className='reviews-redirect' onClick={()=>setCategory([])}><BiLeftArrowAlt/>Back to categories</p>
          <h1>{reviews.length} Candy Reviews</h1>
        </div>
        {
            reviews.map(review => 
                <div className="review" key={review.id}>
                  <div className="review-top">
                    <div className="review-image">
                      <img src={review.image} alt="" />
                    </div>
                    <div className="reviewer-details">
                      <h2>{review.reviewer}</h2>
                      <p>Rating:</p>
                      <input type="range" id="rating" name="rating" min="1" max="5" step="1" value={review.rating}></input>
                    </div>
                  </div>
                  <div className="review-bottom">
                    <p>{review.review}</p>
                  </div>
                </div>
            )
        }
      </div>
    </>
  )
}

export default EachFeedback