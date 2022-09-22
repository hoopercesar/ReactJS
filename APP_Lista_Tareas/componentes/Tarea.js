import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const Tarea = ({ tarea, toggleCompletada }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    cambiarEditandoTarea(false);
  };

  console.log(tarea.completado);
  return (
    <li className="lista-tareas__tarea">
      <div className="lista-tareas__check">
        <ion-icon
          name={tarea.completado ? "checkbox-outline" : "square-outline"}
          onClick={() => toggleCompletada(tarea.id)}
        ></ion-icon>
      </div>

      <div className="lista-tareas__texto">
        {/*estas líneas son un condicional: si editarndoTarea es verdadero
        entonces se ejecuta un formulario y se edita la tarea, 
        pero si es falso que se muestre la tarea simplemente*/}
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(ev) => cambiarNuevaTarea(ev.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__boton">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__edit-close">
        <ion-icon
          name="create-outline"
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        ></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </li>
  );
};

export default Tarea;
