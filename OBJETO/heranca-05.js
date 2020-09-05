/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 17:03
 * FINALIDADE DE PROGRAMA: TRABALHAR COM HERANCA
 */


console.log(typeof String);

console.log(typeof Array);

console.log(typeof Object);

String.prototype.reverse = function () {

    return this.split("").reverse().join("");

}

console.log("Escola COD3R".reverse());

Array.prototype.first = function () {

    return this[0];

}

console.log([1, 2, 3, 4, 6].first());

String.prototype.toString = () => "LASCOU TUDO!";

console.log("OIII".reverse());