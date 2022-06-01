import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/src/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('/src/views/About.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('/src/views/Notfound.vue')
    }
  ]
})

export default router
