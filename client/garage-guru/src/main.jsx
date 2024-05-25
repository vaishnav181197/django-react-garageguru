import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CustomerContext from './ContextApi/CustomerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomerContext>
        <App />
      </CustomerContext>
    </BrowserRouter>
  </React.StrictMode>,
)
