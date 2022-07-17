/**
 * Esta funcion guarda los puntos actuales de la partida en localStorage
 * @function
 * @param {number} puntosDeLaPartida puntos actuales de la partida
 * @returns {void}
 */
export const saveScore = (puntosDeLaPartida) => {
  let setPuntosAcumulados =
    puntosDeLaPartida + Number(localStorage.getItem("puntajeAcumulado"));
  localStorage.setItem("puntajeAcumulado", String(setPuntosAcumulados));
};
