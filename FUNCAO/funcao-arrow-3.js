/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20:30
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES ARROW
*/

//O THIS EM UMA FUNCAO ARROW SEMPRE IRA REFERENCIAR AO CONTEXTO EM QUE ELA FOI ESCRITA

const obj = {}

let comparaComThis = function (param) {

    console.log(param === this);

}

comparaComThis(global);

comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);

comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);

comparaComThisArrow(global);

comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);

comparaComThisArrow(obj);

comparaComThisArrow(module.exports);

