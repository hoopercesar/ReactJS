import React from "react";

// impotar react: imr + enter
// crear componente funcional : sfc + tab

const Frutas = (props) => {
  const backgroundColor = props.cor;
  const frutas = ["manzana", "manga", "peras", "abacaxi", "banana"];
  return (
    <>
      <p>Tus frutas favoritas. Difrútalas</p>
      <ul>
        {frutas.map((fruta, indice) => (
          <li key={indice} style={{ backgroundColor: backgroundColor }}>
            {" "}
            {fruta}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Frutas;
