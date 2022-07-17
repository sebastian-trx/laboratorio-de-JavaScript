import { respuestaBoton, finalizarJuego } from "./events.js";

/**
 * Esta funcion es la encargada de inyectar los nodos dentro de la etiqueta <div id="container">
 * Mediante parametros se pasa la informacion que se quiere renderizar
 * 
 * @param {Number} puntosDeLaPartida 
 * @param {{questionTitle: "string", answerOptions: Array, level: number, categoryId: string}} randomQuestionsLevel 
 * @param {Number} preguntaActual 
 * @function
 */

export const containers = (puntosDeLaPartida, randomQuestionsLevel, preguntaActual) => {


  /**
   * en esta seccion se crean dos columnas contenedoras 
   * <div class="columna1-container">  
   * <div class="columna2-container">  
   * 
   * y se añaden a <div id="container">
   */
  let container = document.querySelector("#container");
  const columna1Container = document.createElement("div");
  columna1Container.classList.add("columna1-container");
  const columna2Container = document.createElement("div");
  columna2Container.classList.add("columna2-container");
  container.append(columna1Container, columna2Container);

 /**
   * En esta seccion se crea el contenedor de los 4
   * displays que es donde se muestran los puntos acumulados,
   * puntos de la partida actual, el nivel de la pregunta,
   * y la categoria
   * 
   * <div class="display-columna1-container"> 
   * 
   * se añaden a <div class="columna1-container">
   */
  const displayColumna1Container = document.createElement("div");
  displayColumna1Container.classList.add("display-columna1-container");
  columna1Container.append(displayColumna1Container);


/**
 * En esta seccion se crean las 4 etiquetas
 * <div class="display-columna1">* 4
 * y se añaden a <div class="display-columna1-container"> 
 */
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


  /**
   * Se crea el boton de retiro voluntario
   * <button class="retirarse">retirarse</button>
   * y se le añade el escuchador de eventos "click"
   */
  const botonDeRetiro = document.createElement("button");
  botonDeRetiro.classList.add("retirarse");
  botonDeRetiro.textContent = "retirarse";
  botonDeRetiro.addEventListener("click", () =>
    finalizarJuego(puntosDeLaPartida)
  );
  columna1Container.append(botonDeRetiro);

  /**
   * Se crea el display donde se van a mostrar las preguntas 
   * <div class="display-columna2">
   */
  const display1Columna2 = document.createElement("div");
  display1Columna2.classList.add("display-columna2");
  display1Columna2.textContent = `${randomQuestionsLevel?.questionTitle}`;
  columna2Container.append(display1Columna2);
 
  /**
   * Se crea el contenedor de respuestas 
   * <div class="container-respuestas">
   */
  const containerRespuestas = document.createElement("div");
  containerRespuestas.classList.add("container-respuestas");
  columna2Container.append(containerRespuestas);


  /**
   * Se mapean y se crean 4 respuestas del array 
   * randomQuestionsLevel.answerOptions  
   * A cada resouesta se añade el escuchador de eventos "click"
   *  <button class="respuesta">
   */
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
