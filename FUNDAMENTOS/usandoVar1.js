/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 01:25
 * FINALIDADE DE PROGRAMA: APRESENTAR CONCEITOS RELACIONADOS A UTILIZACAO DE VARIAVEIS
 */

{
    {
        {
            var sera = 'Será???'; //var NAO POSSUI ESCOPO DE BLOCO


            console.log(sera.concat(" Bloco mais interno!"));
        }
    }
}

console.log(sera.concat(" Bloco global!"));

function teste() {
    
    var local = 123;

    console.log("Dentro da função ".concat(local));

}

teste();

console.log("Fora da função ".concat(local));