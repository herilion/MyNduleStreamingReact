import '../styles/accueilStyle.css'
import music from '../assets/music.png'
import React from 'react';
import { useEffect, useState } from "react";
import GoogleLogin from 'react-google-login';
const Login = () => {
    // =======Google=========
    const clienId = '1045931220842-nu223q4a2lg6sqno0aamg3riesl6jjtu.apps.googleusercontent.com'
    const [loginData, setLoginData] = useState(
        localStorage.getItem('logindata')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )
    // const handleFailure = (result) => {
    //     alert(result);
    // };
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
    // =======connect to spotify api start=========
    const clientId = '5b0895ca0b244db4820e70942b260ba6';
    const redirectUri = "http://localhost:5173/";
    const authEndPoint = "https://accounts.spotify.com/authorize";
    const responseType = "token";

    const [token, setToken] = useState("")
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    // =======connect to spotify api and=========
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
                <label htmlFor="email" className='label'>Email</label>
                <div><input placeholder='Votre mot de passe' type="text" className='input' /></div>
            </div>
            <div className='buttonContain'>
                {!token ?
                    <a href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`} className='button'>Log in</a>
                    : <button onClick={logout}>Logout</button>
                }

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
                                // onFailure={handleFailure}
                                cookiePolicy={'single_host_origin'}>

                            </GoogleLogin>
                        )
                }

            </div>

        </section>
    );
}

export default Login;