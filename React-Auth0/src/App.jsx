import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import './index.css'


function App() {
  
 const {isAuthenticated, isLoading} = useAuth0();
 console.log(isAuthenticated)
  
  return (
    <>
    <h1>App Auth0</h1>   
    <LoginButton />
    <LogoutButton />
    <Profile />
    
    </>
  )
}

export default App
