
console.log('mostrar o document', document);

console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
});






