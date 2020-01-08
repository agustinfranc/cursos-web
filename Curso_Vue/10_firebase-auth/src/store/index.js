import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: ''
  },
  mutations: {
    setUsuario(state, payload) {    // payload es todo lo que recibo como parametro
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    crearUsuario({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
          console.log(res)
          commit('setUsuario', { email: res.email, uid: res.user.uid })
          router.push({ name: 'inicio' })
        })
        .catch(err => {
          console.log(err)
          commit('setError', err.message)
        })
    },
    ingresarUsuario({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
          console.log(res)
          commit('setUsuario', { email: res.email, uid: res.user.uid })
          router.push({ name: 'inicio' })
        })
        .catch(err => {
          console.log(err)
          commit('setError', err.message)
        })
    },
    detectarUsuario({ commit }, payload) {
      if(payload != null) {
        commit('setUsuario', {email: payload.email, uid: payload.uid})
      }
      else {
        commit('setUsuario', null)
      }
    },
    cerrarSesion({ commit }) {
      firebase.auth().signOut()
      commit('setUsuario', null)    // reinicio usuario
      router.push({ name: 'ingreso' })
    }
  },
  getters: {    // utilizar una propiedad del state y obtener una respuesta
    existeUsuario(state) {
      if(state.usuario === null || state.usuario === undefined) {
        return false
      }
      return true
    }
  }
})
