<template>
    <div class="container">
        <h1>Ingreso de usuarios</h1>
        <form @submit.prevent="ingresarUsuario({email: $v.email.$model, pass: $v.pass.$model})">     <!-- como el nombre de la propiedad es igual a la variable me ahorro escribir {email: email, pass: pass} -->
            <input type="email" class="form-control my-3" placeholder="Ingresa un email" v-model="$v.email.$model">
            <small class="text-danger d-block" v-if="!$v.email.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="$v.email.$invalid">Ingrese un email valido</small>
            
            <input type="password" class="form-control my-3" v-model="$v.pass.$model" placeholder="Ingresa una contraseña">
            <small class="text-danger d-block" v-if="!$v.pass.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="$v.pass.minLength">Minimo 6 caracteres</small>
            
            <button type="submit" class="btn btn-primary" :disabled="$v.$invalid">Acceder</button>
        </form>
        <small class="text-danger d-block"></small>
        <p>{{ error }}</p>
        <p>{{ $v }}</p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
    name: 'Ingreso',
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        ...mapActions(['ingresarUsuario'])
    },
    computed: {
        ...mapState(["error"])
    },
    validations: {
        email: {required, email},
        pass: {
            required,
            minLength: minLength(6)
        }
    }
}
</script>