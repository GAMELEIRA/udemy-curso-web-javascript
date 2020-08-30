/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 19: 43
 * FINALIDADE DE PROGRAMA: APRESENTAR AS ANOMALIAS DO THIS E COMO FIXAR O THIS USANDO A FUNCAO bind
*/

const pessoa = {

    saudacao: "Bom dia!",

    falar() {

        console.log(this.saudacao);

        // try {

        //     console.log(saudacao);

        // } catch (e) {

        //     console.log("Deu errado! ".concat(e));

        // }

    }

}

pessoa.falar();

const falar = pessoa.falar;

falar();

const falarDePessoa = pessoa.falar.bind(pessoa); //FIXA O THIS

falarDePessoa();