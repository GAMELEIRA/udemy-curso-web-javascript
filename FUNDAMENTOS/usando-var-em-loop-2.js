/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 02:05
 * FINALIDADE DE PROGRAMA: APRESENTAR CONCEITOS RELACIONADOS A UTILIZACAO DE VARIAVEIS
 */

 const funcs = [];

 for(var i = 0; i < 10; i++){

    funcs.push(function () {

        console.log(i)
        
    })

 }

 funcs[2](); //RETORNA DEZ

 funcs[8](); //RETORNA DEZ

 //ISSO ACONTECE POIS O VAR NAO POSSUI ESCOPO DE BLOCO