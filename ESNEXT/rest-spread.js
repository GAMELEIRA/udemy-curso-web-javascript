/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 20: 33
 * FINALIDADE DE PROGRAMA: ENTENDER OS OPERADORES REST E SPREAD
*/

//SPREAD
const funcionario = { nome: "Maria", salario: 123456789 };

const clone = { ativo: true, ...funcionario }

console.log(clone);

const grupoA = ["João", "Pedro", "Gloria"];

const grupoFinal = ["Maria", "Rafaela", ...grupoA];

console.log(grupoFinal);

//REST
function rest(...rest) {

    console.log(rest);

}

rest("Gabriel", "Gameleira");