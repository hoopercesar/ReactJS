import React, { useState, useEffect } from "react";

const useObtenerArticulos = () => {
  const [articulos, establecerArticulos] = useState([]);
  const [cargando, establecerCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      establecerArticulos([
        {
          id: 1,
          titulo: "Titulo primer artículo",
        },
        {
          id: 2,
          titulo: "Titulo segundo artículo",
        },
        {
          id: 3,
          titulo: "Titulo tercer artículo",
        },
      ]);
      establecerCargando(false);
    }, 5000);
  }, []);

  return [articulos, cargando];
};

export default useObtenerArticulos;
