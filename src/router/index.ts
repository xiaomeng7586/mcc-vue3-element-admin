import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routePublic: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routePublic
})

export default router
