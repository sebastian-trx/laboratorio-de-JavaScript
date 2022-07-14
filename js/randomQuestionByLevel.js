import { questions } from "./Questions.js";

export const randomQuestionByLevel = (preguntaActual) => {
  let filteredByLevel = questions.filter((item) => item.level === preguntaActual);
  let random = Math.round(Math.random() * (filteredByLevel.length - 1 - 0) + 0);
  return filteredByLevel[random];

};

