/*
Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustivel (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2]
*/
function ordenarArray(array) {
  return array.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}

function ultimaParada(combustivel, consumo, array) {
  arrayOrdenado = ordenarArray(array);
  quilometragemTotal = combustivel * consumo;

  ultimoElementoMenor = arrayOrdenado[0];
  for (var i = 0; i < arrayOrdenado.length; i++) {
    element = arrayOrdenado[i];
    if (element == ultimoElementoMenor && quilometragemTotal < element) {
      return -1;
    }
    if (quilometragemTotal < element) {
      return ultimoElementoMenor;
    } else if (quilometragemTotal == element) {
      return quilometragemTotal;
    } else if (quilometragemTotal > element) {
      ultimoElementoMenor = element;
    }
  }
  return ultimoElementoMenor;
}

console.log(ultimaParada(2, 4, [2, 15, 22, 10.2]));

// let assert = require("chai").assert;
// describe("Ultima Parada", function () {
//   it("Calcula O Ultimo Posto De Combustivel Na Autonomia", function () {
//     assert.equal(ultimaParada(2, 8, [2, 15, 22, 11]), 15);
//   });
// });
