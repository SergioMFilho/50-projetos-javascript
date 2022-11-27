// Recebendo os elementos
const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

// Roda a função depois de 2 segundos
let interval = setInterval(run, 2000);

//Incrementa o index em 1 e roda a função changeImage
function run() {
  idx++;
  changeImage();
}

// Caso o index for maior que a quantidade de imgs volta ao início
function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
