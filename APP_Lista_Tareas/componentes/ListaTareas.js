import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, cambiarTareas }) => {
  const toggleCompletada = (id) => {
    console.log("ese es el id", id);
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completado: !tarea.completado };
        }
        return tarea;
      })
    );
  };

  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, texto: nuevoTexto };
        }
        return tarea;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          return (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              toggleCompletada={toggleCompletada}
              editarTarea={editarTarea}
            />
          ); //<li key={tarea.id}>{tarea.texto}</li>;
        })
      ) : (
        <div className="lista-tareas__mensaje">"No hay tareas agregadas"</div>
      )}
    </ul>
  );
};

export default ListaTareas;
