import React, { useState, useEffect } from "react";
import styles from "./ContadorFuncional.module.css";
import Boton from "./../elementos/Boton";

const ContadorFuncional = (props) => {
  const [cuenta, cambiarCuenta] = useState(0);

  {
    /*Esta función (useEffect) se activa cuando el DOM se carga y cada
vez que se actualiza cualquiera de sus componentes. 
    Importante: los hooks se pueden llamar más de una vez. 

  // aquí el hook se ejecuta cuando el DOM se carga y cada vez que se actualiza.
  useEffect(() => {
    // conectarse a una API (p. ej)
    console.log("el componente se renderizó");
  });

  */
  }
  {
    /*  el hook se aciva cuando se carga el DOM
  useEffect(() => {
    console.log("La función se activa cuando el DOM se carga por primera vez");
  }, []); */
  }

  {
    /* el hook se activa cuando cambia el estado del contador .
    se pueden agregar más dependencias. p.ej. [cuenta,cuenta2, cuenta3] etc

  useEffect(() => {
    console.log("se actualizó el contador");
  }, [cuenta]); */
  }

  // el hook se ejecuta cuando se quita la función del DOM o se desmonta el componente
  useEffect(() => {
    // código de la función. cerrar conexión a la API.

    return () => {
      console.log("el componente fue desmontado");
    };
  }, []);

  const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad);
  const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad);

  return (
    <div>
      <h1>Contador: {cuenta} </h1>
      {/*
      <button
        className={styles.boton}
        onClick={() => incrementar(props.incremento)}
      >
        Incremento
      </button>
      <button
        className={styles.boton}
        onClick={() => disminuir(props.decremento)}
      >
        Disminuir
      </button>
      */}
      <Boton margenDerecho negro onClick={() => incrementar(props.incremento)}>
        Incrementar
      </Boton>
      <Boton negro onClick={() => disminuir(props.decremento)}>
        Disminuir
      </Boton>
    </div>
  );
};

export default ContadorFuncional;
