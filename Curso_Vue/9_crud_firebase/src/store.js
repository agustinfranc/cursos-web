import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombre: '', id: '' }
  },
  mutations: {
    setTareas(state, tareas) {    // inserto las tareas en el state
      state.tareas = tareas
    },
    setTarea(state, tarea) {
      state.tarea = tarea
    },
    eliminarTarea(state, id) {
      // actualizo el array tareas
      // filtro (extraigo) todos los id que sean distintos al id eliminado
      state.tareas = state.tareas.filter( doc => {
        return doc.id != id
      })
    }
  },
  actions: {
    // obtengo las tareas de la db de firestore
    getTareas({ commit }) {   // el commit ejecuta una mutacion
      const tareas = []
      db.collection('tareas').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
        })

      commit('setTareas', tareas)   // mando a mutacion
    },
    // obtengo una tarea en particular
    getTarea({ commit }, id) {
      db.collection('tareas').doc(id).get()
        .then(doc => {
          console.log(doc.data())
          let tarea = doc.data()
          tarea.id = doc.id
          commit('setTarea', tarea)   // mando a mutacion
        })
    },
    editarTarea({ commit }, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          router.push({ name: 'home' })
        })
    },
    agregarTarea({ commit }, nombre) {
      db.collection('tareas').add({
        nombre: nombre
      })
        .then(doc => {
          console.log(doc.id)
          router.push({ name: 'home' })
        })
    },
    eliminarTarea({commit, dispatch}, id) {   // dispatch sirve para llamar a otra accion
      db.collection('tareas').doc(id).delete()
        .then( () => {
          console.log(`Tarea con id: ${id} ha sido eliminada`)
          // dispatch('getTareas') no es recomendable
          commit('eliminarTarea', id)   // llamo a mutacion
        })
    }
  }
})
