import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DataLayer } from './DataLayer'
import reducer, { initialState } from './reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataLayer initialState={initialState}
      reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
)
