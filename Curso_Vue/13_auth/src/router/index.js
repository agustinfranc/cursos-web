import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { requiresAuth: true }    // ruta protegida
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Config rutas protegidas
router.beforeEach((to, from, next) => {

  const user = auth.currentUser

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(user) {
      next()
    }
    else {
      next({
        path: '/login'
      })
    }
  }
  else {
    next()
  }
})

export default router
