/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 04:36
 * FINALIDADE DE PROGRAMA: TRABALHAR COM A LEITURA DE ARQUVIOS
*/

const passo1 = (contexto, next) => {

    contexto.valor1 = "mid1";

    next();

}

const passo2 = (contexto, next) => {

    contexto.valor2 = "mid2";

    next();

} 

const passo3 = (contexto, next) => {

    contexto.valor3 = "mid3";

}

const exec = (contexto, ...midles) => {

    const execMidles = indice => {

        midles && indice < midles.length && midles[indice](contexto, () => execMidles(indice++));

    }

    execMidles(0);

}

const contexto = {}

exec(contexto, passo1, passo2, passo3);