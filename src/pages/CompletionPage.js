import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'

const CompletionPage = () => {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/');
    }

    return(
        <div className='Login__messageContainer'>
            <p className='Login__messageHeader'>Thank you for using the Smart Mail Interface</p>
            <p className='Login__messageHeader' style={{marginTop: 40}}>Have a nice day!</p>
            <button className='Login__actionButton' style={{marginTop: 80}} onClick={returnToHome}>Return to Home</button>
        </div>
    )
}

export default CompletionPage