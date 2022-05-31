import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'Notfound',
      component: () => import(/* webpackChunkName: "notfound" */ '../views/Notfound.vue')
    }
  ]
})

export default router
