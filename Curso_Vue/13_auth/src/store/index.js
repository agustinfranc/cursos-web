import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {},
    drawer: false,
  },
  mutations: {
    nuevoUsuario(state, payload) {
      state.usuario = payload
    },
    mutateDrawer(state) {
      state.drawer = ! state.drawer
    },
  },
  actions: {
    setDrawer({commit}) {
      commit('mutateDrawer', null)
    },
    setUsuario({commit}, payload) {
      const usuario = {
        nombre: payload.displayName,
        email: payload.email,
        foto: payload.photoURL,
      }

      commit('nuevoUsuario', usuario)
    },
    cerrarSesion({commit}) {
      auth.signOut()
      commit('nuevoUsuario', null)
      router.push({name: 'Login'})
    }
  },
  modules: {
  }
})
