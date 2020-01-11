import Vue from 'vue'
import VueRouter from 'vue-router'

var firebase = require("firebase/app")

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/Edit.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth)   // Route Meta Fields
  const user = firebase.auth().currentUser    // devuelve usuario o null

  if(rutaProtegida && user === null) {
    next({ name: 'ingreso' })
  }
  else {
    next()
  }
})

export default router
