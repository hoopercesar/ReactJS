import neuralDisease from "./data/neurological";
import { NavLink } from "react-router-dom";

function Neurologia() {
  return (
    <div>
      <ul>
        {neuralDisease.map((neural, index) => {
          let chaves = Object.keys(neural);
          return (
            <li key={index}>
              <NavLink to={`/neurologia/${chaves[1]}`}>{[chaves[1]]}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Neurologia;
