import neuralDisease from "./data/neurological";
import { Navigate, useParams } from "react-router-dom";

// esta función recupera el texto del array que contiene nombre de enfermedad y descripción
function recuperaTexto(id) {
  let text = "";
  neuralDisease.map((disease) => {
    let [, chave] = Object.keys(disease);
    if (chave === id) {
      text = disease[chave];
    }
  });

  return text;
}

// id contiene el nombre de la enfermedad. por su parte,
// text contiene una breve descripción de la enfermmedad obtenida de chatgpt

function NeuralDisease() {
  const { id } = useParams();
  let texto = recuperaTexto(id);
  return (
    <>
      {" "}
      {texto ? (
        <div>
          <h2>{id} </h2>
          <p>{texto} </p>
        </div>
      ) : (
        <Navigate replace to="/neurologia" />
      )}
    </>
  );
}

export default NeuralDisease;
