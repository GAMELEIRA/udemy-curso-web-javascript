/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 19: 08
 * FINALIDADE DE PROGRAMA: ENTENDER FOREACH
 */

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach((nome, indice, array) => {

    console.log(`${indice + 1}) ${nome}`)

    console.log(array);

});

const exibirAprovados = aprovados => console.log(aprovado);

aprovados.forEach(exibirAprovados); 