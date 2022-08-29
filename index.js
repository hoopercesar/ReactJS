import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React from "react";
import ReactDOM from "react-dom";

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hola, Mundo</h1>
  </React.StrictMode>
);
*/

const nombre = "César";
const color = "blue";
const sesion = true;
const pais = undefined;
const amigos = ["fernanda", "carlos", "camila", "fresia"];
const frutas = ["pera", "manzana", "sandía", "durazno"];

const JSX = (
  <>
    {sesion === true ? (
      <div>
        <h1 className="titulo" style={{ color: color }}>
          Olá, Rio de Janeiro.
        </h1>
        <p>{nombre}, Tudo bem com você?</p>

        {pais && <p>Tu eres de {pais} </p>}
        <ul>
          {amigos.map((amigo, index) => {
            return <li key={index}>{amigo} </li>;
          })}

          {frutas.map((fruta, indice) => (
            <li key={indice}>{fruta} </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No has Iniciado Sesión</p>
    )}
  </>
);

/*
const verificarSesion = (sesion) => {
  if (sesion === true) {
    return JSX;
  } else {
    return <h1>Tem que inciar sessão </h1>;
  }
};
*/
ReactDOM.render(JSX, document.getElementById("root"));
