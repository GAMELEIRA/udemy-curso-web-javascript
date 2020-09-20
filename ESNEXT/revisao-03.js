/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 19: 54
 * FINALIDADE DE PROGRAMA: REVISAR CONCEITOS DOS NOVOS RECURSOS DO ECMASCRIPT
*/

const pessoa = { nome: "Gabriel", sobrenome: "Gameleira" }

console.log(Object.values(pessoa));

console.log(Object.entries(pessoa));

const nome = "Carla";

const pessoa02 = {

    nome,

    ola() {

        console.log("Olá!");

    }

}

console.log(pessoa02.nome, pessoa02.ola());

class Animal {}

class Cachorro extends Animal {

    falar() {

        return "Au Au!";

    }

}

console.log(new Cachorro().falar());