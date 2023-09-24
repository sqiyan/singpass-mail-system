import React, {useEffect, useState} from 'react'
// import { StepsProvider, Steps, useSteps } from "react-step-builder";
import LoginPage from "./LoginPage";
import LoginSuccess from './LoginSuccess';
import CompletionPage from './CompletionPage';
import QRPage from './QRPage';
import FaceVerifyPage from './FaceVerifyPage';
import LoginFail from './LoginFail';
import StyledAppBar from '../components/StyledAppBar';

const LoginSequence = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const updateStep = (newState) => {
        setCurrentStep(newState);
    }

    // add a state to store error codes to pass to LoginFail component

    // Render different step components based on the currentStep state
    let stepComponent;

    switch (currentStep) {
        case 1:
            // CASE 1: Select Login Mode
            stepComponent = (
                <LoginPage next={updateStep}/>
            );
            break;
        case 2:
            // CASE 2: User selected SingPass QR
            stepComponent= (
                <QRPage next={updateStep}/>
            );
            break;
        case 3:
            // CASE 3: User selected Face Verification
            stepComponent= (
                <FaceVerifyPage next={updateStep}/>
            );
            break;
        case 4:
            // CASE 4: User successfully verified
            stepComponent= (
                <LoginSuccess next={updateStep}/>
            );
            break;
        case 5: 
            // CASE 5: User collected mail, completed login sequence, back to home
            stepComponent= (
                <CompletionPage/>
            )
            break;
        case 6: 
            // CASE 6: User fails verification
            stepComponent= (
                <LoginFail next={updateStep}/>
            )
            break;
        default:
            break;
    }

    return(
        <div>
            <StyledAppBar/>
            <div>
                {stepComponent}
            </div>
        </div>
    );
}

export default LoginSequence