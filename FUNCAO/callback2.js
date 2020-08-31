/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 21:20
 * FINALIDADE DE PROGRAMA: TRABALHAR COM CALLBACKS
*/

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//SEM CALLBACK
let notasBaixas1 = [];

for (let i in notas) {

    if(notas[i] < 7) {

        notasBaixas1.push(notas[i]);

    }

}

console.log(notasBaixas1);

//COM CALLBACK
const notasBaixas2 = notas.filter((nota) => nota < 7);

console.log(notasBaixas2);

