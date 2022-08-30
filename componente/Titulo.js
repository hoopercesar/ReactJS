import React from "react";

// impotar react: imr + enter
// crear componente funcional : sfc + tab

const TituloVerde = (props) => {
  const color = props.cor;
  return (
    <h1 className="titulo" style={{ color: color }}>
      Olá, Rio de Janeiro.
    </h1>
  );
};

const TituloOrange = (props) => {
  const color = props.cor;
  return (
    <h1 className="titulo" style={{ color: color }}>
      Olá, Rio de Janeiro.
    </h1>
  );
};

export { TituloVerde, TituloOrange };
