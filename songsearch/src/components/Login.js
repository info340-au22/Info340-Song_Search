import React from 'react';
import { EmailAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



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
        <div className='container-login'>
            <div className="login">
                <img className="loginPic" src="/img/musicHome.png" alt="2 eight notes colored neon red and blue" />
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            </div>
        </div>
    )
}