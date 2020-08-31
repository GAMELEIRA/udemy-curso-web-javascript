/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 23: 19
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES FACTORY
*/

const prod1 = {

    nome: "...",

    preco: 45

}

const prod2 = {

    nome: "...",

    preco: 123
    
}

//FACTORY SIMPLES
function criarPessoa() {

    return {

        nome: "Ana",

        sobrenome: "Silva"

    }

}

console.log(criarPessoa());