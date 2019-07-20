var formulario = document.querySelector("#formulario")
var respuesta = document.querySelector("#respuesta")

formulario.addEventListener("submit", function(e) {
    // Evito la accion del navegador por defecto (procesar usu y pass)
    e.preventDefault()

    var datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch("post.php", {
        method: "POST",
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.estado)
        if(data.estado === false) {
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Completa todos los campos
            </div>
            `
        }
        else {
            respuesta.innerHTML = `
            <div class="alert alert-primary" role="alert">
                ${data.mensaje}
            </div>
            `
        }
    })
})