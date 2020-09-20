/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 19: 54
 * FINALIDADE DE PROGRAMA: REVISAR CONCEITOS DOS NOVOS RECURSOS DO ECMASCRIPT
*/

//ARROW FUNCTION
const soma = (a, b) => a + b;

console.log(soma(2, 3));

//THIS
const lexico1 = () => console.log(this === exports);

const lexico2 = () => lexico1.bind({});

lexico1();

lexico2();

//PARAMETRO DEFAULT
function log(texto = "Node") {

    console.log(texto);

}

log();

log("Sou mais forte!");

//OPERADOR REST
function total(...numeros) {

    let total = 0;

    numeros.forEach(n => total += n);

    return total;

}

console.log(total(2, 3, 4, 5));