import React, {useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [respuesta, setRespuesta] = useState('');

    const handleLogin = async () => {
        
        try {
            const response = await axios.post("http://localhost:8081/login", {
                username: username,
                password: password,
            });
            if (response && response.data) {
                console.log(response.data);
                setRespuesta(response.data);
            } else {
                console.log("Error: No se recibieron datos en la respuesta");
            }
        } catch(error) {
            setError(error.response.data);
            console.log("Error al iniciar sesión", error);
        }
    }

  return (
    <div>
        <h3>Recibir Token del Backend</h3>
        
        <form onSubmit={(ev) => {
            ev.preventDefault();
            handleLogin();
            }}>
            <label htmlFor="username">Username</label>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Enviar</button>
        </form>
        {error && <div className="error">{error}</div>}
        <div>
            <p>{respuesta.Message}</p>  
            <p>{respuesta.token} </p>
            <p>{respuesta.Username} </p>
        </div>
    </div>
  )
}

export default Login;