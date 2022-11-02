// Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.

// Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.

// A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.

// Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.

// 0110100000
// 1001011111
// 1110001010
// 0111010101
// 0011100110
// 1010011001
// 1101100100
// 1011010100
// 1001100111
// 1000011000

// Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.

function calculaNumeroDaSenha(senha) {
  var matrix = [],
    H = 10,
    W = senha.length;
  let result = [];

  for (var y = 0; y < H; y++) {
    matrix[y] = [];
    for (var x = 0; x < W; x++) {
      matrix[y][x] = "";
    }
  }
  senha.forEach(function (item, i) {
    const value = String(item).split("");
    value.forEach(function (element, j) {
      matrix[i][j] = value[j];
    });
  });

  for (var m = 0; m < H; m++) {
    let numberOneQtd = 0;
    for (var n = 0; n < W; n++) {
      if (matrix[n][m] === "1") {
        numberOneQtd++;
      }
    }
    if (numberOneQtd >= 5) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return parseInt(result.join(""), 2);
}
