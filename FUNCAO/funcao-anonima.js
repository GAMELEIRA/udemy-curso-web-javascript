/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20:56
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES ANONIMAS
*/

const soma = function (x, y) {

    return x + y;

}

const imprimirResultado = function (a, b, operacao = soma) {

    console.log(operacao(a, b));

}

imprimirResultado(3, 4);

imprimirResultado(3, 4, soma);

imprimirResultado(3, 4, function (x, y) {

    return x - y;

})

imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {

    falar: function() {

        console.log("Opa");

    }

}

pessoa.falar();