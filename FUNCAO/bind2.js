/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20: 00
 * FINALIDADE DE PROGRAMA: APRESENTAR AS ANOMALIAS DO THIS E COMO FIXAR O THIS USANDO A FUNCAO bind
*/

function Pessoa() {

    this.idade = 0;

    const self = this;

    setInterval(function () {

        console.log(this.idade++);

    }.bind(self), 1000)

}

new Pessoa;