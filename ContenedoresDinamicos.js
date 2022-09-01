import React, { useState } from "react";

// no spe
// cual es

const ContenedoresDinamicos = () => {
  const [palabra, cambiarPalabra] = useState("");

  const onChange = (ev) => {
    cambiarPalabra(ev.target.value);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <>
        <label htmlFor="palabra">Palabra: </label>
        <input
          type="text"
          name="palabra"
          id="palabra"
          value={palabra}
          onChange={onChange}
        />
      </>
      <button type="submit">Enviar</button>
      <div>{palabra}</div>
    </form>
  );
};

export default ContenedoresDinamicos;
