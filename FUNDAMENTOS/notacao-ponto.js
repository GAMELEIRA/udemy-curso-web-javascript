/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 03:15
 * FINALIDADE DE PROGRAMA: APRESENTAR O A SINTAXE DA NOTACAO PONTO
 */ 

 console.log(typeof console);

 console.log(Math.ceil(6.1));

 const obj1 = {}

 obj1.nome = "Bola";

//  obj1["time"] = "Corinthians";

console.log(obj1.nome);


//FUNCAO QUE INSTANCIA UM Obj
function Obj(nome) {

    this.nome = nome;

    this.exec = function () {

        console.log("Exec...");

    }

}

const obj2 = new Obj("Gameleira");

const obj3 = new Obj("Gameleirinha");

console.log(obj2.nome);

console.log(obj3.nome);

obj3.exec();