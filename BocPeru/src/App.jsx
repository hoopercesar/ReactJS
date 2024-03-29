import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import RoutesApp from './routes/RoutesApp'
import Login from './views/Login'
import { ProveedorContextoUsuarios } from './contextos/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>Bocados del Perú</h3>
    
    <BrowserRouter>
      
      <ProveedorContextoUsuarios>
        <RoutesApp />
      </ProveedorContextoUsuarios>
    </BrowserRouter>
    </>
  )
}

export default App
