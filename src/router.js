import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/svg',
      name: 'svgcom',
      component: () => import('./components/svgcom.vue')
    },
    {
      path: '/canvas',
      name: 'canvascom',
      component: () => import('./components/canvascom.vue')
    },
    {
      path: '/mapv',
      name: 'mapvcom',
      component: () => import('./components/mapvcom.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
