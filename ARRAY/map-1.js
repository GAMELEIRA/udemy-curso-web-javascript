/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 19: 57
 * FINALIDADE DE PROGRAMA: ENTENDER MAP
 */

//O MAP TRANSFORMA OS VALORES DO ARRAY

//O ARRAY SERA DO MESMO TAMANHO COM OUTROS VALORES

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums);

//FOR COM PROPOSITO
let resultado = nums.map((valor, indice) => valor *= 2);

console.log(resultado);

const soma10 = e => e + 10;

const trilo = e => e * 3;

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);

