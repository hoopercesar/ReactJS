import TaskList from "./TaskList.jsx";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState();

  const test = () => {
    axios
      .get("http://localhost:5005")
      .then((algo) => algo.data)
      .then((dato) => setData(dato));
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
    </div>
  );
};

export default App;
