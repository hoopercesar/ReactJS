const estadoInicial = {
  productos: [
    { id: 1, nombre: "manzana", precio: 500 },
    { id: 2, nombre: "peras", precio: 700 },
    { id: 3, nombre: "frijoles", precio: 1500 },
    { id: 4, nombre: "papas", precio: 5000 },
    { id: 5, nombre: "aceite", precio: 4500 },
    { id: 6, nombre: "bananas", precio: 900 },
  ],

  carrito: [1, 2, 3],
};

const reducer = (estado = estadoInicial, accion) => {
  return estado;
};

export default reducer;
