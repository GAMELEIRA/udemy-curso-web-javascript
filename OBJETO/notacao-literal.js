/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 02:23
 * FINALIDADE DE PROGRAMA: TRABALHAR COM OBJETOS
 */

const a = 1;

const b = 2;

const c = 3;

const obj1 = { a: a, b: b, c: c }

const obj2 = { a, b, c }

console.log(obj1);

console.log(obj2);

const nomeAtr = "nota";

const valorAtr = 7.87;

const obj3 = {};

obj3[nomeAtr] = valorAtr;

console.log(obj3);

const obj4 = {[nomeAtr]: valorAtr};

console.log(obj4);

const obj5 = {

    funcao1: function() {},

    funcao2() {}

}

console.log(obj5);

