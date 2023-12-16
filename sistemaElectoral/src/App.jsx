
import './App.css'
import { ProveedorContexto } from './Contexto';

import FormularioDatos from './FormularioDatos'



function App() {
  
  return (
    
    <ProveedorContexto>
      <p>Datos del elector</p>
      <FormularioDatos/> 
    </ProveedorContexto>
    
           
    
  )
}

export default App
