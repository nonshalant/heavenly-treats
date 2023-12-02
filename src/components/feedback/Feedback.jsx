import React, { useEffect } from 'react'
import FeedbackCategory from './partials/FeedbackCategory'
import './feedback.css'

const Feedback = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  });

  return (
    <div className='feedback'>
        <FeedbackCategory />
    </div>
  )
}

export default Feedback