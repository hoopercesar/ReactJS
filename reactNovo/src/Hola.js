export function Hola(props) {
  const algo = true;
  console.log(props);
  return (
    <h1>
      {algo ? (
        <>
          {props.title} {props.poto} <ion-icon name="happy-outline"></ion-icon>
        </>
      ) : (
        <>
          "React es difícil" <ion-icon name="sad-outline"></ion-icon>
        </>
      )}
      ;
    </h1>
  );
}

// export default Hola;
