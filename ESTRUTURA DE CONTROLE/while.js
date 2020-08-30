/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 03:55
 * FINALIDADE DE PROGRAMA: APRESENTAR A ESTRUTURA DE REPETICAO WHILE
 */

function getInteiroAleatorioEntre(min, max) {

    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);

}

let opcao = 0;

while(opcao != -1){

    opcao = getInteiroAleatorioEntre(-1, 10);

    console.log( `Opção escolhida foi ${opcao}`);

}

console.log("Até a próxima!");