import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutScreen from "./views/AboutScreen"
import ErrorScreen from "./views/ErrorScreen"
import HomeScreen from "./views/HomeScreen"
import NavigateApp from "./componentes/NavigateApp"
import LoginScreen from "./views/LoginScreen"

function App() {

  return (
    <BrowserRouter>
    <NavigateApp />
    <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='*' element={<ErrorScreen />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
