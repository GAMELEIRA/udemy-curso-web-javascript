/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 20/09/2020
 * HORA: 05:49
 * FINALIDADE DE PROGRAMA: BUSCAR A MULHER CHINESA COM O MENOR SALARIO
 */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require("axios");

const buscarMulheres = (funcionarios) => funcionarios.filter(funcionario => funcionario.genero == "F");

const buscarMulheresChinesas = (mulheres) => mulheres.filter(mulher => mulher.pais == "China");

const buscarMenorSalarioMulheresChinesas = (chinesas) => chinesas.reduce((chinesaAnterior, chinesaAtual) => (chinesaAnterior.salario <= chinesaAtual.salario)? chinesaAnterior: chinesaAtual);

axios.get(url).then(response => {

    const funcionarios = response.data;

   const mulheres = buscarMulheres(funcionarios)
   
   const mulheresChinesas = buscarMulheresChinesas(mulheres);

   const mulherChinesaSalarioMenor = buscarMenorSalarioMulheresChinesas(mulheresChinesas);

   console.log(mulherChinesaSalarioMenor);

})

