/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 31/08/2020
 * HORA: 02:23
 * FINALIDADE DE PROGRAMA: TRABALHAR COM OBJETOS
 */

//USANDO A FORMA LITERAL
const obj1 = {};

console.log(obj1);

//OBJECT EM JS
console.log(typeof Object, typeof new Object);

const obj2 = new Object;

console.log(obj2);

//FUNCOES CONSTRUTORAS
function Produto(nome, preco, desc) {

    this.nome = nome;

    this.getPrecoComDesconto = () => {

        return preco * (1 - desc);

    }

}

const p1 = new Produto("Caneta", 7.99, 0.15);

const p2 = new Produto("Notebook", 29998.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//FUNCAO FACTORY
function criarFuncionario(nome, salarioBase, faltas) {

    return {

        nome, 

        salarioBase,

        faltas, 

        getSalario() {

            return (salarioBase / 30) * (30 - faltas);

        }

    }

}

const f1 = criarFuncionario("João", 7980, 4);

const f2 = criarFuncionario("Maria", 11400, 1);

console.log(f1.getSalario(), f2.getSalario());


//OBJECT

const filha = Object.create(null);

filha.nome = "Ana";

console.log(filha);

//JSON
const fromJson = JSON.parse('{"info": "Sou um JSON" }');

console.log(fromJson);

Object.freeze(fromJson);//NAO E PERMITDO ALTERAR MAIS NENHUMA PROPRIEDADE DESSE OBJETO