const cabecalho = document.getElementById("cabecalho");
const header = document.querySelector(".cabecalho");

window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        cabecalho.style.backgroundColor = "#171522";
    }else{
        cabecalho.style.backgroundColor = "transparent"
    }
})
window.addEventListener("scroll", function(){
    if(window.scrollY > 10){
    header.classList.add("reduzido");
    }else{
    header.classList.remove("reduzido");
    }
})