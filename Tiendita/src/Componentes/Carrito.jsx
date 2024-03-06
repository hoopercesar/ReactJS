import styled from "styled-components";
import Total from "./Total";
import { useContext } from "react";
import { Contexto } from "../Contextos/Contexto";
import { GrSubtract} from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
// importar botones de bootstrap
import { Button } from "react-bootstrap";



function Carrito() {
  const { carrito, eliminarUnaUnidadCarrito, eliminarProducto, agregarProductoCarrito } =
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
                
                <Button 
                  variant="success"
                  size="sm"
                  onClick={() => agregarProductoCarrito(cart.id, cart.nombre)}
                >+</Button>{" "}          
                
                <Button 
                  variant="warning"
                  size="sm"
                  onClick={() => eliminarUnaUnidadCarrito(cart.id, cart.nombre) }
                  ><GrSubtract /></Button>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarProducto(cart.id, cart.nombre)}>
                < MdOutlineDeleteForever/>
                </Button> 
                
              </Producto>
            );
          })
        ) : (
          <p>No hay nada en el carrito</p>
        )}
        <Total />
       <Link to="/formulariopago" >
        <Button variant="primary">Pagar</Button>
        
       </Link>
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