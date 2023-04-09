import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '@/router'

const createMockStore = (isLoggedIn) => ({
  getters: {
    'auth/isLoggedIn': isLoggedIn,
  },
})

const createTestRouter = (store) => {
  const router = createRouter({
    history: createMemoryHistory(),
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

  return router
}

describe('Router', () => {
  let store, router

  beforeEach(() => {
    store = createMockStore(false)
    router = createTestRouter(store)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it.each([
    ['analytics', 'Login'],
    ['offers', 'Login'],
    ['loyalty', 'Login'],
    ['currencies', 'Login'],
    ['dispatch', 'Login'],
    ['configurations', 'Login'],
  ])(
    'redirects unauthenticated users to the login page from %s',
    async (path, expected) => {
      await router.push(`/${path}`)
      expect(router.currentRoute.value.name).toBe(expected)
    }
  )

  it.each([
    ['analytics', 'Analytics'],
    ['offers', 'Offers'],
    ['loyalty', 'Loyalty'],
    ['currencies', 'Currencies'],
    ['dispatch', 'Dispatch'],
    ['configurations', 'Configurations'],
  ])(
    'allows authenticated users to access protected routes (%s)',
    async (path, expected) => {
      store.getters['auth/isLoggedIn'] = true
      await router.push(`/${path}`)
      expect(router.currentRoute.value.name).toBe(expected)
    }
  )

  it('routes to the not found page for non-existing routes', async () => {
    await router.push('/non-existing-route')
    expect(router.currentRoute.value.name).toBe('NotFound')
  })

  it.each([
    ['/', 'Login', false],
    ['/', 'Home', true],
    ['/login', 'Login', false],
    ['/login', 'Home', true],
  ])(
    'navigates to route %s with expected name %s when authenticated is %s',
    async (path, expected, auth) => {
      store.getters['auth/isLoggedIn'] = auth
      await router.push(path)
      expect(router.currentRoute.value.name).toBe(expected)
    }
  )
})
