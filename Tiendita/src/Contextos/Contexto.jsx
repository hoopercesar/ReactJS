import React, { useState } from "react";
import PropTypes from "prop-types";

const Contexto = React.createContext();

const ProveedorContexto = ({ children }) => {
  const productos = [
    { id: 1, clave: "rolls_salmon" , nombre: "Rolls Salmón", precio: 15000 },
    { id: 2, clave: "ceviche_reineta" , nombre: "Ceviche reineta", precio: 8000 },
    { id: 3, clave: "ceviche_salmon_camaron" , nombre: "Ceviche Salmón Camarón", precio: 6500 },
    { id: 4, clave: "rolls_pulpo_parrillero" , nombre: "Rolls Pulpo parrillero", precio: 10500 },
    { id: 5, clave: "lomo_saltado" , nombre: "Lomo Saltado", precio: 5500 },
    { id: 6, clave: "aji_de_gallina" , nombre: "Ají de Gallina", precio: 5500 },
    { id: 7, clave: "rolls_camaron" , nombre: "Rolls Camarón", precio: 15000},
  ];

  const [carrito, setCarrito] = useState([]);


  const retornaPrecioProducto = (id) => {
    const producto = productos.filter((elemento) => {
      return elemento.id === id;
    });

    return producto;
  };

  const agregarProductoCarrito = (id, nombre) => {
    // let [precio] = retornaPrecioProducto(id);

    let [precio] = productos.filter((elemento) => {
      return elemento.id === id;
    });

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

  const eliminarProducto = (id) => {
    let algo = [];
    if (carrito.length > 0) {
      let clonCarrito = [...carrito];
      algo = clonCarrito.filter((elemento) => elemento.id != id);
    }
    setCarrito(algo);
  };

  return (
    <Contexto.Provider
      value={{
        productos,
        carrito,
        agregarProductoCarrito,
        eliminarUnaUnidadCarrito,
        eliminarProducto,
      }}
    >
      {children}{" "}
    </Contexto.Provider>
  );
};

ProveedorContexto.propTypes = {
  children: PropTypes.object,
};

export { Contexto, ProveedorContexto };