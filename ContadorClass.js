import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  /* ejemplo de método de ciclo de vida, cada vz que el componente se carga */
  componentDidMount() {
    console.log("el componente se montó en el DOM");
    // ... llamamos a la API ... //
  }

  // método ciclo de vida que se activa cada ve que el DOM se actualiza
  componentDidUpdate(propAnteriores, estadoAnterior) {
    console.log("el DOM se actulizó");
    console.log("las propiedades anteriores al update", propAnteriores);
    console.log("el estado anterior al update", estadoAnterior);
  }

  componentWillUnmount() {
    console.log("Adios componente");
  }

  incrementar(cantidad) {
    this.setState((estadoAnterior) => {
      return {
        contador: estadoAnterior.contador + cantidad,
      };
    });
  }

  disminuir(cantidad) {
    this.setState((estadoAnterior) => {
      return {
        contador: estadoAnterior.contador - cantidad,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador} </h1>
        <button onClick={() => this.incrementar(5)}>Incrementar</button>
        <button onClick={() => this.disminuir(3)}>Disminuir</button>
      </div>
    );
  }
}

export default Contador;
