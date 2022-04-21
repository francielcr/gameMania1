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

