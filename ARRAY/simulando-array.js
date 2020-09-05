/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 16:46
 * FINALIDADE DE PROGRAMA: ENTENDER A NOTACAO DE DECLARACAO DE ARRAY E ALGUMAS FUNCOES
 */

const quaseArray = {

    0: "Gabriel",

    1: "Gameleira",

    3: "dos",

    4: "Santos"

}

console.log(quaseArray);

Object.defineProperty(quaseArray, "toString", {

    value: () => Object.values(this),

    enumerable: false

});

console.log(quaseArray[0]);

const meuArray = new Array("Gabriel", "Ana", "Bia");

console.log(quaseArray.toString(), meuArray);

console.log(typeof meuArray);

console.log(meuArray == Array);

console.log(meuArray == Object);

console.log(typeof quaseArray);

console.log(quaseArray == Array);

console.log(quaseArray == Object);
