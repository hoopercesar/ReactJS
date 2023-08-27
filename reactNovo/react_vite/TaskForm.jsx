import { useState } from "react";

export const TaskForm = () => {
  const [texto, setTexto] = useState("");

  return (
    <form>
      <p>{texto}</p>
      <input
        placeholder="ingresa tu mensaje"
        onChange={(ev) => {
          ev.preventDefault();
          setTexto(ev.target.value);
        }}
      ></input>
      <button>Enviar</button>
    </form>
  );
};
