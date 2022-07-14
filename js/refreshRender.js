export const refreshRender = () => {
    let containerAntiguo = document.querySelector(".columna1-container");
      containerAntiguo.parentNode.removeChild(containerAntiguo);
    
      let containerAntiguo2 = document.querySelector(".columna2-container");
      containerAntiguo2.parentNode.removeChild(containerAntiguo2);
}