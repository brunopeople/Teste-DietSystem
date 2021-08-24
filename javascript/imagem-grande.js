var imagem = document.querySelector(".img-refeicao");
var body = document.querySelector("body");

imagem.addEventListener("click", aumentaFoto)

function aumentaFoto(){
    body.classList.toggle("blur");
    imagem.classList.toggle("grayscale");
    imagem.classList.toggle("img-refeicao");
    imagem.classList.toggle("img-refeicao-maior");
}