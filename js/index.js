const imagens = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = -2;

function carrossel(){
    if(idx > 0){
        idx = -2;
    }
    idx ++

    imagens.style.transform = `translatex(${idx * 1520}px)`;
}

setInterval(carrossel, 1800);