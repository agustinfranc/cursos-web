const botonPrincipal = document.querySelector("#botonPrincipal");
const botones = document.querySelector("#botones");
const principal = document.querySelector("#principal");

// Funcion Arrow IIFE
(() => {
    botonPrincipal.addEventListener("click", agregarBotones);
    botones.addEventListener("click", delegarEvento);
})();

(() => {
    const color = localStorage.getItem("colorFondo");
    // La primera vez no habra nada en localStorage por eso utilizo un if.
    if(color === null) {
        return;
    }
    else {
        principal.className = color;
    }
})();

function delegarEvento(e) {
    e.preventDefault();
    console.log(e.target.classList[1])
    const colorBoton = e.target.classList[1];

    switch(colorBoton) {
        case("btn-primary"):
            principal.className = "bg-primary"
            localStorage.setItem("colorFondo","bg-primary")
            break;
        case("btn-secondary"):
            principal.className = "bg-secondary"
            localStorage.setItem("colorFondo","bg-secondary")
            break;
        case("btn-danger"):
            principal.className = "bg-danger"
            localStorage.setItem("colorFondo","bg-danger")
            break;
        case("btn-success") :
            principal.className = "bg-success"
            localStorage.setItem("colorFondo","bg-success")
            break;
        case("btn-warning"):
            principal.className = "bg-warning"
            localStorage.setItem("colorFondo","bg-warning")
            break;
    }
}

function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML = `
        <button type="button" class="btn btn-primary">primary</button>
        <button type="button" class="btn btn-danger">danger</button>
        <button type="button" class="btn btn-success">success</button>
        <button type="button" class="btn btn-warning">warning</button>
    `;
}