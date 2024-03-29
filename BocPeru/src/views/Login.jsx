import React from 'react'
import {useContextoUsuarios} from '../contextos/UserContext'

const Login = () => {

  const {usuarios, verificaUsuario} = useContextoUsuarios();

  const handleLogin = (ev) => {
    ev.preventDefault();
    const nombreUsuario = ev.target.nombreUsuario.value;
    const passwordUsuario = ev.target.passwordUsuario.value;
    
    if (verificaUsuario(nombreUsuario, passwordUsuario)) {
      console.log("Has ingresado");
      sessionStorage.setItem('nombreUsuario', JSON.stringify(nombreUsuario));
    } else {
      alert("Datos Incorrectos");
    }
    
  }


  return (   
    <>
    <h3>Ingresa tus datos para entrar al Sistema</h3>
    <form onSubmit={handleLogin}>
      <div>
        <input 
          type="text"
          name='nombreUsuario'
          placeholder='Nombre Usuario'           
          />
      </div>
      <div>
        <input 
        type="text"
        name='passwordUsuario'
        placeholder='Password usuario'
      />
      </div>
      <button>Enviar</button>
    </form>
      
    </>
  )
}

export default Login