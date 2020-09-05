/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 16:46
 * FINALIDADE DE PROGRAMA: ENTENDER A NOTACAO DE DECLARACAO DE ARRAY E ALGUMAS FUNCOES
 */

console.log(typeof Array);

console.log(typeof new Array);

console.log(typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");

console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];

console.log(aprovados[0]);

console.log(aprovados[1]);

console.log(aprovados[2]);

console.log(aprovados[3]);

aprovados[3] = "Paulo";

aprovados.push("Abia");

console.log(aprovados.length);

aprovados[9] = "Rafael";

console.log(aprovados.length);

console.log(aprovados[70] === undefined);

console.log(aprovados[8] === null);

console.log(aprovados);

aprovados.sort(); //ORDENA O ARRAY POR ORDEM

console.log(aprovados);

delete aprovados[1];

console.log(aprovados[1]);

console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Ana"];

                 //POSICIONA NO INDICE //QUANITDADE QUE DESEJA EXCLUIR A PARTIR DAQUELE INDICE //VALORES QUE DESEJA INCLUIR 
aprovados.splice(1, 0, "Roi");//ADICIONA OU EXCLUI ELEMENTOS DE UM ARRAY

console.log(aprovados);
