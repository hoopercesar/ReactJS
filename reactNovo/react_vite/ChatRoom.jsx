import { useState, useEffect } from "react";
import axios from "axios";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const url = "http://localhost:5005/webhooks/rest/webhook";

  useEffect(() => {
    // Realizar una solicitud a la base de datos para obtener mensajes
    const fetchData = async () => {
      try {
        const response = await axios.get(url).then((response) => {
          console.log("GET", response.data);
          setMessages(response.data);
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(newMessage);

  const handleSendMessage = () => {
    // Enviar el nuevo mensaje a la base de datos
    axios
      .post(url, { sender: "test_user", message: newMessage })
      .then((response) => {
        // Actualizar los mensajes con el nuevo mensaje
        setMessages([...messages, response.data]);
        setNewMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar mensaje:", error);
      });
  };

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
        onBlur={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
}

export default Chat;
