import TaskList from "./TaskList.jsx";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState();
  const [jasonData, setJasonData] = useState();

  const test = () => {
    axios
      .get("http://localhost:5005")
      .then((algo) => algo.data)
      .then((dato) => setData(dato));
  };

  const jason = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((datos) => datos.data)
      .then((dat) => dat.map((d) => d.name))
      .then((jdt) => setJasonData(jdt));
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
      <div>{jasonData} </div>
      <button onClick={jason()}>Datos</button>
    </div>
  );
};

export default App;
