import React, { useReducer } from "react";
import Boton from "./../elementos/Boton";

// Accion: es un objeto que describe cómo queremos cambiar el estado
// dispatch recibe una acción
// {tipo: 'INCREMETAR'}

const contadorInicial = { contador: 0 };

const reducer = (estado, accion) => {
  switch (accion.tipo) {
    case "INCREMENTAR":
      return { contador: estado.contador + 1 };
    case "DISMINUIR":
      return { contador: estado.contador - 1 };
    case "REINICIAR":
      return { contador: 0 };
  }
};

const EjempoUseReducer = () => {
  const [estado, dispatch] = useReducer(reducer, contadorInicial);

  return (
    <div>
      <h1>Contador: {estado.contador} </h1>
      <Boton
        margenDerecho
        negro
        onClick={() => dispatch({ tipo: "INCREMETAR" })}
      >
        Incrementar
      </Boton>
      <Boton negro onClick={() => dispatch({ tipo: "DIRMINUIR" })}>
        Disminuir
      </Boton>
      <Boton negro onClick={() => dispatch({ tipo: "REINICIAR" })}>
        Reiniciar
      </Boton>
    </div>
  );
};

export default EjempoUseReducer;
