/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 29/08/2020
 * HORA: 02:22
 * FINALIDADE DE PROGRAMA: APRESENTAR UMA ESTRUTURA DE TRATAMENTO DE ERROS
 */


const tratarErroELancar = (e) => {

    //CRIEI A MENSAGEM DE ERRO
    throw new Error("Não foi possível processar! ".concat(e));

}

const imprimirNomeGritado = (obj) => {

    //TENTE
    try {

        console.log(obj.name.toUpperCase().concat("!!!"));

    //NAO CONSEGUIU
    } catch (e) {

        tratarErroELancar(e);
        
    //NO FIM
    } finally {

        console.log("Final");

    }

}

const obj = {nome: "Gameleira"}

imprimirNomeGritado(obj);

console.log("OIIII");