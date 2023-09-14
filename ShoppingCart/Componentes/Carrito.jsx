import styled from "styled-components";
import { BsCart4 } from "react-icons/Bs";
import { FaMinus } from "react-icons/Fa";
import { RiDeleteBinLine } from "react-icons/Ri";
import PropTypes from "prop-types";
import Total from "./Total";

function Carrito({ carrito, eliminarUnaUnidadCarrito, eliminarProducto }) {
  return (
    <div>
      <h3>
        Carrito de Compras <BsCart4 />
      </h3>

      <div>
        {carrito.length > 0 ? (
          carrito.map((cart) => {
            return (
              <Producto key={cart.id}>
                <NombreProducto>{cart.nombre} </NombreProducto>
                Cantidad: {cart.cantidad}
                <button
                  onClick={() => eliminarUnaUnidadCarrito(cart.id, cart.nombre)}
                >
                  <FaMinus />
                </button>{" "}
                <button onClick={() => eliminarProducto(cart.id, cart.nombre)}>
                  <RiDeleteBinLine />
                </button>
              </Producto>
            );
          })
        ) : (
          <p>No hay nada en el carrito</p>
        )}
        <Total carrito={carrito} />
      </div>
    </div>
  );
}

Carrito.propTypes = {
  carrito: PropTypes.array,
  eliminarUnaUnidadCarrito: PropTypes.func,
  eliminarProducto: PropTypes.func,
};

const Producto = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ebebf3;
  font-size: 14px;
`;

const NombreProducto = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export default Carrito;
