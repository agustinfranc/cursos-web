import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import db from '../main'

var firebase = require("firebase/app")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: '',
    tareas: [],
    tarea: { nombre: '', id: '' },
    carga: false,
    texto: '',
  },
  mutations: {
    setUsuario(state, payload) {    // payload es todo lo que recibo como parametro
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setTareas(state, tareas) {
      state.tareas = tareas
    },
    setTarea(state, tarea) {
      state.tarea = tarea
    },
    eliminarTarea(state, id) {
      state.tareas = state.tareas.filter(doc => {
        return doc.id != id
      })
    },
    cargarFirebase(state, payload) {
      state.carga = payload
    }
  },
  actions: {
    crearUsuario({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
          console.log(res)
          commit('setUsuario', { email: res.email, uid: res.user.uid })

          // Creo una coleccion
          db.collection(res.user.email).add({
            nombre: 'Tarea de ejemplo'
          })
            .then(() => {
              router.push({ name: 'inicio' })
            })

        })
        .catch(err => {
          console.log(err)
          commit('setError', err.code)
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
          commit('setError', err.code)
        })
    },
    detectarUsuario({ commit }, payload) {
      if (payload != null) {
        commit('setUsuario', { email: payload.email, uid: payload.uid })
      }
      else {
        commit('setUsuario', null)
      }
    },
    cerrarSesion({ commit }) {
      firebase.auth().signOut()
      commit('setUsuario', null)    // reinicio usuario
      router.push({ name: 'ingreso' })
    },
    buscadorTareas({commit, state}, payload) {
      console.log(payload)
      state.texto = payload.toLowerCase()
    },
    // obtengo las tareas de la db de firestore
    getTareas({ commit }) {   // el commit ejecuta una mutacion
      commit('cargarFirebase', true)
      const usuario = firebase.auth().currentUser
      const tareas = []
      db.collection(usuario.email).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('cargarFirebase', false)
        })

      commit('setTareas', tareas)   // mando a mutacion
    },
    // obtengo una tarea en particular
    getTarea({ commit }, id) {
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(id).get()
        .then(doc => {
          console.log(doc.data())
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)   // mando a mutacion
        })
    },
    editarTarea({ commit }, tarea) {
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          router.push({ name: 'home' })
        })
    },
    agregarTarea({ commit }, nombre) {
      commit('cargarFirebase', true)
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).add({
        nombre: nombre
      })
        .then(doc => {
          console.log(doc.id)
          router.push({ name: 'home' })
          commit('cargarFirebase', false)
        })
    },
    eliminarTarea({ commit, dispatch }, id) {   // dispatch sirve para llamar a otra accion
      const usuario = firebase.auth().currentUser
      db.collection(usuario.email).doc(id).delete()
        .then(() => {
          console.log(`Tarea con id: ${id} ha sido eliminada`)
          // dispatch('getTareas') no es recomendable
          commit('eliminarTarea', id)   // llamo a mutacion
        })
    }
  },
  getters: {    // utilizar una propiedad del state y obtener una respuesta
    existeUsuario(state) {
      if (state.usuario === null || state.usuario === undefined) {
        return false
      }
      return true
    },
    tareasFiltrado(state) {
      let arrayTareasFiltrado = []
      for (let tarea of state.tareas) {
        let nombre = tarea.nombre.toLowerCase()
        if (nombre.indexOf(state.texto) >= 0) {   // si coincide alguna letra
          arrayTareasFiltrado.push(tarea)
        }
      }
      return arrayTareasFiltrado
    }
  }
})
