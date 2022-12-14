// Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

// A imagem demonstra números: 1,2,3,4,5 todos estão em azul, mas o número 1 e 4 estão com um risco vermelho.

// Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.

function checaNumeroEscondido(numero, numeroOculto) {
  let result = [];
  let myFunc = (num) => Number(num);
  var intArr = Array.from(String(numero), myFunc);
  var intArr2 = Array.from(String(numeroOculto), myFunc);

  intArr2.forEach(function (item, index) {
    if (intArr.indexOf(item) > -1) {
      result.push(intArr2[index]);
    }
  });
  if (result.length === intArr2.length) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// let assert = require("chai").assert;
// describe('Checa Numero Escondido', function() {
//   it('Verifica Se O Numero Esta Oculto Em Outro', function() {
//     assert.equal(checaNumeroEscondido(12345,235), true);
//   });
// });
