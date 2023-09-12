import styled from "styled-components";
import { BsCart4 } from "react-icons/Bs";
import PropTypes from "prop-types";

function Carrito({ carrito, eliminarUnaUnidadCarrito }) {
  return (
    <div>
      <h3>
        Carrito de Compras <BsCart4 />
      </h3>

      <div>
        {carrito.length > 0 ? (
          carrito.map((cart) => {
            console.log("CARRITO-15", cart.nombre, cart.id);
            return (
              <Producto key={cart.id}>
                <NombreProducto>{cart.nombre} </NombreProducto>
                Cantidad: {cart.cantidad}
                <BotonReductor
                  onClick={() => eliminarUnaUnidadCarrito(cart.id, cart.nombre)}
                >
                  Menos
                </BotonReductor>
              </Producto>
            );
          })
        ) : (
          <p>No hay nada en el carrito</p>
        )}
      </div>
    </div>
  );
}

Carrito.propTypes = {
  carrito: PropTypes.object,
  eliminarUnaUnidadCarrito: PropTypes.function,
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

const BotonReductor = styled.button`
  border: none;
  background: #ea612f;
  color: #fff;
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  width: 30%;

  border-radius: 10px;
  transition: 0.3s ease all;

  &:hover {
    background: #6e2105;
  }
`;

export default Carrito;
