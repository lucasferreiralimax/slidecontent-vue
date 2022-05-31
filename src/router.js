import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`./views/Home.vue`)
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(`./views/About.vue`)
    },
    {
      path: '/:catchAll(.*)',
      name: 'Notfound',
      component: () => import(`./views/Notfound.vue`)
    }
  ]
})

export default router
