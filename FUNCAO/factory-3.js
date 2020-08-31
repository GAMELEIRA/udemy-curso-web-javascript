/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 23: 37
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES FACTORY
*/

class Pessoa {

    constructor(nome) {

        this.nome = nome;

    }

    falar() {

        console.log(`Meu nome é ${this.nome}`);

    }

}

const p1 = new Pessoa("João");

p1.falar();

const criarPessoa = nome => {

    return {

        falar: () => console.log(`Meu nome ${nome}`)

    }

}

const p2 = criarPessoa("João");

p2.falar();