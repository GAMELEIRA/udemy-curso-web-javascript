/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 04:15
 * FINALIDADE DE PROGRAMA: TRABALHAR COM A ESTRUTURA DE REPETICAO DO WHILE
 */

function getInteiroAleatorioEntre(min, max) {

    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);

}

let opcao = 0;

do {

    opcao = getInteiroAleatorioEntre(-1, 10);

    console.log(`Opção escolhida foi ${opcao}`);

} while (opcao != -1);

console.log("Até a próxima!");