import React, {useEffect, useState} from 'react'
import './style.scss'

const LoginSuccess = ({next}) => {

    //from SingPass verify, we should be able to identify locker belonging to user
    var locker = "#04-09"

    return(
        <div className='Login__messageContainer'>
            <p className='Login__messageHeader'>Login Success!</p>
            <p className='Login__messageHeader' style={{marginTop: 40}}>Please retrieve your mail from locker <a className='Login__importantInfo'>{locker}</a></p>
            <button className='Login__actionButton' style={{marginTop: 80}} onClick={() => next(5)}>I have collected my mail</button>
        </div>
    )
}

export default LoginSuccess