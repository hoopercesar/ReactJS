import PropTypes from "prop-types";

function Total({ carrito }) {
  let total = 0;
  if (carrito.length > 0) {
    console.log("Total-10", total);
    carrito.forEach((element) => {
      total += element.cantidad * element.precio;
    });
    return total;
  }

  return <div>Aquí va el Total: {total} </div>;
}

Total.propTypes = {
  carrito: PropTypes.array,
};

export default Total;
