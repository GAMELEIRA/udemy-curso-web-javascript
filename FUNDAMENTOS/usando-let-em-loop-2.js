/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 02:14
 * FINALIDADE DE PROGRAMA: APRESENTAR CONCEITOS RELACIONADOS A UTILIZACAO DE VARIAVEIS
 */

const funcs = [];

for(let i = 0; i < 10; i++){

   funcs.push(function () {

       console.log(i)
       
   })

}

funcs[2](); //RETORNA 2

funcs[8](); //RETORNA 8

//ISSO ACONTECE POIS O LET POSSUI ESCOPO DE BLOCO