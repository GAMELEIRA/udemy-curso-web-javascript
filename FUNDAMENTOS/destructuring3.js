/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 04:03
 * FINALIDADE DE PROGRAMA: APRESENTAR O COMPORTAMENTO DO DESTRUCTURING EM FUNCOES
 */

function rand({ min = 0, max = 1000 } = {}) {

    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);

}

const obj = { max: 50, min: 40 }

console.log(rand(obj));

console.log(rand({min: 955}));

console.log(rand({}));

// console.log(rand());