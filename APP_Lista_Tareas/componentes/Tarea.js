import React from "react";

const Tarea = ({ tarea }) => {
  return (
    <li className="lista-tareas__tarea">
      <div className="lista-tareas__check">
        <ion-icon name="checkbox-outline"></ion-icon>
      </div>

      <div className="lista-tareas__texto">{tarea.texto}</div>
      <div className="lista-tareas__edit-close">
        <ion-icon name="create-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </li>
  );
};

export default Tarea;
