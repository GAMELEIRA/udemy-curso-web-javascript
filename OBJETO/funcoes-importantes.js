/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 02:23
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES IMPORTANTES DO JS
 */

const pessoa = {

    nome: "Rebeca",

    idade: 2,

    peso: 13

}

console.log(Object.keys(pessoa));//RETORNA UMA LISTA COM AS CHAVES DO OBJETO

console.log(Object.values(pessoa));//RETORNA UMA LISTA COM OS VALORES DO OBJETO

console.log(Object.entries(pessoa));//RETORNA UMA LISTA COM OS VALORES DO OBJETO EM UM ARRAY

Object.entries(pessoa).forEach(element => {

    console.log(`${element[0]}: ${element[1]}`);

});

Object.defineProperty(pessoa, "dataNascimento", {

    enumerable: true,

    writable: true,

    value: {

        dia: "27",

        mes: "04",

        ano: "1999"

    }

}); //DEFINE UMA NOVA PROPRIEDADE EM PESSOA

console.log(pessoa);

const dest = { a: 1 };

const o1 = { b: 2 };

const o2 = {a:{ c: 3, a: 4 }};

const obj = Object.assign(dest, o1, o2); //CONCATENA Objetos

console.log(obj);

Object.freeze(obj);

obj.c = 1234;

console.log(obj);