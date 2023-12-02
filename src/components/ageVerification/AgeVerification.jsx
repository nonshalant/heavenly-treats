import React, { useEffect, useState } from 'react'
import './ageVerification.css'

const AgeVerification = ({setVerified}) => {
    const [DOB, setDOB] = useState('')
    const [alertMessage, setAlertMessage] = useState('')

    const onDOBChange = (e) =>{ 
        setDOB(e.target.value)
    }

    const alertUser = (message) => {
        setAlertMessage(message)
        setTimeout(()=>{
            setAlertMessage(false)
        },3000)
    }

    const verifyAge = async (e) =>{
        e.preventDefault()
        const currentYear = new Date().getFullYear();
        const age = currentYear - DOB;
        setDOB('')
        
        if(isNaN(DOB) || DOB.length != 4 || DOB < 1945 || age <= 21 ) {
            alertUser('Please enter a valid age')
        }else{
            setVerified(true)
        }
    }

    useEffect(()=>{
        setVerified(true)
    },[])

  return (
    <div className='verification'>
        <div className="verification-container">
            <div className="inner">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dyzydm9nl/image/upload/v1680629775/Heavenlyyy%20Treats/360_F_431266293_QMRCezi6gqseApS0o1PLwe5jI3SLBG0S-removebg-preview_t41ouk.png" alt="ADD A ALT TAG" />
                </div>
                <div className="verification-question">
                    <h1>Hello there,</h1>
                    <h1>Care to show us some ID?</h1>
                </div>
                <form onSubmit={verifyAge} className='verification-form'>
                    <input required type="text" name="DOB" id="DOB" placeholder='YYYY' onChange={onDOBChange} value={DOB} />
                    {alertMessage}
                    <button className='button'>Verify</button>
                </form>
                <p>By entering this site you are agreeing to the Terms of Use and Privacy Policy.</p>
            </div>
            <div className="verification-image">
                <img src="https://herbiesheadshop.com/resized/original/common/38/does-hotboxing-get-you-higher1__l7vBbJ9bM7Eppa2X.jpg" alt="a group of people smoking and enjoying life together" />
            </div>
        </div>
    </div>
  )
}

export default AgeVerification