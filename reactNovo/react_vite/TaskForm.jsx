import { useState } from "react";
import TaskAxios from "./TaskAxios";

export const TaskForm = () => {
  const [chatUser, setChatUser] = useState("");
  const [counter, setCounter] = useState(0);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setCounter(counter + 1);
  };

  const handleInputChange = (ev) => {
    setChatUser(ev.target.value);
  };

  const handleButton = (ev) => {
    console.log("Enviar", ev.target.value);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="ingresa tu mensaje"
          onChange={handleInputChange}
        ></input>
        <div>{chatUser}</div>
        <button onSubmit={handleButton}>Enviar</button>
      </form>
      <TaskAxios userChat={chatUser} />
    </>
  );
};
