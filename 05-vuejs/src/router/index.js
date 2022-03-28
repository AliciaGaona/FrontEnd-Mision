import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: () => import('../views/PasteleroView.vue')
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: () => import('../views/ClienteView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
