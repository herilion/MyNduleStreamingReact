import React, { useEffect, useState } from 'react'
import Login from './composants/Login'
import './App.css'
import { getTokenFromResponse } from './composants/spotifyThings'

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token)
    }


  }, []);
  return (
    <div className="App">
      {
        token ? (
          <h1>lionge</h1>
        ) : (
          <Login />
        )
      }

    </div>
  )
}

export default App
