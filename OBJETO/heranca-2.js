/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 18:19
 * FINALIDADE DE PROGRAMA: TRABALHAR COM HERANCA
 */

const avo = { time: "Corinthians" };

const pai = { __proto__: avo, mulher: "Giovanna" };

const filho = { __proto__: pai, filho: "Dalessandro" };

Object.setPrototypeOf(pai, avo);

console.log(filho.toString());

