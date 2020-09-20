/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 03:47
 * FINALIDADE DE PROGRAMA: TRABALHAR COM IMPORTACAO DE INSTRUCOES ENTRE MODULOS
 */

 const moduloA = require("./modulo-a");

 const moduloB = require("./modulo-b");

 console.log(moduloA.ola);

 console.log(moduloA.bemVindo);

 console.log(moduloA.ateLogo);

 console.log(moduloA);

 console.log(moduloB.bomDia);

 console.log(moduloB.boaNoite());

 console.log(moduloB);