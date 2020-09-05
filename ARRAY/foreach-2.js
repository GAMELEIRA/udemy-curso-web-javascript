/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 05/09/2020
 * HORA: 19: 08
 * FINALIDADE DE PROGRAMA: ENTENDER FOREACH
 */

Array.prototype.forEach2 = (funcao) => {

    for (let i = 0; i < this.length; i++) {

        funcao(this[i], i, this);

    }

}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach()

aprovados.forEach2()