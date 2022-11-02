// Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital. Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais controle sobre os valores dos produtos vendidos. Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

// Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores. Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

// A sua função/método deverá receber uma lista vendas agrupadas por vendedores, (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor (e.g. [100, 300]).

// Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.
function retornaMenorEMaiorValorDeVendas(tickets) {
  let maior = 0;
  let menor = 500;
  tickets.forEach(function (item) {
    item.forEach(function (element) {
      if (element > maior && element <= 500) maior = element;
      if (element < menor && element >= 20) menor = element;
    });
  });
  console.log(maior, menor);
  return [menor, maior];
}

// let assert = require("chai").assert;
// describe('Retorna Menor E Maior Valor De Vendas', function() {
//   it('Retorna O Menor E Maior Valor De Vendas', function() {
//     assert.deepEqual(retornaMenorEMaiorValorDeVendas([[200,100],[300]]), [100,300]);
//   });
// });
