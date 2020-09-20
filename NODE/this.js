/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 06:24
 * FINALIDADE DE PROGRAMA: ENTENDER O THIS
 */

 console.log(this === global);

 console.log(this === module);

 console.log(this == module.exports);

 console.log(this === exports);

 function logThis() {

    console.log("Dentro de uma função...");

    console.log(this === exports);

    console.log(this === module.exports);

    console.log(this === global);

 }

logThis();