import TaskList from "./TaskList.jsx";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState();
  const [respuesta, setRespuesta] = useState();

  const test = () => {
    axios
      .get("http://localhost:5005")
      .then((algo) => algo.data)
      .then((dato) => setData(dato));
  };

  const info = {
    sender: "test_user",
    // message: "20502458-1",
    message: "8291686-5",
  };
  const jason = () => {
    axios
      .post("http://localhost:5005/webhooks/rest/webhook", info)
      .then((response) => {
        if (response) {
          console.log(response.data[0].text);
          setRespuesta(response.data[0].text);
        } else {
          console.log("NO hay info");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button
        onClick={() => {
          fetch("http://localhost:5005")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }}
      >
        Fetch
      </button>
      <p>{data}</p>
      <button onClick={test()}>Axios</button>
      <TaskList />

      <button onClick={jason()}>POST</button>
      <p>{respuesta}</p>
    </div>
  );
};

export default App;
