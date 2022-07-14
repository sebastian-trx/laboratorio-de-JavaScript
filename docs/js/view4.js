import { randomQuestionByLevel } from "./randomQuestionByLevel.js";
import { saveScore } from "./saveScore.js";
import { refreshRender } from "./refreshRender.js";
import { containers } from "./containers.js";

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
