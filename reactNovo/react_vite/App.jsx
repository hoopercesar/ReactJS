import TaskList from "./TaskList.jsx";
// import { TaskForm } from "./TaskForm.jsx";
import ChatRoom from "./ChatRoom.jsx";
import { useState, useEffect } from "react";
import { tasks as data } from "./tasks.js";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <>
      <ChatRoom />
      {/* <TaskForm /> */}
      <TaskList tasks={tasks} />

      {/* <button
        onClick={() => {
          fetch("http://localhost:5005")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        }}
      >
        Fetch
      </button> */}
    </>
  );
};

export default App;
