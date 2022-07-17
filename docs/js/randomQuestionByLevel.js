import { questions } from "./Questions.js";

/**
 * Esta funcion filtra por nivel el arreglo de preguntas "questions", posteriormente genera un numero aleatorio 
 * el cual será introducido como indice del arreglo "filteredByLevel" retornando así un objeto aleatorio 
 * @function
 * @param {number} preguntaActual numero de la pregunta actual del juego
 * @returns {{questionTitle: "string", answerOptions: Array, level: number, categoyId: string}}
 */

export const randomQuestionByLevel = (preguntaActual) => {
  let filteredByLevel = questions.filter(
    (item) => item.level === preguntaActual
  );
  let random = Math.round(Math.random() * (filteredByLevel.length - 1 - 0) + 0);
  return filteredByLevel[random];
};
