/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 04:36
 * FINALIDADE DE PROGRAMA: TRABALHAR COM A ESCRITA DE ARQUVIOS
*/

const fs = require('fs');

const produto = {

    nome: "Celular",
    
    preco:1245.99,
    
    desconto: 0.15

}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), erro => {

    if (erro) throw Error `Deu merda ${erro}`;

    else console.log("Deu certo!");

});