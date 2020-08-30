/**
 * AUTOR: GABRIEL GAMELEIRA DOS SANTOS
 * DATA: 30/08/2020
 * HORA: 06:03
 * FINALIDADE DE PROGRAMA: APRESENTAR COMO PASSAR ARGUMENTOS
 */

function area(largura = 0, altura = 0) {

    const area = largura * altura;

    return (area < 20) ? area : console.log(`Valor acima do permitido ${area} m2`);

}

console.log(area(5, 5));

console.log(area(2));

console.log(area());

console.log(area(2, 3, 17, 22, 44));

console.log(area(5, 5));