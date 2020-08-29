/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 01:25
 * FINALIDADE DE PROGRAMA: APRESENTAR CONCEITOS RELACIONADOS A FUNCOES
 */ 

 //ARMAZENANDO UMA FUNCAO EM UMA VARIAVEL
 const imprimirSoma = function (a, b){

    console.log(a + b);

 }

 imprimirSoma(2, 3);

 //FUNCAO ARROW
const soma = (a, b) => {

    return a + b;

}

//FUNCAO ARROW COM RETORNO IMPLICITO
const subtrair = (a, b) => a - b;

console.log(subtrair(5, 2));

const imprimir2 = a => console.log(a);

imprimir2('Legal!!!');

