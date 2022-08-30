import { useState } from 'react'
import Accueil from './composants/Accueil'
import Login from './composants/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Accueil />
      <Login />
    </div>
  )
}

export default App
