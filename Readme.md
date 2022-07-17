

# CONCURSO DE PREGUNTAS Y RESPUESTAS 

## Acerca de

modelar un concurso de preguntas y respuestas, la intención es diseñar una solución que permita tener un banco de preguntas con diferentes opciones para una única respuesta, además cada pregunta debe estar en una categoría o un grupos de preguntas similares del mismo nivel, por cada ronda se deberá asignar un premio a conseguir, las rondas del juego son por nivel que van aumentando en la medida que el jugador gana premios.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM para correr el proyecto de manera local. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## Instrucciones

Para abrir y/o modificar el proyecto es necesario que descargues o clones el proyecto desde el repositorio https://github.com/sebastian-trx/laboratorio-de-JavaScript una vez dentro de la carpeta de archivos abre una terminal y ejecuta el comando `npm i` para instalar todas las dependencias, en la carpeta docs encontraras el index.html, los ficheros .js en la carpeta de js, el archivo de estilos en la carpeta css y por último la documentación generada por Jsdoc en la carpeta documentacion, para hacer actualizaciones a la documentacion del proyecto ingresa el comando `npm run documentacion`.


#### Tecnologías usadas:
- [ ] HTML
- [ ] CSS
- [ ] JavaScript


## Funcionalidades del proyecto

- El juego selecciona una pregunta de forma aleatoria de acuerdo al nivel de dificultad conforme el jugador avance el nivel de dificultad se incrementa.
- Si el jugador gana (responde 5 preguntas correctamente) o si se retira voluntariamente el acumulado de la partida se suma al puntaje historico en localStorage.
- Si el jugador falla en alguna pregunta pierde el acumulado del juego y se reinicia el juego.

## Dirección del proyecto
https://sebastian-trx.github.io/laboratorio-de-JavaScript/

## Documentación del proyecto

https://sebastian-trx.github.io/laboratorio-de-JavaScript/documentacion/



