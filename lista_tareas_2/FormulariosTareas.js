import React from "react";

const FormularioTareas = () => {
  return (
    <form action="" className="formulario-tareas">
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="write a way to kill yourself"
      />
      <button type="submit" className="formulario-tareas__boton">
        Do it
        <ion-icon name="fish"></ion-icon>
      </button>
    </form>
  );
};

export default FormularioTareas;
