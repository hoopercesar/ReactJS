import { tasks } from "./tasks";
import { useEffect, useState } from "react";

function TaskList() {
  const [counter, setCounter] = useState(0);
  const [im, setIm] = useState("");

  useEffect(() => {
    let numRand = Math.random() * (100 - 1) + 1;
    let num = Math.floor(numRand);

    setIm(`https://robohash.org/${num}`);
    // console.log(im);
  }, [counter]);

  return (
    <div>
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
      TaskList
    </div>
  );
}

console.log(tasks);

export default TaskList;
