/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 04:34
 * FINALIDADE DE PROGRAMA: TRABALHAR COM MODULOS EXTERNOS E IMPORTACOES
 */

 const moduloA = require("../../modulo-a");

 console.log(moduloA);

 const c = require('./PASTA-C');

 console.log(c.ola2);

 const http = require("http");

 http.createServer((req, res) => {

    res.write("Bom dia!");

    res.end()

 }).listen(8080);