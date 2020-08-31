/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 22: 36
 * FINALIDADE DE PROGRAMA: APRENDER A USAR O CLOSURE
*/

/**
 * CLOSURE E O ESCOPO CRIADO QUANDO UMA FUNCAO DECLARADA 
 * ESSE ESCOPO PERMITE A FUNCAO ACESSAR E MANIPULAR VARIAVEIS EXTERNAS A FUNCAO
 */

const x = "Global";

function fora() {

    const x = "Local";

    function dentro() {

        return x;

    }

    return dentro;

}

const minhaFuncao = fora();

console.log(minhaFuncao());