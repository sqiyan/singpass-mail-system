import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'

const LoginFail = ({next, error_code}) => {

    // error_code = 1 --> valid Singpass user, user not found within this location
    // error_code = 2 --> request timed out
    // error_code = 3 --> face verification failed

    var error_code = 1;

    // assume SingPass API can return correct location of user's designated smart mail locker
    var user_location = "Blk 22 Haig Rd"

    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/');
    }

    return(
        <div className='Login__messageContainer'>
            <p className='Login__messageHeader'>Login Failed</p>
            {error_code === 1 ? (
                <div>
                    <p className='Login__messageHeader'>You are not assigned to access the Smart Mail Locker at this location</p>
                    <p className='Login__messageHeader' style={{marginTop: 40}}>Your designated smart mail locker is <a className='Login__importantInfo'>{user_location}</a></p>
                    <button className='Login__actionButton' style={{marginTop: 80}} onClick={returnToHome}>Okay</button>
                </div>
            ) : (error_code === 2 ? (
                <div>
                    <h2>Verification using SingPass has failed.</h2>
                    <h2>The request might have taken too long and timed out. Please try again.</h2>
                </div>
            ) : (
                <div>
                    <h2>Face verification failed.</h2>
                    <h2>Please make sure you are not wearing a mask or sunglasses.</h2>
                </div>
            )
            )
            }
            {error_code !== 1 ? (
                <div>
                    <button onClick={next(1)}>Try Again</button>
                    <button onClick={returnToHome}>Exit</button>
                </div>
            )
            : null
            }
        </div>
    )
}

export default LoginFail