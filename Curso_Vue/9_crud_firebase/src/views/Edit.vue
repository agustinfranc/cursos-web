<template>
    <div>
        <h1>Editar</h1>
        <h3>{{id}}</h3>
        <form @submit.prevent="editarTarea(tarea)">
            <input type="text" v-model="tarea.nombre">
            <button>Editar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getTarea','editarTarea'])
    },
    created() {
        this.getTarea(this.id)
    },
    computed: {
        ...mapState(['tarea'])
    },
}
</script>