const app = new Vue({
    // Aqui dentro va todo el codigo Vue
    el: '#app',
    data: {
        titulo: 'Mi lista de compras',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Banana', cantidad: 6}
        ],
        nuevaFruta: '',  // Inicializo el input text
        total: 0
    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            // Vacio el input text
            this.nuevaFruta = ""; 
        }
    },
    computed: {
        sumarFrutas () {
            // Se ejecuta cada vez que se detecta un cambio en cantidad
            this.total = 0;
            for (fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    },

})