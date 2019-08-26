import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {id: 0, nombre: 'Manzana', cantidad: 0},
      {id: 1, nombre: 'Pera', cantidad: 0},
      {id: 2, nombre: 'Naranja', cantidad: 0},
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad++
    },
    reiniciar(state) {
      state.frutas.forEach(element => {
        element.cantidad = 0
      });
    }
  },
  actions: {

  }
})
