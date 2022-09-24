import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: "comer zapatos",
      completado: false,
    },
    {
      id: 2,
      texto: "dormir 20 horas",
      completado: true,
    },
  ]);

  // estas variables controlan el comportamiento del ícono
  // que muestra (o no) las tareas que han sido completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);

  console.log(tareas);

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
