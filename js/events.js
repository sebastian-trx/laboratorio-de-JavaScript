import { view4 } from "./view4.js";
import { saveScore } from "./saveScore.js";

export const respuestaBoton = (answer, puntosDeLaPartida, preguntaActual) => {
  if (answer) {
    view4(puntosDeLaPartida, preguntaActual);
  } else {
    alert("perdiste, vuelve a intentarlo");
    window.location.reload();
  }
};

export const finalizarJuego = (puntosDeLaPartida) => {
  saveScore(puntosDeLaPartida)
  alert("has finalizado el juego, puntos almacenados");
  window.location.reload();
};
