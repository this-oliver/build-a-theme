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
      path: '/config',
      name: 'config',
      component: () => import('@/pages/ConfigPage.vue')
    },
    {
      path: '/export',
      name: 'export',
      component: () => import('@/pages/ExportPage.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/pages/HelpPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'wildcard',
      component: () => import('@/pages/_.vue')
    }
  ]
})

export default router
