import React, {useEffect, useState} from 'react'
import './style.scss'

const WelcomePage = ({onClick}) => {

    const loginButton = () => {
        // when user clicks this button, they will enter the next page to select the login type
        // may need to set up router for page management
    }

    return(
        <div className='WelcomePage'>
            {/* <h2>Welcome to</h2> */}
            <img style={{ height: 160, paddingTop: 60 }} src="/assets/singpost_logo.png" alt="logo" />
            <p className='WelcomePage__title'>Smart Mail Interface</p>
            <button className='WelcomePage__button' onClick={onClick}>Login</button>
            <div className='WelcomePage__bottomline'>
                <p>Powered by</p>
                <img style={{ height: 20, paddingTop: 12, marginLeft: 8 }} src="/assets/singpass_logo_red.svg" alt="singpass_logo"/>
            </div>
        </div>
    )
}

export default WelcomePage