import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
  const toggleCompletada = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completado: !tarea.completado };
        }
        return tarea;
      })
    );
  };

  // función que permite actualizar tarea con tarea editada

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

  // Función para borrar la tarea con boton borrar

  const borrarTarea = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          // si tareasCompletadas es true devolvemos todas las tareas
          if (mostrarCompletadas) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            ); //<li key={tarea.id}>{tarea.texto}</li>;
            // pero si tareasCompletadas es false devolvemos
            // sólo las tareas que no están completadas
          } else if (!tarea.completado) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          // este return vacío es el que devuelve sólo las tareas que no han
          // sido completadas.
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">"No hay tareas agregadas"</div>
      )}
    </ul>
  );
};

export default ListaTareas;
