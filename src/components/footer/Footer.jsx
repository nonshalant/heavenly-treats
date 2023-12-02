import React, { useState } from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [subscriber, setSubscriber] = useState('');
    const [subscriberResponse, setSubscriberResponse] = useState('');

    const handleChange = (e) => {
        setSubscriber(e.target.value)
    }

    const onsubmit = async(e) => {
        e.preventDefault()
        const body = JSON.stringify({subscribers: subscriber});

        await axios({
            method: 'post',
            url: 'http://localhost:4000/subscribers',
            data: body,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp=>{
            setSubscriberResponse(resp.data)
            setSubscriber('')
        })
    }

  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="section addingGap">
                <h2>Subscribe to our newsletter, and be the first to know about all of our exciting updates, promotions, and events. </h2>
                <form onSubmit={onsubmit} className='footer-form'>
                    <input onChange={handleChange} value={subscriber} type="email" name="email" id="email" placeholder='Enter your email'/>
                    <button className='button'>Subscribe</button>
                </form>
                {subscriberResponse}
            </div>
            <div className="section title">
                <h2>Check Out</h2>
                <ul className='footer-links'>
                    <Link to='/'>Home</Link>
                    *
                    <Link to='/shop'>Shop</Link>
                    *
                    <Link to='who-are-we '>Who We Are</Link>
                    *
                    <Link to='/feedback'>Feedback</Link>
                    *
                    <Link to='/edi-fication'>Edi-cation</Link>
                    *
                    <Link to='/get-in-touch'>Get In Touch</Link>
                    *
                    <Link to='/privacy-policy'>Privacy-Policy</Link>
                </ul>
            </div>
            <div className="section">
                <h2>Follow Us</h2>
                <div className="social-links">
                    <AiFillInstagram size={40}/>
                    <FaTiktok size={40}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer