<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of arrayOrdenado" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
        {{item.nombre}}
        <span class="badge badge-secondary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    <button type="button" @click="reiniciar()" name="" id="" class="btn btn-primary btn-lg btn-block">REINICIAR</button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  name: "Lista",
  computed: {
      ...mapState(['frutas']),   // obtengo array frutas
      arrayOrdenado() {
          return this.frutas.sort( (a, b) => b.cantidad - a.cantidad)
      }
  },
  methods: {
      ...mapMutations(['aumentar','reiniciar'])
  },
};
</script>