/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 16:46
 * FINALIDADE DE PROGRAMA: ENTENDER A NOTACAO DE DECLARACAO DE ARRAY E ALGUMAS FUNCOES
 */

const pilotos = ["Vettel", "Alonso", "Raikonen", "Massa"];

pilotos.pop(); //REMOVE O ULTIMO ELEMENTO DO ARRAY

console.log(pilotos);

pilotos.push("Vertasppen"); //ADIONA UM ELEMENTO DEPOIS DA ULTIMA POSICAO

console.log(pilotos);

pilotos.shift(); //REMOVE A PRIMEIRA POSICAO

pilotos.unshift("Hamilton"); //ADIONA UM ELEMENTO NA PRIMEIRA POSICAO;

//POSICIONA NO INDICE //QUANITDADE QUE DESEJA EXCLUIR A PARTIR DAQUELE INDICE //VALORES QUE DESEJA INCLUIR 
pilotos.splice(2, 0, "Bottas", "Massa"); //ADICIONA OU EXCLUI ELEMENTOS DE UM ARRAY

console.log(pilotos);

pilotos.splice(3, 1)

console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2);//RETORNA UM NOVO ARRAY

console.log(algunsPilotos1);

//POSICIONA O ARRAY //INDICA O FIM 
const algunsPilotos2 = pilotos.slice(1, 4);

console.log(algunsPilotos2);

