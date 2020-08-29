/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 02:37
 * FINALIDADE DE PROGRAMA: APRESENTAR O A SINTAXE CHAVE VALOR
 */ 

 const saudacao = 'OPA'; //CONTEXTO LEXICO 1. LOCAL A ONDE A VARIVEL FOI DEFINIDA FISICAMENTE

 function exec() {

    const saudacao = "FAAAALLLLAA FELA" //CONTEXTO LEXICO 2.

    return saudacao; 
 }

 console.log(saudacao);

 console.log(exec());

 const cliente = {

    nome: "Pedro",

    idade: 32,

    peso: 90,

    endereco: {

        logradouro: "Rua muito legal",

        numero: 123
    }

 }

 console.log(cliente);