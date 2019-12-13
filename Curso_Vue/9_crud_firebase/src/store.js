import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: []
  },
  mutations: {
    setTareas(state, tareas) {    // guardo las tareas en el state
      state.tareas = tareas
    }
  },
  actions: {
    // obtengo las tareas de la db de firestore
    getTareas({commit}) {   // el commit ejecuta una mutacion
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
    }
  }
})
