import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _60817d96 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _0570a8d0 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _24e5c988 = () => interopDefault(import('..\\pages\\vuex\\index.vue' /* webpackChunkName: "pages_vuex_index" */))
const _3d7bb400 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages_blog__id" */))
const _2111c80c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _60817d96,
    name: "about"
  }, {
    path: "/blog",
    component: _0570a8d0,
    name: "blog"
  }, {
    path: "/vuex",
    component: _24e5c988,
    name: "vuex"
  }, {
    path: "/blog/:id",
    component: _3d7bb400,
    name: "blog-id"
  }, {
    path: "/",
    component: _2111c80c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
