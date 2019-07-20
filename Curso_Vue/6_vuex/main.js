Vue.component('titulo', {
    template: `
    <div>
        <h1>numero {{ $store.state.numero }}</h1>
        <h1>numero {{ numero }}</h1>
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },
})

Vue.component('hijo', {
    template: `
    <div>
        <h2>numero {{ numero }}</h2>
        <button @click="$store.commit('aumentar')" >+</button>
        <button @click="disminuir(2)" >-</button>
        <button @click="aumentar" >+</button>
        <button @click="obtenerCursos" >obtenerCursos</button>
        <ul v-for="item of cursos">
            <li>{{ item.nombre }}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero','cursos'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerCursos'])
    },
})

const store = new Vuex.Store({
    state: {
        numero: 0,
        cursos: []
    },
    mutations: {
        /* aumentar() {
            this.state.numero++
        } */
        aumentar(state) {
            state.numero++
        },
        disminuir(state, n) {
            state.numero -= n
        },
        llenarCursos(state, cursosAccion) {
            state.cursos = cursosAccion     //viene de actions
        }
    },
    actions: {
        obtenerCursos: async function({ commit }) {
            const data = await fetch('cursos.json')
            const cursos = await data.json()
            commit('llenarCursos', cursos)      //este commit va a llamar a llenarCursos
        }
    }
})

new Vue({
    el: "#app",
    store
    // store: store
})