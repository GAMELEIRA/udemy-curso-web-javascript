/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 06:17
 * FINALIDADE DE PROGRAMA: APRESENTAR O ARRAY arguments
 */

function soma() {

    let soma = 0;

    for (i in arguments) {

        soma += ((typeof arguments[i]) == "number") ? arguments[i] : 0;

    }

    return soma;

}

console.log(soma());

console.log(soma(1));

console.log(soma(1.1, 2.2, 3.3));

console.log(soma(1.1, 2.2, "Teste"));