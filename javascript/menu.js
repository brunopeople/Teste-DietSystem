const menu = document.querySelector(".menu");
const x = document.querySelector(".x");

menu.addEventListener("click", mostraMenu);
x.addEventListener("click", mostraMenu);

var contador = 0;

function mostraMenu(){
    const menuUL = document.querySelector(".lista-opcoes");
    menuUL.classList.toggle("hide");
}