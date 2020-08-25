/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 24/08/2020
 * HORA: 23:17
 * FINALIDADE DE PROGRAMA: APRESENTAR O TIPO NUMERICO EM JS E ALGUMAS FUNCOES
 */ 

const peso1 = 1.0;

const peso2 = Number('2.0'); //O CONSTRUTOR DA CLASSE Number TEM COMO OBJETIVO INSTANCIAR UM NUMERO PASSANDO UM VALOR STRING COMO ARGUMENTO 

const avaliacao1 = 9.871;

const avaliacao2 = 6.871;

let total = 0;

let media = 0;

console.log(peso1);

console.log(peso2);

console.log(Number.isInteger(peso1));//O METODO isInteger DA CLASSE NUMBER RETORNA TRUE EM CASO DO NUMERO PASSADO COMO ARGUMENTO FOR INTEIRO CASO CONTRARIO RETORNA FALSE

console.log(Number.isInteger(peso2));//O METODO isInteger DA CLASSE NUMBER RETORNA TRUE EM CASO DO NUMERO PASSADO COMO ARGUMENTO FOR INTEIRO CASO CONTRARIO RETORNA FALSE

total = avaliacao1 * peso1 + avaliacao2 * peso2; 

media = total / (peso1 + peso2);

console.log(media);
 
console.log(media.toFixed(2)); //A FUNCAO toFixed FIXA UM VALOR QUE SERA EXIBIDO BASEADO NO ARGUMENTO PASSADO PARA O PARAMETRO

console.log(media.toFixed(2).toString()); //A FUNCAO toString CONVERTE UM VALOR NUMERICO EM UM VALOR DO TIPO STRING

console.log(typeof media.toString());

console.log(typeof Number);