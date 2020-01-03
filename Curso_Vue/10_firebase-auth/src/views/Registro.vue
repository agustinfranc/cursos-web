<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, password: pass1})">
            <input type="text" v-model="email">
            <input type="password" v-model="pass1">
            <input type="password" v-model="pass2">
            <button type="submit">Crear Usuario</button>
        </form>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

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
}
</script>