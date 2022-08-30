import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Usuario from "./componente/Usuario";

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hola, Mundo</h1>
  </React.StrictMode>
);

otra forma de poner una función dentro de un botón
<button onClick={() => alert("Cerramos Sesion")}>
            Cerrar Sesion
          </button>
*/

const App = () => {
  // useState es una función que cambia el estado global de la variable.
  // en este caso, la variable es sesion, con valor por defecto true.
  // cuando cambiemos esta variable a false, la función useState
  // la reinicia a nivel global, reiniciando a su vez todas las funciones
  // en donde la variable sesion está involucrada.
  const [sesion, cambiaEstadoSesion] = useState(true);

  return (
    <>
      {sesion === true ? (
        <div>
          <Usuario />
          <button onClick={() => cambiaEstadoSesion(false)}>
            Cerrar Sesion
          </button>
        </div>
      ) : (
        <div>
          <p>No has Iniciado Sesión</p>
          <button onClick={() => cambiaEstadoSesion(true)}>
            Iniciar Sesion
          </button>
        </div>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
/*
const verificarSesion = (sesion) => {
  if (sesion === true) {
    return JSX;
  } else {
    return <h1>Tem que inciar sessão </h1>;
  }
};
*/

/*
  const cerrarSesion = () => {
    sesion = false;
    console.log(sesion);
  }; */
