import {db} from '@/plugins/firebase.js'

export const state = () => ({
  tareas: ""
});

export const mutations = {
  setTareas(state, payload) {
    state.tareas = payload
  }
};

export const actions = {
  nuxtServerInit({commit}, {req}) {
    return db.collection('tareas').get()
    .then(query => {
      const tareas = []
      query.forEach(element => {
        let tarea = element.data()
        tarea.id = element.id
        tareas.push(tarea)
      });
      return commit('setTareas', tareas)    // llamo a la mutacion setTareas
    })
    .catch(error => {
      console.log("Error", error)
    })
  }
};
