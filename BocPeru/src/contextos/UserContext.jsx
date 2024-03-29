import React, { useContext, createContext} from 'react';

const ContextoUsuarios = React.createContext([]);


export const ProveedorContextoUsuarios = ({children}) => {

    // éstos usuario podrían ser recuperados desde un servidor
    const usuarios = [
        { name: "pepe", password: "1234" },
        { name: "maria", password: "1234" },
        { name: "juan", password: "1234" },
        { name: "laura", password: "1234" },
        { name: "carlos", password: "1234" },
        { name: "ana", password: "1234" },
        { name: "david", password: "1234" },
        { name: "luisa", password: "1234" },
        { name: "pedro", password: "1234" },
        { name: "rosa", password: "1234" }
    ];

    // verifica si nombreUsuario está en la lista de usuarios
    // y si password ingresado coincide
    const verificaUsuario = (nombreUsuario, passwordUsuario) => {
        return usuarios.some(usuario => {
            return nombreUsuario === usuario.name && passwordUsuario === usuario.password;
        });
    }
      
  return (
    <ContextoUsuarios.Provider value={{usuarios, verificaUsuario}} >
        {children}
    </ContextoUsuarios.Provider>
  )
}

export const useContextoUsuarios = () => useContext(ContextoUsuarios);