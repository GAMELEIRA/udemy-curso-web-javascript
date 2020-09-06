/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 22: 31
 * FINALIDADE DE PROGRAMA: ENTENDER REDUCE
 */

const alunos = [

    {
        nome: "João",

        nota: 10,

        bolsista: true

    },

    {
        nome: "Maria",

        nota: 10,

        bolsista: false

    },

    {
        nome: "Pedro",

        nota: 10,

        bolsista: false

    },


    {
        nome: "Ana",

        nota: 10,

        bolsista: false

    },

]

const verificarTurmaBolsista = (turma) => turma.map((aluno) => aluno.bolsista).reduce((acumulador, nota, indice, array) => acumulador && nota);

const verificarUmBolsista = (turma) => turma.map((aluno) => aluno.bolsista).reduce((acumulador, nota, indice, array) => acumulador || nota);

console.log(verificarUmBolsista(alunos));