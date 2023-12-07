import { useState } from 'react'
import ValidaRut from './ValidaRut'
import Candidatos from './Candidatos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Hola, mundo</p>
    <ValidaRut />
    <Candidatos />

   
    </>
  )
}

export default App
