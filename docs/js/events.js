import { view4 } from "./view4.js";
import { saveScore } from "./saveScore.js";


/**
 * Esta funcion se ejecuta cuando el jugador hace clic en el alguna de las 4 respuestas,
 * comprueba si la respuesta es correcta. Si es correcta llama a la funcion view4, si es
 * incorrecta termina el juego
 * @param {Boolean} answer 
 * @param {Number} puntosDeLaPartida 
 * @param {Number} preguntaActual 
 * @function 
 */

export const respuestaBoton = (answer, puntosDeLaPartida, preguntaActual) => {
  if (answer) {
    view4(puntosDeLaPartida, preguntaActual);
  } else {
    alert("perdiste, vuelve a intentarlo");
    window.location.reload();
  }
};


/**
 * Esta funcion se ejecuta cuando el jugador hace clic en el boton de retirarse
 * invoca al metodo saveScore y finaliza el juego
 * @param {Number} puntosDeLaPartida 
 * @function 
 */

export const finalizarJuego = (puntosDeLaPartida) => {
  saveScore(puntosDeLaPartida)
  alert("has finalizado el juego, puntos almacenados");
  window.location.reload();
};
