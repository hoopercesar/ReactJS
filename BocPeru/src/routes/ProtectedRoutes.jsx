import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const usuario = JSON.parse(sessionStorage.getItem('nombreUsuario'));
    
  
    if (usuario) {
        return children;
    } else {
        return <Navigate to="/*" />
    }

}

export default ProtectedRoutes