/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 24/08/2020
 * HORA: 13:04
 * FINALIDADE DE PROGRAMA: APRESENTAR O TEMPLATE STRING PARA CONCATENAR STRINGS
 */ 

const nome = 'Gabriel';

const concatenacao = "Olá, " + nome + '!';

//TEMPLATE STRING E O USO DE CRASES COM O SIFRAO ABRE E FEECHA CHAVES
const template = `
Olá, 
${nome}
`;

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1} `);

const up = texto => texto.toUpperCase(); // A FUNCAO toUpperCase AUMENTA RETORNA A STRING COM TODAS AS LETRAS MAIUSCULAS

console.log(`Ei... ${up('cuidado')}!`);