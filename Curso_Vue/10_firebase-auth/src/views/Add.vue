<template>
    <div>
        <h1>Agregar</h1>
        <form @submit.prevent="agregarTarea(nombre)" class="form-inline">
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                </div>
                <input type="text" v-model="$v.nombre.$model" class="form-control">
            </div>
            <button type="submit" class="btn btn-info mb-2" :disabled="$v.$invalid || carga">Agregar</button>
        </form>
        <small class="text-danger d-block" v-if="!$v.nombre.required">Campo requerido</small>
        <small class="text-danger d-block" v-if="!$v.nombre.minLength">Minimo 6 caracteres</small>
        {{$v.nombre}}
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
    name: 'Add',
    data() {
        return {
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    },
    validations: {
        nombre: {
            required,
            minLength: minLength(6)
        }
    },
    computed: {
        ...mapState(['carga'])      // mapeo carga para deshabilitar boton submit una vez presionado
    }
}
</script>