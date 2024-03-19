import React, {createContext, useState, useContext} from 'react';

// crearmos el contexto
const Contexto = createContext();

// crear proveedor de contexto
export const ProveedorContexto = ({children}) => {
    const [datosUsuario, setDatosUsuario] = useState({
        username: '',
        role : '',
        token: ''
    });

    const actualizarDatosUsuario = (nombreCampo, valor) => {
        setDatosUsuario((prevDatos) => ({
          ...prevDatos,
          [nombreCampo]: valor,
        }));
      };

    return (
        <Contexto.Provider value={{datosUsuario, actualizarDatosUsuario}} >
            {children}
        </Contexto.Provider>
    );
};
export const useContexto = () => useContext(Contexto);