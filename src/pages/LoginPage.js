import React, {useEffect, useState} from 'react'
import './style.scss'

const LoginPage = ({next}) => {

    const handleQR = () => {
        // user clicks this button to sign in via QR code
    }

    const handleFace = () => {
        // user clicks this button to sign in via Face Verification
    }

    return(
        <div>
            <p className='Login__messageHeader'>Please select your preferred login method:</p>
            <div className='Login__buttonContainer'>
                <button className='Login__optionButton' onClick={() => next(2)}>
                    <img style={{ height: 40 }} src="/assets/singpass_logo_fullcolours.svg" alt="singpass_logo"/>
                    QR Code
                </button>
                <button className="Login__optionButton" onClick={() => next(3)}>
                    <img style={{ height: 100 }} src="/assets/fv-stacked-neutral.svg" alt="face_verification_button"/>
                    <p className='Login__consentText'>
                    By clicking on “Face verification with Singpass”, you allow us to capture your photo for the purpose of verifying that it matches with the government's biometrics database based on the Singpass Terms of Use
                    </p>
                </button>
            </div>
        </div>
    )
}

export default LoginPage