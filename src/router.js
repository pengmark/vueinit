import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Mark from './views/Mark'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'all'
    },
    {
      path: '/active',
      name: 'active'
    },
    {
      path: '/complete',
      name: 'complete'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mark',
      name: 'mark',
      //component: Mark,
      component: () => import(/* webpackChunkName: "mark" */ './views/Mark.vue'),
      children: [
        {
          path: 'info',
          name: 'mark-info',
          component: () => import(/* webpackChunkName: "info" */ './views/Info.vue')
        },
        {
          path: 'youtube',
          name: 'mark-youtube',
          component: () => import(/* webpackChunkName: "youtube" */ './views/Youtube.vue')
        }
      ]
    },
    {
      path: '/iron',
      redirect: '/iron/1'
    },
    {
      path: '/iron/:day',
      component: () => import(/* webpackChunkName: "Icon" */ './views/Iron/index.vue')
    },
    {
      path: '*',
      redirect: '/all'
    }
  ]
})
