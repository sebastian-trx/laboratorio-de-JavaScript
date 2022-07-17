/**
 * Esta funcion impide que se dupliquen las etiquetas div con la
 * clase ".columna1-container" y ".columna2-container" despues 
 * de la primera ronda en adelante
 * @function
 */

export const refreshRender = () => {
    let containerAntiguo = document.querySelector(".columna1-container");
      containerAntiguo.parentNode.removeChild(containerAntiguo);
    
      let containerAntiguo2 = document.querySelector(".columna2-container");
      containerAntiguo2.parentNode.removeChild(containerAntiguo2);
}