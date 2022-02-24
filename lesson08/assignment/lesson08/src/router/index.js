import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import inspired from '../views/inspired.vue'
import common from '../views/common.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Inspired',
    name: 'Inspired',
    component: inspired
  },
  {
    path: '/common',
    name: 'common',
    component: common
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
