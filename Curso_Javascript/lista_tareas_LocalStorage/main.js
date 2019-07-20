// Variables
const formularioUI = document.querySelector("#formulario");
const listaUI = document.querySelector("#lista");
let arrayActividades = [];


// Funciones
const crearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item);
}

const guardarDB = () => {
    // Convierto a JSON mi array y lo guardo en localStorage
    localStorage.setItem("rutina", JSON.stringify(arrayActividades));

    pintarDB();
}

const editarDB = (actividad) => {
    // Busco el indice de la actividad en el arrayActividades
    let indexArray = arrayActividades.findIndex((elemento) => {
        return elemento.actividad === actividad
    });

    console.log("Elemento editado: " + arrayActividades[indexArray].actividad);
    
    // Obtengo el estado de la actividad
    let estado = arrayActividades[indexArray].estado;
    // Si era true ahora es false y viceversa
    estado = !estado;
    arrayActividades[indexArray].estado = estado;

    // Guardo en LocalStorage
    guardarDB();
}

const eliminarDB = (actividad) => {
    let indexArray;
    arrayActividades.forEach((elemento, index) => {
        if(elemento.actividad === actividad) {
            indexArray = index;
        }
    });
    // Elimino la actividad del arrayActividades
    arrayActividades.splice(indexArray,1);

    console.log("Elemento eliminado: " + actividad);

    // Guardo en LocalStorage
    guardarDB();
}

const pintarDB = () => {
    // Limpio lo que haya en la lista
    listaUI.innerHTML = "";

    // Parseo a un array
    arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    
    if(arrayActividades === null) {
        arrayActividades = [];
    } else {

        // Leo elemento a elemento
        arrayActividades.forEach(element => {
            //console.log(element);
            listaUI.innerHTML += `
            <div class="alert ${element.estado ? 'alert-success' : 'alert-danger'}" id="elem" role="alert">
                <i class="material-icons float-left mr-2">accessibility</i>
                <strong>${element.actividad}</strong>
                <span class="float-right">
                    <i id="${element.actividad}" class="material-icons float-left mr-2">delete</i>
                </span>
                <span class="float-right">
                    <i id="${element.actividad}" class="material-icons float-left mr-2">${element.estado ? 'done' : 'clear'}</i>
                </span>
            </div>
            `
        });
    }
}


// Eventos
formularioUI.addEventListener("submit", (e) => {
    e.preventDefault();

    // Leo los datos del formulario
    let datos = new FormData(formularioUI);
    console.log(datos.get('actividad'));

    // Verifico que no este el campo en blanco
    if(datos.get('actividad') === "") {
        return;
    }
    // Creo un objeto
    crearItem(datos.get('actividad'));
    guardarDB();

    // Limpio el formulario
    formularioUI.reset();
})

listaUI.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log(e.target.innerHTML);
    //console.log(e.target.id);

    switch(e.target.innerHTML) {
        case("done"):
            editarDB(e.target.id);
            break;
        case("clear"):
            editarDB(e.target.id);
            break;
        case("delete"):
            eliminarDB(e.target.id);
            break;
        default:
            return;
    }
})

document.addEventListener("DOMContentLoaded", pintarDB);