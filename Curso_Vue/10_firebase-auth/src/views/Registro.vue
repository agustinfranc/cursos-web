<template>
    <div class="container">
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, password: pass1})">
            <input type="text" class="form-control my-3" placeholder="Ingrese email" v-model="$v.email.$model">
            <small class="text-danger d-block my-3" v-if="!$v.email.required">Campo requerido</small>
            <input type="password" class="form-control my-3" placeholder="Ingrese contraseña" v-model="$v.pass1.$model">
            <small class="text-danger d-block my-3" v-if="!$v.pass1.required">Campo requerido</small>
            <small class="text-danger d-block my-3" v-if="!$v.pass1.minLength">Minimo 8 caracteres</small>
            <input type="password" class="form-control my-3" placeholder="Repita contraseña" v-model="$v.pass2.$model">
            <small class="text-danger d-block my-3" v-if="!$v.pass2.required">Campo requerido</small>
            <small class="text-danger d-block my-3">Las contraseñas no coinciden</small>
            <button type="submit" class="btn btn-primary" :disabled="!desactivar" >Crear Usuario</button>
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>

import { mapActions, mapStore, mapState } from 'vuex'
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    validations: {
        email: {required, email},
        pass1: {required, minLength: minLength(8)},
        pass2: {required, sameAs: sameAs('pass1')},
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