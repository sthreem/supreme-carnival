import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/views/AnalyticsView.vue'),
      },
      {
        path: 'offers',
        name: 'Offers',
        component: () => import('@/views/OffersView.vue'),
      },
      {
        path: 'loyalty',
        name: 'Loyalty',
        component: () => import('@/views/LoyaltyView.vue'),
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
              currency: () => import('@/views/AddCurrencyView.vue'),
            },
          },
          {
            path: 'edit-currency/:id',
            name: 'EditCurrency',
            components: {
              currency: () => import('@/views/EditCurrencyView.vue'),
            },
          },
        ],
      },
      {
        path: 'dispatch',
        name: 'Dispatch',
        component: () => import('@/views/DispatchView.vue'),
      },
      {
        path: 'configurations',
        name: 'Configurations',
        component: () => import('@/views/ConfigurationsView.vue'),
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
  } else {
    next()
  }
})

export default router
