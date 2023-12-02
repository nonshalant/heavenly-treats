import React, { useState } from 'react'
import mediaFile from '../../media/heavenlyyyTreatsMedia'
import axios from 'axios'
import EachFeedback from './EachFeedback'

const FeedbackCategory = () => {
  const [category, setCategory] = useState([])

  const renderReviews = async(type) => {
  
    await axios({
      method: 'get',
      url: `http://localhost:4000/feedback/${type}`,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp=>{
      const categoryArray = resp.data
      setCategory(categoryArray)
    })
  }

  return (
    <div className='feedback-category'>
      
      {
        category.length === 0 ? 
        <>
        <div className="c">
          <h1 className='categories-title'>Select a category</h1>
        </div>
        <div className="feedback-container">
          {
            mediaFile.reviews.map(item => 
              <div onClick={()=>renderReviews(item.type)} className="feedback-image" key={item.id}>
                <img src={item.image} alt="" />
              </div>
            )
          }
         </div>
        </>
        :
        <EachFeedback setCategory={setCategory} reviews={category}/> 
      }
    </div>
  )
}

export default FeedbackCategory