<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of frutas" :key="item.id" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
        {{item.nombre}}
        <span class="badge badge-secondary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  name: "Lista",
  computed: {
      ...mapState(['frutas']),   // obtengo array frutas
  },
  methods: {
      ...mapMutations(['aumentar'])
  },
};
</script>