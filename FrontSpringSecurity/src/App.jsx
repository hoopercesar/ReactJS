import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from './components/Axios'
import Login from './components/Login'
import CreateUsers from './components/CreateUsers'
import { ProveedorContexto } from './contextos/UsuariosContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProveedorContexto>
    <div>
      <h3>
        Test Reactjs, Axios y SpringSecurity!
      </h3>
      <Login />
      <CreateUsers />
      
    </div>
    </ProveedorContexto>
  )
}

export default App
