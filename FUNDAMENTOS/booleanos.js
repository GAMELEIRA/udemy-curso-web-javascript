/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 13:17
 * FINALIDADE DE PROGRAMA: APRESENTAR O COMPORTAMENTO DO TIPO BOOLEANO
 */ 

let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

console.log(!!isAtivo);

console.log("Os verdadeiros...");

console.log(!!3);

console.log(!!-1);

console.log(!!' ');

console.log(!![]);

console.log(!!{});

console.log(!!Infinity);

console.log(!!(isAtivo = true));

console.log("Os falsos...");

console.log(!!0);

console.log(!!'');

console.log(!!null);

console.log(!!undefined);

console.log(!!NaN);

console.log(!!(isAtivo = false));

let nome = '';

console.log(nome || 'Desconhecido');