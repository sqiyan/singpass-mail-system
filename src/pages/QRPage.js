import React, {useEffect, useState} from 'react'
import './style.scss'
import QRCode from '../components/QRCode'

const QRPage = ({next}) => {

    // on this page, QR code is generated, system awaits user to scan QR code using SingPass app
    // state is changed to 4 upon successful verification
    // state is changed to 6 if verification fails

    const handleQR = () => {
        // user clicks this button to sign in via QR code
    }

    const handleFace = () => {
        // user clicks this button to sign in via Face Verification
    }

    return(
        <div>
            <p className='Login__instruction'>QR Code Login:</p>
            <div className='Login__instructionContainer'>
                <div>
                    <p className='Login__instruction'>1. Open the SingPass App on your mobile device</p>
                    <p className='Login__instruction'>2. Scan the QR Code on the right using your SingPass App</p>
                </div>
                <QRCode />
            </div>
            <button className='Login__actionButton' onClick={() => next(4)}>Next (for Demo purpose)</button>
        </div>
    )
}

export default QRPage