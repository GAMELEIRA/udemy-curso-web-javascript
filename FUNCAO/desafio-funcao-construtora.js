/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 23: 44
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCAO CONSTRUTORA
*/

function Pessoa(nome) {

    this.nome = nome;

    this.falar = function () {

        console.log(`Meu nome é ${this.nome}`);

    }

}

const p1 = new Pessoa("João");

p1.falar();