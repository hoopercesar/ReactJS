import Productos from "./Productos";
import PropTypes from "prop-types";

function Tienda({ productos, agregarProductoCarrito }) {
  return (
    <div>
      <h2>Tienda</h2>
      <Productos
        productos={productos}
        agregarProductoCarrito={agregarProductoCarrito}
      />
    </div>
  );
}

Tienda.propTypes = {
  productos: PropTypes.array,
  agregarProductoCarrito: PropTypes.func,
};

export default Tienda;
