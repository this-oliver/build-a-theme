import LandingPage from '@/pages/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/build',
      name: 'build',
      component: () => import('@/pages/BuildPage.vue')
    },
    {
      path: '/export',
      name: 'export',
      component: () => import('@/pages/ExportPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'wildcard',
      component: () => import('@/pages/_.vue')
    }
  ]
})

export default router
