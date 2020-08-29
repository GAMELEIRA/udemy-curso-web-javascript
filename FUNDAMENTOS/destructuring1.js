/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 04:03
 * FINALIDADE DE PROGRAMA: APRESENTAR O COMPORTAMENTO DO DESTRUCTURING
 */


const pessoa = {

    nome: "Ana",

    idade: 5,

    endereco: {

        logradouro: "Rua ABC",

        numero: 100

    }

}

//EXTRAI DO OBJ PESSOA OS VALORES DOS ATRIBUTOS
const { nome, idade } = pessoa;

console.log(nome, idade);

const { nome: n, idade: i } = pessoa;

console.log(n, i);

const { sobrenome = "Desconhecido", bemHumorada = true } = pessoa;

console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;

console.log(logradouro, cep, numero);