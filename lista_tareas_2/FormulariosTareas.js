import React, { useState } from "react";

const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarTarea] = useState("");

  // usaré este algoritmo para contar los id's
  const [count, setCount] = useState(0);

  const handleInput = (ev) => {
    cambiarTarea(ev.target.value);
  };

  const handleSubmit = (ev) => {
    setCount(count + 1);
    {
      /*esta línea "ev.preventDefault()" 
      impide la actualización del DOM cada vez que se presione enter*/
    }
    ev.preventDefault();

    /*cambiarTareas es una función con un valor inicial dado 
      en el argumento de useState en App.js.
      Ahora bien, lo que haremos usar esta función que se actualiza cuando
      presionamos el ícono-botón aquí abajo. 
      Agregamos nuevas tareas a las ya existentes.
      En esta versión usé un algoritmo como contador para el id.
      y no el identificador universal.
      */

    cambiarTareas([
      ...tareas,
      {
        id: count,
        texto: inputTarea,
        completada: false,
      },
    ]);
  };
  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="write a way to kill yourself"
        value={inputTarea}
        onChange={(ev) => handleInput(ev)}
      />
      <button type="submit" className="formulario-tareas__boton">
        <div className="formulario-tareas__icon">
          <ion-icon name="fish"></ion-icon>
        </div>
      </button>
    </form>
  );
};

export default FormularioTareas;
