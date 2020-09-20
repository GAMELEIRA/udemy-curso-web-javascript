/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 04:36
 * FINALIDADE DE PROGRAMA: TRABALHAR COM MODULOS EXTERNOS E IMPORTACOES
 */

 console.log(module.exports);

 console.log(module.exports === this);

 console.log(module.exports === exports);

 this.a = 1;

 exports.b = 2;

 module.exports.c = 3;

 exports = null;

 console.log(module.exports);

 exports = {

    nome: "Test"

 }

 console.log(module.exports);

 module.exports = {

   public: true

 }