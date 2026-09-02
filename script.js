const canvas = document.getElementById("avatar");

const ctx = canvas.getContext("2d");

const mensaje = document.getElementById("mensaje");


/* PALETA DE COLORES */

const colores = {

  O: "#202124",   // contorno oscuro
  D: "#555A64",   // cuerpo gris
  W: "#FAFAFA",   // rostro y pancita
  B: "#F5A9C5",   // mejillas rosadas
  F: "#F4A01B"    // pico y patitas

};


/* FRAME 1:
   PINGÜINO EN POSICIÓN NORMAL
*/

const normal = [

  "......OOOO......",
  "....OODDDDOO....",
  "...ODDDDDDDDO...",
  "..ODDWWWWWWDDO..",
  ".ODDWWWWWWWWDDO.",
  ".ODWWWWWWWWWWDO.",
  "ODDWWOWWWWOWWDDO",
  "ODWWBWWFFWWBWWDO",
  "ODWWWWWWWWWWWWDO",
  "ODDWWWWWWWWWWDDO",
  "ODDDWWWWWWWWDDDO",
  "ODDDWWWWWWWWDDDO",
  ".ODDDWWWWWWDDDO.",
  "..ODDDWWWWDDDO..",
  ".....FF..FF.....",
  "................"

];


/* FRAME 2:
   EL MISMO PINGÜINO
   CON SUS ALITAS LEVANTADAS
*/

const alitasArriba = [

  "......OOOO......",
  "....OODDDDOO....",
  "...ODDDDDDDDO...",
  "..ODDWWWWWWDDO..",
  ".ODDWWWWWWWWDDO.",
  ".ODWWWWWWWWWWDO.",
  "ODDWWOWWWWOWWDDO",
  "ODWWBWWFFWWBWWDO",
  "ODWWWWWWWWWWWWDO",
  "ODDWWWWWWWWWWDDO",
  ".DDDWWWWWWWWDDD.",
  "..DDWWWWWWWWDD..",
  "..ODDWWWWWWDDO..",
  "...ODDWWWWDDO...",
  ".....FF..FF.....",
  "................"

];


/* FUNCIÓN PARA DIBUJAR
   LOS PÍXELES EN EL CANVAS
*/

function dibujar(frame) {

  ctx.clearRect(
    0,
    0,
    16,
    16
  );


  frame.forEach((fila, y) => {

    [...fila].forEach((pixel, x) => {

      if (
        pixel !== "." &&
        colores[pixel]
      ) {

        ctx.fillStyle =
          colores[pixel];

        ctx.fillRect(
          x,
          y,
          1,
          1
        );

      }

    });

  });

}


/* DIBUJAMOS EL PINGÜINO
   CUANDO ABRE LA PÁGINA
*/

dibujar(normal);


/* INTERACCIÓN AL HACER CLIC */

canvas.addEventListener("click", function () {

  mensaje.textContent =
    "¡MELPUE está aleteando! 🐧💗";


  /* HACEMOS EL SALTITO */

  canvas.classList.remove("jump");

  void canvas.offsetWidth;

  canvas.classList.add("jump");


  /* ALTERNAMOS LOS DOS FRAMES */

  let movimientos = 0;


  const animacion =
    setInterval(function () {

      if (movimientos % 2 === 0) {

        dibujar(alitasArriba);

      } else {

        dibujar(normal);

      }


      movimientos++;


      /* DETENEMOS LA ANIMACIÓN */

      if (movimientos >= 8) {

        clearInterval(animacion);

        dibujar(normal);

        mensaje.textContent =
          "¡Haz clic otra vez! ✨";

      }

    }, 130);

});