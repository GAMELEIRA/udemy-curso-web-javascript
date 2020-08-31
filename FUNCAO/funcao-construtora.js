/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 22:14
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES CONSTRUTORAS
*/

function Carro(velocidadeMaxima = 200, delta = 5) {

    //ATRIBUTO INTERNO
    let velocidadeAtual = 0;

    //METODO PUBLICO
    this.acelerar = function () {

        if (velocidadeAtual + delta <= velocidadeMaxima) {

            velocidadeAtual += delta;

        } else {

            velocidadeAtual = velocidadeMaxima;

        }

    }

    this.getVelocidadeAtual = function () {

        return velocidadeAtual;

    }

   this.validarInstancia = function (instancia) {

        return this === instancia;

    }

}

const uno = new Carro();

uno.acelerar();

console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);

ferrari.acelerar();

ferrari.acelerar();

ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual());