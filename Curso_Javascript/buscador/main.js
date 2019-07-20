// Variables
var input = document.querySelector("#input");
const resultado = document.querySelector("#resultado");
const productos = [
    {nombre: "Platano", valor: 60},
    {nombre: "Manzana", valor: 80},
    {nombre: "Durazno", valor: 90},
    {nombre: "Melon", valor: 70},
    {nombre: "Naranja", valor: 30},
    {nombre: "Mandarina", valor: 40},
    {nombre: "Sandia", valor: 50},
]

// Funciones
const filtrar = () => {
    resultado.innerHTML = "";
    const texto = input.value.toLowerCase();
    for(let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <li>${producto.nombre} - Valor: ${producto.valor}</li>
            `
        }
    }
}

// Eventos
input.addEventListener("keyup", () => {
    input = document.querySelector("#input");
    filtrar();
})