/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 23: 23
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES FACTORY
*/

function criarProduto(name, price) {

    return {

        name,

        preco,

        desconto: 0.1

    }

 }

 console.log(criarProduto("Notebook", 2199.49));

 console.log(criarProduto("iPad", 1199.49));