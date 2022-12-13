import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
    signInOptions: [
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
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

{/*
<main className='container-login'>
            <div className='container-login'>
            <div className="login">
                <h1>Login to your SongSearch Account</h1>
                <form className="form-login">
                    {/*
                                        <input type="text" title="username" placeholder="username" />
                    <input type="password" title="username" placeholder="password" />
                    <label>
                        <input type="checkbox" name="remember" /> Remember Me
                    </label>
                    <button type="submit" className="btn-login">Login</button>

                    <button className="btn-new">Create new Account</button>
                    *}
                    <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
                </form>
            </div>
        </div>
        </main> */}