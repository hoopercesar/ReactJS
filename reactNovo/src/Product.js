function Product(a) {
  console.log(a);
  return (
    <div>
      <h1>{a.title} </h1>
    </div>
  );
}

export function UsuarioInfo(props) {
  console.log(props);
  return (
    <div>
      <h2>
        Hola, {props.name} {props.apellido}{" "}
      </h2>
      <p>tu monto es {props.amount} </p>.
      <h2>
        <ion-icon name="location-outline" backgroundcolor="red"></ion-icon> te
        lo haremos llegar a {props.adress.street} {props.adress.number}{" "}
      </h2>
    </div>
  );
}

export function Navbar({ nombre, apellido }) {
  console.log(nombre, (apellido = "Soto"));
  return (
    <nav>
      Hola, {nombre}, tu apellido es {apellido}
    </nav>
  );
}

export function TruckIcon(props) {
  return (
    <button>
      {<i class="fal fa-truck"></i>} {props.fuerza}
    </button>
  );
}

export function BotIcon(props) {
  return <div>{<i class="far fa-robot"></i>}</div>;
}
export default Product;
