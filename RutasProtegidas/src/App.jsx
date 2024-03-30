import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigateApp from "./componentes/NavigateApp"
import LoginScreen from "./views/LoginScreen"
import RoutesApp from "./routes/RoutesApp"
import ProtectedRoutes from "./routes/ProtectedRoutes"

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route 
          path='/*' 
          element={
            <ProtectedRoutes>
               <RoutesApp />
            </ProtectedRoutes>            
       } 
        />
        <Route path='/login' element={<LoginScreen />} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
