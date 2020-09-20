/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 05:49
 * FINALIDADE DE PROGRAMA: FUNCAO FACTORY QUE RETORNAR UM OBJETO
 */

module.exports = () => {

    return {

        valor: 1,

        inc() {

            this.valor++;

        }


    }

}