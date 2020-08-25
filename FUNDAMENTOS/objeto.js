/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 25/08/2020
 * HORA: 14:06
 * FINALIDADE DE PROGRAMA: APRESENTAR O TIPO OBJETO E SUA NOTACAO
 */ 

const prod1 = {}; //DECLARACAO DE UM OBJETO

prod1.nome = "Celular Ultra Mega" //CRIACAO DE UM ATRIBUTO E ATRIBUICAO DE UM VALOR A ESSE ATRIBUTO

prod1.preco = 4998.90;

prod1['Desconto Legal'] = 0.40;

console.log(prod1);

const prod2 = {

    nome: "Camisa Polo",
    
    preco: 79.90,

    obj: {
        
        blabla: 1,

        pessoa: {

            nome: "Gabriel"
            
        }

    }

}

console.log(prod2);