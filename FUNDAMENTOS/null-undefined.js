/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 00:31
 * FINALIDADE DE PROGRAMA: APRESENTAR AS ESPECIFICIDADES DO NULL E UNDEFINED
 */ 

let valor;

console.log(valor) //RETORNA UNDEFINED OU SEJA NAO FOI INICIALIZADA

valor = null //NAO TEM VALOR E NAO ESTA APONTANDO PARA NENHUM ENDERECO DE MEMORIA

console.log(valor); //EXIBE O NULL

// console.log(valor.toString()); //NAO E POSSIVEL REALIZAR OPERACOES EM VARIAVEIS NULAS

const produto = {}

console.log(produto.preco); //RETORNA UNDEFINED POIS NAO EXISTE A PROPRIEDADE PRECO NO OBJ produto

console.log(produto);

produto.preco = 3.50;

console.log(produto);

produto.preco = undefined; //EVITAR ATRIBUIR UNDEFINED

console.log(!!produto.preco);

delete produto.preco //ROMOVE O ATRIBUTO DO OBJ

console.log(produto);

produto.preco = null;

console.log(!!produto.preco);

console.log(produto);

let numero = 90.8989;

console.log(typeof numero.toFixed(3));