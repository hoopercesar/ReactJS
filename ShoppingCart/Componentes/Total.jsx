import PropTypes from "prop-types";

function Total({ carrito }) {
  console.log(carrito);
  if (carrito.length > 0) {
    let total = 0;
    carrito.forEach((element) => {
      total += element.cantidad * element.precio;
    });
  }
  return <div>Aquí va el Total: {total} </div>;
}

Total.propTypes = {
  carrito: PropTypes.array,
};

export default Total;
