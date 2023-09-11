import styled from "styled-components";
import { BsCart4 } from "react-icons/Bs";

function Carrito({ carrito }) {
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
