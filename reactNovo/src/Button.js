import PropTypes from "prop-types";

export function Button({ text = "yes", numero = 12, adress }) {
  console.log(text, numero);
  return (
    <button>
      <ion-icon name="skull-sharp"></ion-icon> {text} {numero} {adress}{" "}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  numero: PropTypes.number,
  adress: PropTypes.object,
};
