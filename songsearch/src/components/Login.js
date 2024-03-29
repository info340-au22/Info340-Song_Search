import React from 'react';
import { EmailAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './firebaseui-styling.global.css';


export function Login(props) {
    const auth = getAuth();

    const firebaseUIConfig = {
        signInOptions: [
            { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
            GoogleAuthProvider.PROVIDER_ID,
        ],
        signInFlow: 'popup',
        credentialHelper: 'none',
        callbacks: {
            signInSuccessWithAuthResult: () => {
                return false;
            }
        }
    }


    return (
        <div className='container-login loginDiv'>
            <div className="firebaseui-container">
                <img className="loginPic" src="/img/musicHome.png" alt="An eigth note" />
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            </div>
        </div>
    )
}