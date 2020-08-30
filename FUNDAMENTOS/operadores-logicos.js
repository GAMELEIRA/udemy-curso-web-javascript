/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 05:22
 * FINALIDADE DE PROGRAMA: TRABALHAR COM OS OPERADORES LOGICOS
*/

function compras(trabalho1, trabalho2) {

    const compraSorvete = trabalho1 || trabalho2;

    const comprarTv50 = trabalho1 && trabalho2;

    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise

    const comprarTv32 = trabalho1 |= trabalho2;

    const manterSaudavel = !compraSorvete;

    return { compraSorvete, comprarTv50, comprarTv32, manterSaudavel };

}

console.log(compras(true, true));

console.log(compras(true, false));

console.log(compras(false, true));

console.log(compras(false, false));