import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'CurrencyList',
        component: () => import('@/views/CurrencyList.vue'),
      },
      {
        path: 'add-currency',
        name: 'AddCurrency',
        component: () => import('@/views/AddCurrency.vue'),
      },
      {
        path: 'edit-currency/:id',
        name: 'EditCurrency',
        component: () => import('@/views/EditCurrency.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isLoggedIn']
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
