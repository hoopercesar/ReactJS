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
        <div className="formulario-tareas__icon">
          Do it
          <ion-icon name="fish">chopo</ion-icon>
        </div>
      </button>
    </form>
  );
};

export default FormularioTareas;
