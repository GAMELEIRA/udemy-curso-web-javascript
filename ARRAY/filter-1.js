/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 22: 10
 * FINALIDADE DE PROGRAMA: ENTENDER FILTER
 */

const produtos = [

    { nome: 'Borracha', preco: 3.45, fragil: true },

    { nome: 'Caderno', preco: 13.90, fragil: true },

    { nome: 'kit Lápis', preco: 41.22, fragil: true },

    { nome: 'Caneta', preco: 7.50, fragil: true },

]

console.log(produtos.filter((item, index, array) => {

    return item.preco > 30 && item.fragil;

}))