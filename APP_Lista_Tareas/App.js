import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  // obtenemos tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem("tarea")
    ? JSON.parse(localStorage.getItem("tarea"))
    : [];

  // establecemos estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  console.log(tareas);

  // guardamos tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tarea", JSON.stringify(tareas));
  }, [tareas]);

  // accedemos a localStorage y comprobamos si mostrarCompletadas es  null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === true;
  }

  // estas variables controlan el comportamiento del ícono
  // que muestra (o no) las tareas que han sido completadas
  // contienen el estado de mostrar tareas completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  // guarda el estado de mostrarcompletadas en localStorage
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);
  console.log(configMostrarCompletadas);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />

      <div>
        <ion-icon name="eye-outline"></ion-icon>
      </div>
    </div>
  );
};

export default App;
