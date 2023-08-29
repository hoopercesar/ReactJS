import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

function TaskAxios(props) {
  const [mensaje, setMensaje] = useState("");

  const userMessage = {
    sender: "test_user",
    message: props.userChat,
  };

  console.log(userMessage);

  // axios
  //   .post("http://localhost:5005/webhooks/rest/webhook", userMessage)
  //   .then((response) => {
  //     if (response) {
  //       // console.log(response.data[0].text);
  //       setMensaje(response.data[0].text);
  //     }
  //   })
  //   .catch((error) => console.log(error));

  return (
    <>
      <p>{mensaje}</p>
    </>
  );
}

TaskAxios.propTypes = {
  userChat: PropTypes.string,
};

export default TaskAxios;

// const [respuesta, setRespuesta] = useState();
// const info = {
//   sender: "test_user",
//   // message: "20502458-1",
//   message: "/restart",
// };
// const jason = () => {
//   axios
//     .post("http://localhost:5005/webhooks/rest/webhook", info)
//     .then((response) => {
//       if (response) {
//         console.log(response.data[0].text);
//         setRespuesta(response.data[0].text);
//       }
//     })
//     .catch((error) => console.log(error));
// };

{
  /* 
   <button onClick={test()}>Axios</button>
<p>{respuesta}</p> */
}
