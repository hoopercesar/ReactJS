import neuralDisease from "./data/neurological";
import { NavLink } from "react-router-dom";
import Controles from "./Controles";

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
      <Controles />
    </div>
  );
}

export default Neurologia;
