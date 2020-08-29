/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 04:03
 * FINALIDADE DE PROGRAMA: APRESENTAR O COMPORTAMENTO DO DESTRUCTURING EM ARRAYS
 */

const [a] = ["52"];

console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];

console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];

console.log(nota);