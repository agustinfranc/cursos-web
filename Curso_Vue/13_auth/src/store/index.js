import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from '@/firebase'
import router from '@/router'
import { db } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    drawer: false,
  },
  mutations: {
    nuevoUsuario(state, payload) {
      state.usuario = (payload === null) ? '' : payload
    },
    mutateDrawer(state) {
      state.drawer = ! state.drawer
    },
  },
  actions: {
    setDrawer({commit}) {
      commit('mutateDrawer', null)
    },
    async setUsuario({commit}, payload) {

      try {
        
        // Compruebo si existe el usuario
        const doc = await db.collection('usuarios').doc(payload.uid).get()
        if(doc.exists) {
          commit('nuevoUsuario', doc.data())
        }
        else {
          const usuario = {
            uid: payload.uid,
            nombre: payload.displayName,
            email: payload.email,
            foto: payload.photoURL,
          }

          await db.collection('usuarios').doc(payload.uid).set(usuario)

          console.log("Usuario guardado en db")  
    
          commit('nuevoUsuario', usuario)
        }
      } catch (error) {
        console.log(error)
      }

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
