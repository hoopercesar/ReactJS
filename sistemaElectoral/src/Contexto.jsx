// Contexto.js
import React, { createContext, useState, useContext } from 'react';

const Contexto = createContext();

export const ProveedorContexto = ({ children }) => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    correo: '',
    rut: '',
    region: '',
    comuna: '',
    candidato: '',
    opcionesSeleccionadas: [],
  });

  const actualizarDatos = (nombreCampo, valor) => {
    setDatosFormulario((prevDatos) => ({
      ...prevDatos,
      [nombreCampo]: valor,
    }));
  };

  return (
    <Contexto.Provider value={{ datosFormulario, actualizarDatos }}>
      {children}
    </Contexto.Provider>
  );
};

export const  useContexto = () => useContext(Contexto);

