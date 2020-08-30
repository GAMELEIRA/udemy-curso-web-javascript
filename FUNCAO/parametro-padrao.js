/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 06:32
 * FINALIDADE DE PROGRAMA: APRESENTAR COMO TRATAR PARA VALORES PADROES NOS PARAMETROS EM CHAMADAS DE FUNCOES
 */


//ESTRATEGIA 1
function soma1(a, b, c) {

    a = a || 0;

    b = b || 0;

    c = c || 0;

    return a + b + c;

}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

//ESTRATEGIA 2
function soma2(a, b, c) {

    a = a !== undefined ? a : 0;

    b = b !== undefined ? b : 0;

    c = c !== undefined ? c : 0;

    return a + b + c;

}

//ESTRATEGIA 3
function soma3(a, b, c) {

    a = 0 in arguments ? a : 0;

    b = 1 in arguments ? b : 0;

    c = 2 in arguments ? c : 0;

    return a + b + c;

}


//ESTRATEGIA 4
console.log((function soma4(a, b, c) {

    a = isNaN(a) ? 0 : a;

    b = isNaN(b) ? 0 : b;

    c = isNaN(c) ? 0 : c;

    return a + b + c;

})(10, 90, 9));


//VALOR PADRAO 2015
function soma5(a = 0, b = 0, c = 0) {

    return a + b + c;

}

console.log(soma5(2, 8, 5));