import Vue from 'vue'
import Vuex from 'vuex'

var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: ''
  },
  mutations: {
    setUsuario(state, payload) {    // payload es todo lo que recibo como parametro
      state.usuario = payload
    }
  },
  actions: {
    crearUsuario({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
