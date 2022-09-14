import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState("");

  const handleInput = (ev) => {
    cambiarInputTarea(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
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
        placeholder="Agrega nueva tarea"
        value={inputTarea}
        onChange={(ev) => {
          handleInput(ev);
        }}
      />
      <button className="formulario-tareas__boton" type="submit">
        <ion-icon name="add"></ion-icon>
      </button>
    </form>
  );
};

export default FormularioTareas;
