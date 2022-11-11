const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus(); // Ao entrar na página ele coloca o cursor direto para o textarea

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value); // O que eu escrevo aparece no console
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  // Lista do que você escreveu
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
