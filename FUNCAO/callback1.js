/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20:56
 * FINALIDADE DE PROGRAMA: TRABALHAR COM CALLBACKS
*/

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimirNome(nome, indice) {

    console.log(`${indice + 1}. ${nome}`)

}

fabricantes.forEach(imprimirNome);

fabricantes.forEach((nome, indice) => {

    console.log(nome, indice);

});