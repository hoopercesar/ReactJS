import React, { useContext, useState } from 'react';
import { useContexto } from '../contextos/UsuariosContext';
import axios from 'axios';


const CreateUsers = () => {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        username: '',
        email: '',
        roles: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });
    };

    const handleGuardarUsuario = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8081/createUser", {
            username: nuevoUsuario.username,
            email: nuevoUsuario.email,
            roles: [nuevoUsuario.roles],
            password: nuevoUsuario.password
        },
        {
            headers: {
                Authorization: `Bearer ${datosUsuario.token}`
            }
        }
        )       
    };

    return (
        <div>            
            
                <form onSubmit={handleGuardarUsuario}>
                    <div>
                        <label htmlFor="username">Ingresa nombre del nuevo usuario</label>
                        <input
                            type="text"
                            id='username'
                            name='username'
                            value={nuevoUsuario.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Ingresa correo del nuevo usuario</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={nuevoUsuario.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="roles">Selecciona el Rol del Nuevo Usuario</label>
                        <select id="roles" name='roles' value={nuevoUsuario.role} onChange={handleInputChange}>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                            <option value="INVITED">INVITED</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password">Ingresa password del nuevo usuario</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            value={nuevoUsuario.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Crear Usuario</button>
                </form>

        </div>
    );
};

export default CreateUsers;
