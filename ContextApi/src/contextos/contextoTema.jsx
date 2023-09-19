import React from "react";

// crea contexto que es el estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
  return (
    <ContextoTema.Provider value={{ nombre: "Cesar" }}>
      {children}
    </ContextoTema.Provider>
  );
};

export { ContextoTema, ProveedorTema };
