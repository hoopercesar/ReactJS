import { useState } from "react";

export const TaskForm = ({ props }) => {
  const [texto, setTexto] = useState("");

  return (
    <form>
      <input
        placeholder="ingresa tu mensaje"
        onChange={(ev) => {
          ev.preventDefault();
          setTexto(ev.target.value);
        }}
      ></input>
      <p>{texto}</p>
      <button>Enviar</button>
    </form>
  );
};
