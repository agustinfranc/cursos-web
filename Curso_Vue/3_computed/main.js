const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje dinamico',
        contador: 0
    },
    computed: {
        color() {
            return {
                // Devuelvo bg-success si this.container <= 10
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 20,
                'bg-danger': this.contador > 20
            }
        }
    }
});