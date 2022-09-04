import React, { useEffect, useState } from 'react'
import Login from './composants/Login'
import TableauMusic from './composants/tableauMusic';
import './App.css'
import { getTokenFromResponse } from './composants/spotifyThings';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log('user', user);
      })
    }


  }, []);
  return (
    <div className="App">
      {
        token ? (
          <TableauMusic />
        ) : (
          <Login />
        )
      }

    </div>
  )
}

export default App
