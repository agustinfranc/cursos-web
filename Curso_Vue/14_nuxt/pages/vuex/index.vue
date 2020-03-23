<template>
  <b-container>
    <h2>Vuex</h2>
    <form @submit.prevent="agregarTarea()">
      <input type="text" class="form-control mb-2" v-model="tarea">
      <b-button type="submit">Agregar</b-button>
    </form>
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
        {{item.id}} - {{item.nombre}}
        <b-button class="btn-sm btn-warning">Editar</b-button>
        <b-button class="btn-sm btn-danger">Eliminar</b-button>
      </li>
      <hr />
    </ul>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data:() => ({
    tarea: '',
  }),
  computed: {
    ...mapState(["tareas"])
  },
  methods: {
    ...mapActions(['agregarTarea'])
  },
};
</script>