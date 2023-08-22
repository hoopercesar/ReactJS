export function createConnection(serverUrl, roomId) {
  // Una implementación real se conectaría al servidor
  return {
    connect() {
      console.log(
        '✅ Conectando a la sala "' + roomId + '" en ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log(
        '❌ Desconectando de la sala"' + roomId + '" en ' + serverUrl
      );
    },
  };
}
