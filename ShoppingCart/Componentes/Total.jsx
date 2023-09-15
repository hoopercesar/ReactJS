import PropTypes from "prop-types";
import { NavLink, BrowserRouter } from "react-router-dom";

function Total({ carrito }) {
  console.log("TOTAL", carrito);
  let total = 0;
  if (carrito.length > 0) {
    carrito.forEach((element) => {
      // console.log(element.cantidad, element.precio);
      total += element.cantidad * element.precio;
    });
    // return total;
  }

  return <div>Total: ${total}</div>;
}

Total.propTypes = {
  carrito: PropTypes.array,
};

export default Total;
