import React, { useState } from "react";

// crea contexto que es el estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState({
    alineado: "center",
    fuente: 20,
  });

  const aumentarFuente = () => setTema({ ...tema, fuente: tema.fuente + 1 });

  const disminuirFuente = () => setTema({ ...tema, fuente: tema.fuente - 1 });

  const alinearIzquierda = () => setTema({ ...tema, alineado: "left" });

  const alinearCentro = () => setTema({ ...tema, alineado: "center" });

  const alinearDerecha = () => setTema({ ...tema, alineado: "right" });

  return (
    <ContextoTema.Provider
      value={{
        tema,
        aumentarFuente,
        disminuirFuente,
        alinearIzquierda,
        alinearCentro,
        alinearDerecha,
      }}
    >
      {children}
    </ContextoTema.Provider>
  );
};

export { ContextoTema, ProveedorTema };
