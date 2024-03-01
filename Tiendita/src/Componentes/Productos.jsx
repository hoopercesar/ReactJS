import styled from "styled-components";
import { useContext } from "react";
import { Contexto } from "../Contextos/Contexto";

function Productos() {
  const { productos, agregarProductoCarrito } = useContext(Contexto);

  return (
    <div>
      <h3>Productos</h3>

      <ContenedorProductos>
        {productos.map((producto, index) => {
          return (
            <div key={index}>
              <Producto>
                <p>{producto.nombre} </p>
                <Boton
                  onClick={() =>
                    agregarProductoCarrito(producto.id, producto.nombre)
                  }
                >
                  Agregar al carrito
                  <p>${producto.precio} </p>
                </Boton>
              </Producto>
            </div>
          );
        })}
      </ContenedorProductos>
    </div>
  );
}

const ContenedorProductos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px 0;
`;

const Producto = styled.div`
  padding: 20px;
  border: 1px solid #ebeef3;
  border-radius: 5px;
  text-align: center;

  p {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const Boton = styled.button`
  border: none;
  background: #1c85e8;
  color: #fff;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  display: inline-block;
  padding: 2px 10px;
  cursor: pointer;
  width: 40%;
  border-radius: 3px;
  transition: 0.3s ease all;

  &:hover {
    background: #1c6ab9;
  }
`;

export default Productos;