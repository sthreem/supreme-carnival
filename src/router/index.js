import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import store from '@/store'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/views/GenericView.vue'),
      },
      {
        path: 'offers',
        name: 'Offers',
        component: () => import('@/views/GenericView.vue'),
      },
      {
        path: 'loyalty',
        name: 'Loyalty',
        component: () => import('@/views/GenericView.vue'),
      },
      {
        path: 'currencies',
        name: 'Currencies',
        component: () => import('@/views/CurrenciesView.vue'),
        children: [
          {
            path: 'add-currency',
            name: 'AddCurrency',
            components: {
              currency: () => import('@/components/CurrencyForm.vue'),
            },
          },
          {
            path: 'edit-currency/:id',
            name: 'EditCurrency',
            components: {
              currency: () => import('@/components/CurrencyForm.vue'),
            },
          },
        ],
      },
      {
        path: 'dispatch',
        name: 'Dispatch',
        component: () => import('@/views/GenericView.vue'),
      },
      {
        path: 'configurations',
        name: 'Configurations',
        component: () => import('@/views/GenericView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
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
  } else if (to.name === 'Login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
