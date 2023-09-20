import React, { useState } from "react";

const Contexto = React.createContext();

const ProveedorContexto = ({ children }) => {
  return <Contexto.Provider>{children} </Contexto.Provider>;
};

export { Contexto, ProveedorContexto };
