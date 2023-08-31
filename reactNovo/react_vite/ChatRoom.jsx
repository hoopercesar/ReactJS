import { useState } from "react";
import axios from "axios";

function Chat() {
  const [messages, setMessages] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const url = "http://localhost:5005/webhooks/rest/webhook";

  const mensaje = {
    sender: "test",
    message: "hola",
  };

  console.log(mensaje);

  // no ip clave
  // WWJRZ7fvZ*vafzq

  axios
    .post(url, mensaje)
    .then((response) => {
      console.log(response.data);
      // Actualizar los mensajes con el nuevo mensa
    })
    .catch((error) => {
      console.error("Error al enviar mensaje:", error);
    });

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button>Enviar</button>
    </div>
  );
}

export default Chat;
