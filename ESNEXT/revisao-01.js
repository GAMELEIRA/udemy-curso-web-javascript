/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 19: 52
 * FINALIDADE DE PROGRAMA: REVISAR CONCEITOS DOS NOVOS RECURSOS DO ECMASCRIPT
*/

//LET CONST

{

    var a = 2

    let b = 3;

}

console.log(a);

try {

    console.log(b);

} catch (e) {

    console.log("Erro");

}

//TEMPLATE STRING
const produtos = 'iPad';

console.log(`${produtos} é 

caro`);

//DESTRUCTURING
const [l, e, ...tras] = "COD3R";

console.log(l, e, tras);

const [x, y] = [1, 2, 3];

console.log(x, y);

const { idade: i, nome } = { nome: "Ana", idade: 9 };

console.log(i, nome);
