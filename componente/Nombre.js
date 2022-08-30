import React from "react";

// este es otra manera de acceder a las propiedades
// se llama destructurar
const Nombre = ({ nombre, edad }) => {
  // const nombre = "César";
  return (
    <>
      <p>{nombre}, Tudo bem com você?</p>
      <p>Tienes {edad} años </p>
    </>
  );
};

export default Nombre;
