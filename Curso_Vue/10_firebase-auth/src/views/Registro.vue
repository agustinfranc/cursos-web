<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, password: pass1})">
            <input type="text" v-model="email">
            <input type="password" v-model="pass1">
            <input type="password" v-model="pass2">
            <button type="submit" :disabled="!desactivar" >Crear Usuario</button>
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>

import { mapActions, mapStore, mapState } from 'vuex'

export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    methods: {
        ...mapActions(['crearUsuario'])
    },
    computed: {     // todas las propiedades computadas tienen que retornar algo
        ...mapState(['error']),
        desactivar() {
            return this.pass1 === this.pass2 && this.pass1 !== ''
        }
    },
}
</script>