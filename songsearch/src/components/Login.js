import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

export function Login(props) {
    const currentUser = props.currentUser;
    const loginFunction = props.loginCallback;
    const setLoginStatus = props.setLoginStatus;

    // authenticator
    const auth = getAuth();

    const configObj = {
        loginOptions: [
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                requiredDisplayName: true,
            }
        ],
        signInFlow: 'popup',
        callbacks: {
            loginSuccessWithAuthResults: () => false
        },
        credentialHelper: 'none'
    }

    return (
        <div className='container-login'>
            <div className="login">
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            </div>
        </div>
    )
}