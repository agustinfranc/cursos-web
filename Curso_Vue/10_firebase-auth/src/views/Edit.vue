<template>
  <div class="container">
    <h1>Editar</h1>
    <h3>{{id}}</h3>
    <form @submit.prevent="editarTarea(tarea)">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre</div>
        </div>
        <input type="text" v-model="$v.tarea.nombre.$model" class="form-control" />
      </div>

      <button class="btn btn-primary my-3" :disabled="$v.tarea.$invalid">Editar</button>
    </form>
    <small class="text-danger d-block" v-if="!$v.tarea.nombre.required">Campo requerido</small>
    {{ $v.tarea }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Edit",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["getTarea", "editarTarea"])
  },
  created() {
    this.getTarea(this.id);
  },
  computed: {
    ...mapState(["tarea"])
  },
  validations: {
    tarea: {
      nombre: { required }
    }
  }
};
</script>