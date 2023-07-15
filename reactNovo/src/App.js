import { Hola } from "./Hola";
import Product, { BotIcon, Navbar, TruckIcon, UsuarioInfo } from "./Product";
import { Button, TripIcon, Estilo } from "./Button";
import { TaskCard, TaskCard2 } from "./Task";

export function App() {
  const lista = ["Tos", "Jaqueca", "Alergia"];
  return (
    <div>
      <TaskCard />
      <TripIcon tipo={false} />
      <TaskCard2 />
      <Estilo ready={true} />
      {/* <Navbar nombre="julio" apellido="sosa" /> */}
      {/* <Hola title="excelente" poto="feo" />
      <Hola title="muy bien" /> */}
      {/* <Hola title={[1, 2, 3, 4]} /> */}
      {/* <Product title="red" />
      <Navbar nombre="raquel" apellido="soto" />
      <Navbar nombre="andrea" />
      <TripIcon tipo={false} />
      <UsuarioInfo
        name="carlos"
        apellido="Nunes"
        amount={200}
        adress={{ street: "holguin", number: "22" }}
      />
      <TruckIcon fuerza="1000N" /> */}
      {/* <BotIcon /> */}
      {/* <Button text="Incluido" />

      <Button text="Dolor Muscular" numero={55} adress={"1233"} />
      <Button text="Nauseas" numero={23} />
      <Button text="Diarrea" />
      <Button text={lista[2]} numero={5 * 2} />
      <TripIcon tipo={true} /> */}
      <TripIcon tipo={true} />
      <Button text="Muelas" onClick={() => console.log("Presionaste Botón")} />
    </div>
  );
}
