import { useState } from 'react'
import {useAuth0} from '@auth0/auth0-react'

import './App.css'

function App() {
  
  const {loginWithRedirect} = useAuth0()
  return (
    <>
    <h1>App Auth0</h1>
    <button onClick={() => loginWithRedirect()}>Ingresar</button>
    </>
  )
}

export default App
