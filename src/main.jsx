import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import CryptoApi from './api/CryptoApi.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoApi>
      <App />
    </CryptoApi>
  </React.StrictMode>,
)
