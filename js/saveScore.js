export const saveScore = (puntosDeLaPartida) => {
  let setPuntosAcumulados =
    puntosDeLaPartida + Number(localStorage.getItem("puntajeAcumulado"));
  localStorage.setItem("puntajeAcumulado", String(setPuntosAcumulados));
};
