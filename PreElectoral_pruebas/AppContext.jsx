// AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Aquí se crea el contexto mediante createContext(). 
// AppContext es ahora un objeto que tiene dos propiedades: Provider y Consumer.
const AppContext = createContext();

// Aquí, AppProvider es un componente funcional que utiliza el Provider de 
// AppContext. Este componente envuelve a sus hijos (pasados a través de children) y proporciona un valor al contexto.
export const AppProvider = ({ children }) => {

    // formData es un estado que contiene los datos del formulario (teléfono, correo, ciudad).
    //updateFormData es una función que actualiza el estado formData con nuevos valores.
  const [formData, setFormData] = useState({ telefono: '', correo: '', ciudad:'' });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <AppContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
