$(document).ready(function() {

let slideAtual = 1;
let listaSlides = ["banner-1", "banner-2", "banner-3"]

setInterval(mudarSlide, 2000)

function mudarSlide() {
    console.log("slide atual:", slideAtual);

    //remove o slide anterior
    if (slideAtual > 0) {
        $("#carrossel").removeClass(listaSlides[slideAtual - 1])
    } else if (slideAtual == 0) {
        $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])
    }

    //Adiciona o slide atual
    $("#carrossel").addClass(listaSlides[slideAtual]);

    //Indica o slide atual
    slideAtual++
    
    if(slideAtual > (listaSlides.length) - 1) {
        slideAtual = 0;
    }

}

})

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else{
        menu.style.display = 'none';
    }
}

function cadastrarNewsletter () {
    let email = document.getElementById("campo-email").value
    alert(email)
    console.log(email)
}

