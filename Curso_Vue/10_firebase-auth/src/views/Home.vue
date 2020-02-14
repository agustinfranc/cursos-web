<template>
  <div class="container">
    <h1>Lista de Tareas</h1>
    <router-link :to="{name: 'add'}">
      <button class="btn btn-success">Nueva Tarea</button>
    </router-link>

    <div v-if="carga" class="text-center mt-5">
      <h3>cargando...</h3>
    </div>

    <ul class="list-group mt-3">
      <li v-for="item of tareas" :key="item.id" class="list-group-item">
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
import { mapState, mapActions } from "vuex";

export default {
  name: "Inicio",
  computed: {
    ...mapState(["usuario", "tareas", "carga"])
  },
  methods: {
    ...mapActions(["getTareas", "eliminarTarea"])
  },
  created() {
    this.getTareas();
  }
};
</script>