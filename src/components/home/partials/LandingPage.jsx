import axios from 'axios';
import { Image } from 'cloudinary-react'
import React, { useEffect, useState } from 'react'

const LandingPage = () => {
    const [subscriber, setSubscriber] = useState('');    
    const [subsciberResponse, setSubscriberResponse] = useState('');    

    const handleChange = (e) => {
        setSubscriber(e.target.value)
    };

    const onsubmit = async(e) => {
        e.preventDefault();
        setSubscriber('');
        const body = JSON.stringify({subscribers: subscriber});

        await axios({
            method: 'post',
            data: body,
            url: 'http://localhost:4000/subscribers',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp=> {
            setSubscriberResponse(resp.data)
        })
    };

    useEffect(()=>{
        setTimeout(()=>{
            setSubscriberResponse('')
        }, 6500)
    },[subsciberResponse])

  return (
    <div className='landing-page-contaier'>
        <div className="image-container">
            <Image cloudName='dyzydm9nl' publicId='https://res.cloudinary.com/dyzydm9nl/image/upload/v1680625542/Heavenlyyy%20Treats/photo-1629398777962-33db7538a357_m46eus.jpg'/>
        </div>
        <div className="description">
            <h1>SIGN UP AND SAVE WITH UNBEATABLE DEALS</h1>
            <p>Deals and Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dignissimos consequuntur deserunt dolorem sunt saepe itaque sed sit eius ea, nostrum temporibus voluptas odio doloremque eos explicabo sapiente necessitatibus nobis?</p>
            <form onSubmit={onsubmit} className="sign-up-form">
                <input required type="email" onChange={handleChange} value={subscriber} name="email" id="email" placeholder='Enter your email'/>
                <button className='button'>Subscribe</button>
            </form>
            <span className='subscriber-response'>{subsciberResponse}</span>
        </div>
    </div>
  )
}

export default LandingPage