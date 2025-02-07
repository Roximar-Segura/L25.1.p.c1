/**
 * FÚTBOL
Conociendo los resultados de varios Juegos de tu equipo de fútbol, donde 1 es ganar y 0 es
perder, hacer un programa que indique el porcentaJe de Juegos que ganaste.
EJ. Resultados de 6 Juegos: 1, 1, 0, 1, 0, 1, 1
la salida requerida presenta el siguiente formato:
Ganaste el 66.67% de los Juegos
 */

import CL_Juego from "./CL_Juego.js";
import CL_Resultado from "./CL_Resultado.js";

let Juego1 = new CL_Juego(1);
let Juego2 = new CL_Juego(1);
let Juego3 = new CL_Juego(0);
let Juego4 = new CL_Juego(1);
let Juego5 = new CL_Juego(0);
let Juego6 = new CL_Juego(1);
let Juego7 = new CL_Juego(1);

let resul = new CL_Resultado()

resul.procesarJuegos(Juego1);
resul.procesarJuegos(Juego2);
resul.procesarJuegos(Juego3);
resul.procesarJuegos(Juego4);
resul.procesarJuegos(Juego5);
resul.procesarJuegos(Juego6);
resul.procesarJuegos(Juego7);

let salida = document.getElementById("salida");
salida.innerHTML =`
Se ganaron el ${(resul.porcGanado()).toFixed(2)}% de los Juegos
`
