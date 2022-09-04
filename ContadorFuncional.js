import React, { useState } from "react";

const ContadorFuncional = (props) => {
  const [cuenta, cambiarCuenta] = useState(0);
  const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad);
  const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad);

  return (
    <div>
      <h1>Contador: {cuenta} </h1>
      <button onClick={() => incrementar(props.incremento)}>Incremento</button>
      <button onClick={() => disminuir(props.decremento)}>Disminuir</button>
    </div>
  );
};

export default ContadorFuncional;
