/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20:02
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES ARROW
*/

//ARMAZENAR UMA FUNCAO ANONIMA EM UMA VARIAVEL
let dobro = function (a) {

    return 2 * a;

}

dobro = (a) => {

    return 2 * a;

}

dobro = a => 2 * a; //RETORNO IMPLICITO

console.log(dobro(Math.PI).toFixed(2));

let ola = function () {

    return 'Olá';

}

ola = () => 'Olá';

ola = _ => 'Olá';

console.log(ola());