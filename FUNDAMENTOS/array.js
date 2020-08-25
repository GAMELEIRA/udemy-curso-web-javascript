/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 13:41
 * FINALIDADE DE PROGRAMA: APRESENTAR O TIPO ARRAY
 */ 

const valores = [7.7, 8.9, 6.3, 9.2 ]; //CRIACAO DO ARRAY

console.log(valores[0], valores[3]); //ACESSO DOS VALORES DO ARRAY POR MEIO DE INDICES

console.log(valores[4]);

valores[10] = 10; //ATRIBUICAO DE VALOR DE UM INDICE DE UM ARRAY

console.table(valores); 

console.log(valores.length); //A PROPRIEDADE length RETORNA O TAMANHO DO ARRAY

valores.push({id: 3}, false, null, 'teste'); //A FUNCAO push EMPURRA VALORES DE PARA UM ARRAY

console.log(valores);

console.log(valores.pop()); //A FUNCAO pop REMOVE A ULTIMA POSICAO DO ARRAY

delete valores[0]; //A PALAVRA RESERVADA delete REMOVE UM VALOR DO INDICE

console.log(valores);

console.log(typeof valores);