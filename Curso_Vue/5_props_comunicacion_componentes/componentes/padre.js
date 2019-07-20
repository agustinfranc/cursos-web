Vue.component("padre", {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{numero}}</h2>
        <button @click="numero++" type="button" class="btn btn-primary mb-1">+</button>
        <hijo :numero="numero"></hijo>
    </div>
    `,
    data() {
        return {
            numero: 0
        }
    }
})