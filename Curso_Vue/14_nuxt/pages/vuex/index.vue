<template>
  <b-container>
    <h2>Vuex</h2>
    <form></form>
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
  computed: {
    ...mapState(["tareas"])
  },
};
</script>