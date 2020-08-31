/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 02:23
 * FINALIDADE DE PROGRAMA: TRABALHAR COM GETTS E SETS
 */

const sequencia = {

    _valor: 1,

    get valor() {

        return this._valor++

    },

    set valor(valor) {

        if (valor > this._valor) {

            this._valor = valor;

        }

    }

}

console.log(sequencia.valor, sequencia.valor);

console.log(sequencia.valor, sequencia.valor = 1000);

console.log(sequencia.valor, sequencia.valor = 9000);

function teste1() {

    return this === global;

}

const teste2 = () => this === module.exports;

function teste3() {

    (function teste4() {

        console.log(this === module.exports);

    })();

}

function teste5() {

    this.idade = 1;

    return function teste4() {

        console.log(++idade);

    }.bind(teste5);

}

console.log(teste1());

console.log(teste2());

teste3();

const t = teste5();

t();