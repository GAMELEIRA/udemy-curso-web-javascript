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

        bolsista: false
    },

    {
        nome: "Maria",

        nota: 10,

        bolsista: true

    },

    {
        nome: "Pedro",

        nota: 10,

        bolsista: false

    },


    {
        nome: "Ana",

        nota: 10,

        bolsista: true

    },

]

const resultado = alunos.map(a => a.nota).reduce((acumulador, valorAtual) => {

    console.log(acumulador, valorAtual);

    return acumulador + valorAtual ;

});

console.log(resultado);