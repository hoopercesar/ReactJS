import "./task.css";

// forma 1 de estilizar módulos
export function TaskCard() {
  const cardStyle = {
    background: "rgb(199, 231, 199)",
    color: "rgb(4, 128, 4)",
  };
  return (
    <div style={cardStyle}>
      <h1>Clinica de Salud</h1>
      <p>Bienvenido</p>
      <ion-icon name="medkit"></ion-icon>
    </div>
  );
}

export function TaskCard2() {
  return (
    <div className="cards">
      <h1>Segunda Tarea</h1>
      <p>Incompleta</p>
    </div>
  );
}

// forma 2 de estilizar módulos (usando css)
