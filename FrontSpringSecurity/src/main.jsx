import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProveedorContexto } from './contextos/UsuariosContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorContexto>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
    </ProveedorContexto>    
  </React.StrictMode>
)
