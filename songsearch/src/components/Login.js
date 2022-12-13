import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth'
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
    
    onAuthStateChanged(auth, (firebaseUser) => {
        if(firebaseUser){ 
            console.log('logged in', firebaseUser.displayName);
            currentUser(firebaseUser)
            setLoginStatus(true)
        }
        else {
            signOut(auth)
                .catch(err => console.log(err));
            console.log('logged out');
        }
    });

    return (
        <div className='container-login'>
            <div className="login">
                <img className="loginPic" src="/img/musicHome.png" alt="2 eight notes colored neon red and blue" />
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            </div>
        </div>
    )
}