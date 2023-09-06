import PropTypes from "prop-types";
import "./task.css";

export function Button({ text = "yes", numero = 12, adress }) {
  console.log(text, numero);
  if (!text) {
    console.error("El texto es requerido");
  }
  return (
    <button>
      <ion-icon name="skull-sharp"></ion-icon> {text} {numero} {adress}{" "}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  numero: PropTypes.number,
  adress: PropTypes.string,
};

// esta función muestra un caminante cuando tipo es true y un avión
// cuando tipo es false
export function TripIcon({ tipo }) {
  return (
    <div>
      {tipo ? (
        <ion-icon name="walk"></ion-icon>
      ) : (
        <ion-icon name="airplane"></ion-icon>
      )}
    </div>
  );
}

// se puede hacer lo mismo con los estilos

export function Estilo({ ready }) {
  return <div className={ready ? "rojo" : "verde"}>Hola</div>;
}
