import styled from "styled-components";
import Total from "./Total";
import { useContext } from "react";
import { Contexto } from "../Contextos/Contexto";
import { GrSubtract} from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";

function Carrito() {
  const { carrito, eliminarUnaUnidadCarrito, eliminarProducto } =
    useContext(Contexto);
  return (
    <div>
      <h3>
        Carrito de Compras 
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
                <GrSubtract />                
                  
                </button>{" "}
                <button onClick={() => eliminarProducto(cart.id, cart.nombre)}>
                < MdOutlineDeleteForever/>
                </button>
              </Producto>
            );
          })
        ) : (
          <p>No hay nada en el carrito</p>
        )}
        <Total />
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