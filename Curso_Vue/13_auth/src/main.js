import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { auth } from '@/firebase'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

Vue.config.productionTip = false

auth.onAuthStateChanged( (user) => {
  if (user) {
    //console.log("User is signed")

    store.dispatch('setUsuario', user)
  }

  // Primero detecto el usuario y despues inicializo Vue
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

