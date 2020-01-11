import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Importo la biblioteca Firebase y la inicializo
var firebase = require("firebase/app")

require("firebase/auth")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDr_iIWjJBDAfbz89lueSpknm0Dh_VTJiw",
  authDomain: "cli-crud.firebaseapp.com",
  databaseURL: "https://cli-crud.firebaseio.com",
  projectId: "cli-crud",
  storageBucket: "cli-crud.appspot.com",
  messagingSenderId: "920313949698",
  appId: "1:920313949698:web:ee95a4222c975da4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()

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

