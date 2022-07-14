import { respuestaBoton, finalizarJuego } from "./events.js";

export const containers = (puntosDeLaPartida, randomQuestionsLevel, preguntaActual) => {

  let container = document.querySelector("#container");
  const columna1Container = document.createElement("div");
  columna1Container.classList.add("columna1-container");
  const columna2Container = document.createElement("div");
  columna2Container.classList.add("columna2-container");
  container.append(columna1Container, columna2Container);

  const displayColumna1Container = document.createElement("div");
  displayColumna1Container.classList.add("display-columna1-container");
  columna1Container.append(displayColumna1Container);

  const displayColumna1 = document.createElement("div");
  displayColumna1.classList.add("display-columna1");
  let puntosAcumulados =
    localStorage.getItem("puntajeAcumulado") == null
      ? 0
      : localStorage.getItem("puntajeAcumulado");
  displayColumna1.textContent = `puntos acumulados: ${puntosAcumulados}`;
  const display2Columna1 = document.createElement("div");
  display2Columna1.classList.add("display-columna1");
  display2Columna1.textContent = `puntos de la partida actual: ${puntosDeLaPartida}`;
  const display3Columna1 = document.createElement("div");
  display3Columna1.classList.add("display-columna1");
  display3Columna1.textContent = `nivel de dificultad: ${randomQuestionsLevel.level}`;
  const display4Columna1 = document.createElement("div");
  display4Columna1.classList.add("display-columna1");
  display4Columna1.textContent = `categoria: ${randomQuestionsLevel.categoryId}`;
  displayColumna1Container.append(displayColumna1, display2Columna1, display3Columna1, display4Columna1);

  const botonDeRetiro = document.createElement("button");
  botonDeRetiro.classList.add("retirarse");
  botonDeRetiro.textContent = "retirarse";
  botonDeRetiro.addEventListener("click", () =>
    finalizarJuego(puntosDeLaPartida)
  );
  columna1Container.append(botonDeRetiro);

  const display1Columna2 = document.createElement("div");
  display1Columna2.classList.add("display-columna2");
  display1Columna2.textContent = `${randomQuestionsLevel?.questionTitle}`;
  columna2Container.append(display1Columna2);

  const containerRespuestas = document.createElement("div");
  containerRespuestas.classList.add("container-respuestas");
  columna2Container.append(containerRespuestas);

  randomQuestionsLevel?.answerOptions.map((elemento) => {
    const respuestas = document.createElement("button");
    respuestas.classList.add("respuesta");
    respuestas.textContent = elemento.answer;
    respuestas.addEventListener("click", () =>
      respuestaBoton(elemento.correct, puntosDeLaPartida, preguntaActual)
    );
    containerRespuestas.append(respuestas);
  });
};
