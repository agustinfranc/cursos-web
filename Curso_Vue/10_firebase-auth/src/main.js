import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importo la biblioteca Firebase y la inicializo
var firebase = require("firebase/app")
require("firebase/auth")
const firebaseConfig = {
  apiKey: "AIzaSyDr_iIWjJBDAfbz89lueSpknm0Dh_VTJiw",
  authDomain: "cli-crud.firebaseapp.com",
  databaseURL: "https://cli-crud.firebaseio.com",
  projectId: "cli-crud",
  storageBucket: "cli-crud.appspot.com",
  messagingSenderId: "920313949698",
  appId: "1:920313949698:web:ee95a4222c975da4"
};
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    console.log(user)
    store.dispatch('detectarUsuario', {email: user.email, uid: user.uid})    // dispatch llama a una accion
  }
  else {
    store.dispatch('detectarUsuario', null)    // dispatch llama a una accion
  }
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

