// import { useState } from 'react'
// import Accueil from './composants/Accueil'
import Login from './composants/Login'
// import TableauMusic from './composants/tableauMusic'
import TableauMusic from './composants/tableauMusic'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [isLoginActive, setIsLoginActive] = useState(false)

  return (
    <div className="App">
      {/* {!isLoginActive && <Accueil isLoginActive={isLoginActive} setIsLoginActive={setIsLoginActive} />}
      {isLoginActive && <Login isLoginActive={isLoginActive} setIsLoginActive={setIsLoginActive} />} */}
      <Login />
      {/* <TableauMusic /> */}
    </div>
  )
}

export default App
