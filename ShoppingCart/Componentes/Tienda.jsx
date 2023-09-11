import Productos from "./Productos";
import PropTypes from "prop-types";

function Tienda({ productos }) {
  return (
    <div>
      <h2>Tienda</h2>
      <Productos productos={productos} />
    </div>
  );
}

Tienda.propTypes = {
  productos: PropTypes.object,
};

export default Tienda;
