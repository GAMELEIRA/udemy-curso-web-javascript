/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 04:39
 * FINALIDADE DE PROGRAMA: TRABALHAR COM AS PROPRIEDADES BREAK E CONTINUE
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in nums) {

    if(x == 5) break; //INTERROMPE 

    console.log(`x = ${nums[x]}`);

}

for(x in nums) {

    if(x == 5) continue; //ANULA A EXECUCAO ATUAL MAS NAO INTERROMPE AS DEMAIS

    console.log(`x = ${nums[x]}`);

}

//ROTULO
externo: for(a in nums) {

    for(b in nums) {

        if(a == 2 && b == 3) break externo;

        console.log(`Par = ${a},${b}`);

    }
}