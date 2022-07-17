import { randomQuestionByLevel } from "./randomQuestionByLevel.js";
import { saveScore } from "./saveScore.js";
import { refreshRender } from "./refreshRender.js";
import { containers } from "./containers.js";


/**
 * En esta funcion se controlan los puntos durante la partida,
 * el numero de la pregunta que se va mostrar y 
 * revisa si el jugador ganó. además contiene a
 * la funcion que permite mostrar los datos 
 * y tambien a la funcion que impide que se duplique el contenido
 * conforme el juego avanza
 * 
 * @param {Number} puntosDeLaPartida 
 * @param {Number} preguntaActual 
 * @function
 */
export const view4 = (puntosDeLaPartida = 0, preguntaActual = 0) => {
  puntosDeLaPartida = puntosDeLaPartida + preguntaActual * 3;
  preguntaActual = preguntaActual + 1;

  let randomQuestionsLevel = randomQuestionByLevel(preguntaActual);

  if (preguntaActual > 5) {
    alert("¡ganaste! puntos ganados: " + puntosDeLaPartida);
    saveScore(puntosDeLaPartida);
    window.location.reload();
  }

  if (preguntaActual > 1) {
    refreshRender();
  }

  containers(puntosDeLaPartida, randomQuestionsLevel, preguntaActual);
};
