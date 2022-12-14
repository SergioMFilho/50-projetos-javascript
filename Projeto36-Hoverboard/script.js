// Recebendo os elementos
const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

// for, para percorrer a quantidades de quadrados
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  // Ao final de cada criação eles são adicionados a DOM
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "";
  element.style.boxShadow = "";
}

function getRandomColor() {
  // Retornando uma cor aleatória do array
  return colors[Math.floor(Math.random() * colors.length)];
}

// Projeto criado em javaScript com o princípio de criação de divs
// Por meio do método appendChild é possível adicionar elementos a DOM
// Math.floor(Math.random() * colors.length) pega o ELEm aleatória do array
