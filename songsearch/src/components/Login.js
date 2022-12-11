import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const firebaseUIConfig = {
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
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

export function Login(Props) {
    const auth = getAuth();

    return (
        <main className='container-login'>
            <div className='container-login'>
            {/*
            </div><!-- logo
                <div clas="row-logo">
                    <div class="colm-logo">
                        <img src="img/musicIcon.png" alt="Logo">
                    </div>
                </div>
            -->
            */}

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
                    */}
                    <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
                </form>
            </div>
        </div>
        </main>
    )
}