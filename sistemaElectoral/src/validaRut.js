// Valida Rut

function VerificaRUT(rutEnviado) {
    Object.defineProperty(this, "rutLimpio", {
      enumerable: true,
      configurable: true,
      get: function () {
        return rutEnviado.replace(/\D+/g, "");
      },
    });
  }
  
  VerificaRUT.prototype.valida = function () {
    if (this.rutLimpio === "undefined") return false;
    if (this.rutLimpio.length < 8 || this.rutLimpio.length > 9) return false;
    if (this.esSecuencia(this.rutLimpio)) return false;
  
    const rutParcial = this.rutLimpio.slice(0, -1);
    const digito = this.creaDigito(rutParcial);
    const rutNuevo = rutParcial + digito.toString();
  
    return rutNuevo === this.rutLimpio ? true : false;
  };
  
  VerificaRUT.prototype.creaDigito = function (rutParcial) {
    const rutArray = Array.from(rutParcial).reverse();
    let k = 2;
    const resultado = rutArray.reduce((ac, b) => {
      ac += b * k;
      k++;
      if (k === 8) k = 2;
      return ac;
    }, 0);
  
    if (11 - (resultado % 11) === 11) {
      return 0;
    } else if (11 - (resultado % 11) === 10) {
      return "K";
    } else {
      return 11 - (resultado % 11);
    }
  };
  
  VerificaRUT.prototype.esSecuencia = function (rutLimpio) {
    const rutSecuencia = rutLimpio[0].repeat(rutLimpio.length);
    if (rutSecuencia === rutLimpio) return true;
  };

  export default VerificaRUT;

  //const rut = new VerificaRUT("17.981.603-2");
  //console.log(rut.valida());