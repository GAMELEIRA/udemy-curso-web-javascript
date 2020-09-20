/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 06:13
 * FINALIDADE DE PROGRAMA: ENTENDER O OBJETO GLOBAL
 */

require('./global');

console.log(global.MinhaApp.saudacao());

console.log(global.MinhaApp.nome);

global.MinhaApp.nome = "OPAAA";

console.log(global.MinhaApp.nome);
