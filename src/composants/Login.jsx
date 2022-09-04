import '../styles/accueilStyle.css'
import music from '../assets/music.png'
import React from 'react';
import { useState } from "react";
import accessUrl from '../composants/spotifyThings'
import GoogleLogin from 'react-google-login';

const Login = () => {
    // =======Google=========
    const clienId = '1045931220842-nu223q4a2lg6sqno0aamg3riesl6jjtu.apps.googleusercontent.com'
    const [loginData, setLoginData] = useState(
        localStorage.getItem('logindata')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )
    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', {
            method: POST,
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    };
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    }
    // =======Google=========
    return (
        <section className="container">
            <div>
                <img src={music} alt="" />
                <h2>Welcome to My Ndule</h2>
            </div>
            <div className='inputGroup'>
                <label htmlFor="email" className='label'>Email</label>
                <div><input placeholder='Votre mail' type="text" className='input' /></div>
            </div>
            <div className='inputGroup'>
                <label htmlFor="email" className='label'>Mot de Passe</label>
                <div><input placeholder='Votre mot de passe' type="text" className='input' /></div>
            </div>
            <div className='buttonContain'>
                <a href={accessUrl} className='button'>Log in</a>
            </div>
            <div>
                {
                    loginData ? (
                        <div>
                            <h3>You logged in as {loginData.email}</h3>
                            <button onClick={handleLogout}>Log out</button>
                        </div>
                    )
                        : (
                            <GoogleLogin
                                clientId={clienId}
                                buttonText="Log in with Google"
                                onSuccess={handleLogin}
                                cookiePolicy={'single_host_origin'}>
                            </GoogleLogin>
                        )
                }

            </div>

        </section>
    );
}

export default Login;