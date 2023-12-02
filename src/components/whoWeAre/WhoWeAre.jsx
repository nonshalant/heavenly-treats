import React, { useEffect } from 'react'
import Landing from './partials/Landing'
import './whoWeAre.css'
import OurStory from './partials/OurStory'
import OurTeam from './partials/OurTeam'

const WhoWeAre = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  });

  return (
    <div className='who-we-are'>
        <Landing/>
        <OurStory />
        <OurTeam />
    </div>
  )
}

export default WhoWeAre