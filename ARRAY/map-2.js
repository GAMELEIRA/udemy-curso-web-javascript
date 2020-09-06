/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 19: 57
 * FINALIDADE DE PROGRAMA: ENTENDER MAP
 */

const carrinho = [

    '{"nome": "Borracha", "preco": 3.45}',

    '{"nome": "Caderno", "preco": 13.90}',

    '{"nome": "kit Lápis", "preco": 41.22}',

    '{"nome": "Caneta", "preco": 7.50}',

]

const listaPrecos = carrinho.map((item, indice, array) => {

    const obj = JSON.parse(item);

    let {preco} = obj;

    return preco;

})

console.table(listaPrecos);