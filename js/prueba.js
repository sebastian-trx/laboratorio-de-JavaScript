export const prueba = (preguntaActual) => {

  let container = document.querySelector("#container");

  const h1 = document.createElement("h1");
  h1.textContent= preguntaActual
  
  
  container.append(h1);
  console.log('final de prueba()');
};
