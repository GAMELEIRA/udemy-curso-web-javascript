/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 22: 31
 * FINALIDADE DE PROGRAMA: ENTENDER FILTER
 */

Array.prototype.filter2 = function (funcao) {

    let resultado = [];

    let valor;

    for (let i = 0; i < this.length; i++) {

        valor = funcao(this[i], i, this);

        (valor) ? resultado.push(this[i]) : "";

    }

    return resultado;

}

const produtos = [

    { nome: 'Borracha', preco: 3.45, fragil: true },

    { nome: 'Caderno', preco: 13.90, fragil: true },

    { nome: 'kit Lápis', preco: 41.22, fragil: true },

    { nome: 'Caneta', preco: 7.50, fragil: true },

]

console.log(produtos.filter2((item, index, array) => {

    return item.preco > 30 && item.fragil;

}))