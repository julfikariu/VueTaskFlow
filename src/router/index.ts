import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'TaskList',
      component: () => import('@/components/TaskList.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Register.vue'),
      meta: { requiresAuth: true }
    }
  ],
})

export default router
