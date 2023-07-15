import "./task.css";

// forma 1 de estilizar módulos
export function TaskCard() {
  const cardStyle = {
    background: "#202020",
    color: "#fff",
  };
  return (
    <div style={cardStyle}>
      <h1>Primera tarea</h1>
      <p>Finalizada</p>
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
