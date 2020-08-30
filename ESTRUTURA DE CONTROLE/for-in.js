/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 04:25
 * FINALIDADE DE PROGRAMA: TRABALHAR COM A ESTRUTURA DE REPETICAO FOR IN
 */

 const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for( i in notas){

    console.log(notas[i]);

}

const pessoa = {

    nome: "Ana",

    sobrenome: "Silva", 

    idade: 29,

    peso: 64

}

for(let atributo in pessoa){

    console.log(`Atributo = ${atributo} ` + pessoa[atributo]);


}