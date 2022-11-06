import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/index.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('../views/NotFound/index.vue')
    }
  ]
})

export default router
