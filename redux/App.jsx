import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Inicio from "./Componentes/Inicio";
import Blog from "./Componentes/Blog";
import Tienda from "./Componentes/Tienda";
import Error404 from "./Componentes/Error404";
import Carrito from "./Componentes/Carrito";
import GeneraBoleta from "./Componentes/GeneraBoleta";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/tiendaReducer";

const App = () => {
  const productos = [
    { id: 1, nombre: "manzana", precio: 500 },
    { id: 2, nombre: "peras", precio: 700 },
    { id: 3, nombre: "frijoles", precio: 1500 },
    { id: 4, nombre: "papas", precio: 5000 },
    { id: 5, nombre: "aceite", precio: 4500 },
    { id: 6, nombre: "bananas", precio: 900 },
  ];

  const [carrito, setCarrito] = useState([]);

  const store = createStore(reducer);
  console.log("STORE", store.getState());

  const retornaPrecioProducto = (id) => {
    const producto = productos.filter((elemento) => {
      return elemento.id === id;
    });

    return producto;
  };

  const eliminarProducto = (id) => {
    let algo = [];
    if (carrito.length > 0) {
      let clonCarrito = [...carrito];
      algo = clonCarrito.filter((elemento) => elemento.id != id);
    }
    setCarrito(algo);
  };

  const eliminarUnaUnidadCarrito = (id, nombre) => {
    const nuevoCarrito = [...carrito];
    let [precio] = retornaPrecioProducto(id);

    // primero buscamos el producto al que se desea restar cantidad
    const [objetoCarrito] = nuevoCarrito.filter((elemento) => {
      return elemento.id === id;
    });

    if (objetoCarrito.cantidad > 0) {
      nuevoCarrito.forEach((elemento, index) => {
        if (elemento.id === id) {
          const cant = nuevoCarrito[index].cantidad;
          nuevoCarrito[index] = {
            id: id,
            nombre: nombre,
            cantidad: cant - 1,
            precio: precio.precio,
          };
        }
      });
    }
    setCarrito(nuevoCarrito);
  };

  const agregarProductoCarrito = (id, nombre) => {
    let [precio] = retornaPrecioProducto(id);

    // si el carrito no tiene elementos agregamos 1
    if (carrito.length === 0) {
      setCarrito([
        { id: id, nombre: nombre, cantidad: 1, precio: precio.precio },
      ]);
    } else {
      // primero debemos revisar si el producto está o no en el carrito
      // si el carrito ya tiene el producto, entonces debemos actualizar la cantidad
      // si no tiene el producto, entonces debemos agregar el producto
      // para poder editar el arreglo carrito tenemos que clorarlo
      const nuevoCarrito = [...carrito];

      // comprobamos si nuevocarrito ya tiene el id del producto que deseamos agregar
      const estaEnCarrito =
        nuevoCarrito.filter((elemento) => {
          // retorna el id si está en nuevocarrito.

          return elemento.id === id;
        }).length > 0;
      // length>0 : true si hay elementos, false si no hay elementos en estaEnCarrito
      // estaEnCarrito puede tomar valor true o false, sólo éso
      // let u = [1, 2, 3]  --> u.length>0 --> true

      // si ya tiene el producto, debemos actualizar la cantidad
      if (estaEnCarrito) {
        // para ello tenemos que buscar y obtener la posición del producto en el arreglo nuevoCarrito
        // y en base a su posición actualizamos el valor
        nuevoCarrito.forEach((elementoCarrito, index) => {
          if (elementoCarrito.id === id) {
            const cant = nuevoCarrito[index].cantidad;

            nuevoCarrito[index] = {
              id: id,
              nombre: nombre,
              cantidad: cant + 1,
              precio: precio.precio,
            };
          }
        });
      } else {
        nuevoCarrito.push({
          id: id,
          nombre: nombre,
          cantidad: 1,
          precio: precio.precio,
        });
      }
      // actualizamos el contenido de carrito
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <Provider store={store}>
      <Contenedor>
        <Menu>
          {" "}
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/tienda"
              element={
                <Tienda
                  productos={productos}
                  agregarProductoCarrito={agregarProductoCarrito}
                />
              }
            />
            <Route path="boleta" element={<GeneraBoleta />} />
          </Routes>
        </main>
        <aside>
          <Carrito
            carrito={carrito}
            eliminarUnaUnidadCarrito={eliminarUnaUnidadCarrito}
            eliminarProducto={eliminarProducto}
          />
        </aside>
      </Contenedor>
    </Provider>
  );
};

const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
