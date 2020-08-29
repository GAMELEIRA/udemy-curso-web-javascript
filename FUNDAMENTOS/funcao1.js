/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 01:05
 * FINALIDADE DE PROGRAMA: APRESENTAR CONCEITOS RELACIONADOS A FUNCOES
 */ 

 function imprimirSoma(a, b){

    console.log(a + b);

 }

 imprimirSoma(2, 3);

 imprimirSoma(2); //RETORNA NOT A NUMBER

 imprimirSoma(2, 3, 4, 5);

 imprimirSoma();

 //b SE NAO RECEBER VALOR RECEBE 0 
 function soma(a, b = 0){

    return a + b;

 }

 console.log(soma(3, 6));

 console.log(soma(2));