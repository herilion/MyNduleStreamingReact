import { useState } from 'react'
import Accueil from './composants/Accueil'
import Login from './composants/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoginActive, setIsLoginActive] = useState(false)

  return (
    <div className="App">
      {!isLoginActive && <Accueil isLoginActive={isLoginActive} setIsLoginActive={setIsLoginActive} />}
      {isLoginActive && <Login isLoginActive={isLoginActive} setIsLoginActive={setIsLoginActive} />}
    </div>
  )
}

export default App
