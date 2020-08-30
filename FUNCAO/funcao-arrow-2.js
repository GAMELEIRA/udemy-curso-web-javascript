/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20:15
 * FINALIDADE DE PROGRAMA: TRABALHAR COM FUNCOES ARROW
*/

function Pessoa() {

    this.idade = 0;

    setInterval(() => { 

        this.idade++;

        console.log(this.idade);
        
    }, 1000)

}

new Pessoa;