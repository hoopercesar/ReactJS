import { useState, useEffect } from "react";
import axios from "axios";

export const TaskForm = () => {
  const [chatUser, setChatUser] = useState("");
  const [botChat, setBotChat] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputChange = (ev) => {
    setChatUser(ev.target.value);
  };

  // Axios
  const userMessage = {
    sender: "test_user",
    message: "hola",
  };

  console.log(userMessage);

  const url = "http://localhost:5005/webhooks/rest/webhook";

  // useEffect(() => {
  //   axios.get(url).then((response) => setBotChat(response.data));
  // }, []);

  function createPost() {
    axios
      .post(url, userMessage)
      .then((response) => {
        setBotChat(response.data);
        console.log(botChat);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <div>{chatUser}</div>
        <p>BotChat</p>
        <input
          placeholder="ingresa tu mensaje"
          onBlur={handleInputChange}
        ></input>

        <button onClick={createPost}>Enviar</button>
      </form>
    </>
  );
};
