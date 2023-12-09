function validaCorreo(correo) {
  // Expresión regular para validar el formato de correo electrónico
  const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Verificar si el correo cumple con el formato
  return regexCorreo.test(correo);
}

//console.log(validaCorreo('pepe@email.com'));