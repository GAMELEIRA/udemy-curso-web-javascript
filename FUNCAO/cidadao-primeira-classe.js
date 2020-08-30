/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 06:03
 * FINALIDADE DE PROGRAMA: APRESENTAR FUNCOES
 */

//FUNCAO EM JS É FIRST-CLASS OBJECT (CITIZENS)

//CRIAR UMA FUNCAO DE FORMA LITERAL 
function fun1() { }

//ARMAZENAR EM UMA VARIAVEL
const fun2 = function () { }

//ARMAZENAR EM UMA ARRAY
const array = [function (a, b) { return a + b }, fun1, fun2];

console.log(array[0](2, 3));

//ARMAZENAR EM UM ATRIBUTO DE OBJ
const obj = {}

obj.falar = function () { return 'Opa' }

console.log(obj.falar());

//PASSAR UMA FUNCAO COMO PARAMETRO
function run(fun = function () { }) {

    fun()

}

run(function () {

    console.log("Executando...");

})

//UMA FUNCAO PODE CONTER UMA FUNCAO
function soma(a,  b) {

    return function (c) {

        console.log(a + b + c);
        
    }
    
}

soma(12, 56)(10);

const cincoMais = soma(2, 3);

cincoMais(9);