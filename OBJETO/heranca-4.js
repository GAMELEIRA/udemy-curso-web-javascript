/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 16:46
 * FINALIDADE DE PROGRAMA: TRABALHAR COM HERANCA
 */

function MeuObjeto() {}

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;

const obj2 = new MeuObjeto;

console.log(obj1.prototype === obj2.prototype); //OBJ CRIADOS POR MEIO DE UMA FUNCAO APONTAM PARA O MESMO PROTIPO

console.log(MeuObjeto.prototype === obj1.__proto__); //TRUE

MeuObjeto.prototype.nome = "Anônimo"

MeuObjeto.prototype.falar = function() {

    console.log(`Bom dia! Meu nome é ${this.nome}`);

}

obj1.nome = "Rafale";

obj2.falar();

const obj3 = {};

obj3.__proto__ = MeuObjeto.prototype;

obj3.nome = "Obj3";

obj3.falar();

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);

console.log(MeuObjeto.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);

console.log(Function.prototype.__proto__ === undefined);

console.log(Function.prototype.__proto__ === null);