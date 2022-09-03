import React, { Component } from "react";

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
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
