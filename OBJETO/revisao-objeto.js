/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 02:23
 * FINALIDADE DE PROGRAMA: TRABALHAR COM OBJETOS
 */

 const produto = new Object;

 produto.nome = "Cadeira";

 produto["Marca do produto"] = "Genérica"

 produto.preco = 220;

 console.log(produto);

 delete produto.preco;

 delete produto[`marca do produto`];

 console.log(produto);

 const carro = {

    modelo: "A4",

    valor: 89000,

    proprietario: {

        nome: "Raul",

        idade: 56,

        endereco: {

            logradouro: "Rua ABC",

            numero: 123

        }
        
    },

    condutores: [{
        
        nome: "Junior",

        idade:  19

    }, {

        nome: "Ana",

        idade: 42


    }],

    calcularValorSeguro: function(){}

 }

 carro.proprietario.endereco.numero = 1000;

 carro["proprietario"]["endereco"]["numero"];

 console.log(carro);

 delete carro.condutores;

 delete carro.proprietario.endereco;

 delete carro.calcularValorSeguro;

 console.log(carro);

 console.log(carro.condutores);

