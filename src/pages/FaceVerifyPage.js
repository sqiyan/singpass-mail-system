import React, {useEffect, useState} from 'react'
import Webcam from 'react-webcam';
import './style.scss'


const FaceVerifyPage = ({next}) => {

    // on this page, webcam feed is shown to verify user biometric data, system awaits biometric verification from SingPass server
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
            <p className='Login__instruction' style={{marginBottom: 0, marginTop: 20}}>Face Verification</p>
            <p className='Login__secondaryInstruction'>Please position your face within the camera view below</p>
            <Webcam
                audio={false}
                height={400} // Set the desired height
                // width={1280} // Set the desired width
            />
            <div>
                <button className='Login__actionButton' onClick={() => next(4)}>Scan Face</button>
            </div>
        </div>
    )
}

export default FaceVerifyPage