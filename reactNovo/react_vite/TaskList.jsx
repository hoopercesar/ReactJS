import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function TaskList(props) {
  const [counter, setCounter] = useState(0);
  const [im, setIm] = useState("");
  console.log(props.tasks);

  useEffect(() => {
    let numRand = Math.random() * (100 - 1) + 1;
    let num = Math.floor(numRand);

    setIm(`https://robohash.org/${num}`);
  }, [counter]);

  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>
          {" "}
          <h2>{task.name} </h2>
          <p>{task.description}</p>
        </div>
      ))}

      <div>
        <img src={im}></img>
        <p>Monstruo N° {counter} </p>
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.string,
};

export default TaskList;
