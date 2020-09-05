/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 17:59
 * FINALIDADE DE PROGRAMA: TRABALHAR COM HERANCA
 */


 const ferrari = {

    modelo: 'F40',

    velMax: 324

 }

 const volvo = {

    modelo: "V40",

    velMax: 200

 }

 console.log(ferrari.__proto__) //PROTOTYPE

 console.log(ferrari.__proto__ === Object.prototype) //TRUE

 console.log(volvo.__proto__ === Object.prototype) //TRUE

 console.log(Object.prototype.__proto__ === null) //TRUE