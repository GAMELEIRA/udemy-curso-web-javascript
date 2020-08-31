/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 20:15
 * FINALIDADE DE PROGRAMA: ENTENDER O CONTEXTO LEXICO
*/

const valor = "Global";

const minhaFuncao = function minhaFuncao() {

    console.log(valor)

}

function exec() {

    const valor = "Local";

    minhaFuncao();

}

minhaFuncao.bind(exec);

exec();