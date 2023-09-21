import { useContext } from "react";
import { Contexto } from "../Contextos/Contexto";

function Total() {
  const { carrito } = useContext(Contexto);
  let total = 0;
  if (carrito.length > 0) {
    carrito.forEach((element) => {
      // console.log(element.cantidad, element.precio);
      total += element.cantidad * element.precio;
    });
    // return total;
  }

  return <div>Total: ${total}</div>;
}

export default Total;
