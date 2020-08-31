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

 console.log(ferrari.__proto__)

 console.log(ferrari.__proto__ === Object.prototype)

 console.log(volvo.__proto__ === Object.prototype)

 console.log(Project.prototype._proto__ === null)