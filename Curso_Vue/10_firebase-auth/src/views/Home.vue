<template>
  <div class="container">
    <h1>Lista de Tareas</h1>
    <router-link :to="{name: 'add'}">
      <button class="btn btn-success">Nueva Tarea</button>
    </router-link>

    <input type="text" placeholder="Buscar..." class="form-control mt-5" v-model="texto" v-on:keyup="buscadorTareas(texto)">

    <div v-if="carga" class="text-center mt-5">
      <h3>cargando...</h3>
    </div>

    <ul class="list-group mt-3">
      <li v-for="item of tareasFiltrado" :key="item.id" class="list-group-item">
        {{item.id}} - {{item.nombre}}
        <div class="float-right">
          <router-link :to="{name: 'edit', params:{ id: item.id }}">
            <!-- lleva los dos puntos para poder trabaar con objetos -->
            <!-- el id corresponde a la ruta en router.js -->
            <button class="btn btn-info mr-2">Editar</button>
          </router-link>
          <button @click="eliminarTarea(item.id)" class="btn btn-danger">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Inicio",
  data() {
    return {
      texto: '',
    }
  },
  computed: {
    ...mapState(["usuario", "tareas", "carga"]),
    ...mapGetters(["tareasFiltrado"])
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea","buscadorTareas"])
  },
  created() {
    this.getTareas();
  }
};
</script>