const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
); // MOUSEENTER = basicamente um hover , passar o mouse por cima
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
); // MOUSELEAVE = removendo o hover

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
