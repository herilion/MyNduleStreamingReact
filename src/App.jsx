import React, { useEffect, useState } from 'react'
import Login from './composants/Login'
import TableauMusic from './composants/tableauMusic';
// import './App.css'
import { getTokenFromResponse } from './composants/spotifyThings';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayervalue } from './DataLayer';

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayervalue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      //get playList
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1DWXJfnUiYjUKT').then((response) => {
        dispatch({
          type: 'SET_NEW_MUSIC_FRIDAY',
          new_music_friday: response,
        });
      });
    }
  }, []);
  console.log('utilisateur 🎅', user);
  console.log('token 🎁', token);
  return (
    <div className="App">
      {
        token ? (
          <TableauMusic spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  )
}

export default App
