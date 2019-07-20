var contenido = document.querySelector("#contenido")

function traer() {
    fetch("json table.json")
    .then(res => res.json())
    .then(data => {
        pintarTabla(data)
    })
}

function pintarTabla(data) {
    console.log(data)
    contenido.innerHTML = ''
    for(let valor of data) {
        console.log(valor)
        contenido.innerHTML += `
        <tr>
            <td>${valor.id}</td>
            <td>${valor.nombre}</td>
            <td>${valor.email}</td>
            <td>${valor.estado ? "Activo" : "Eliminado"}</td>
        </tr>
        `
    }
}