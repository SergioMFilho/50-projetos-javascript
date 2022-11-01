/*
Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

Exemplo:
Combustivel (em litros): 2
Consumo médio (km/l): 8
Postos de Gasolina (km): [2, 15, 22, 10.2]
*/
combustivel = 0;
consumo = 0;
postosDeGasolina = [2, 15, 22, 10.2];
function ultimaParada(combustivel, consumo, postosDeGasolina) {
  valor = distanciaPercorrida(2, 8);
  if (valor < 6) {
    return postosDeGasolina[0];
  } else if (valor >= 6 && valor < 12) {
    return postosDeGasolina[3];
  } else if (valor >= 12 && valor < 19) {
    return postosDeGasolina[1];
  } else if (valor >= 20) {
    return postosDeGasolina[2];
  } else {
    return -1;
  }
}

function distanciaPercorrida(combustivel, consumo) {
  return combustivel * consumo;
}

// let assert = require("chai").assert;
// describe("Ultima Parada", function () {
//   it("Calcula O Ultimo Posto De Combustivel Na Autonomia", function () {
//     assert.equal(ultimaParada(2, 8, [2, 15, 22, 11]), 15);
//   });
// });
