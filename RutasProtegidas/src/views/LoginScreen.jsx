import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {

    const navigate = useNavigate();
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = {
        email:"pepe@correo.cl",
        password:"1234"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email === email && user.password === password) {
            console.log("Sesión Iniciada");
            localStorage.setItem('user', JSON.stringify(user.email));
            sessionStorage.setItem('user', JSON.stringify(password));
            navigate('/', {replace:true})
        } else {
            alert("Datos Incorrectos")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                
                />
            </div>
            <div>
                <label >Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button>Enviar</button>
            
            
        </form>
    </div>
  )
}

export default LoginScreen