import { createStore } from 'vuex'
import authModule from '@/store/modules/auth'

describe('Auth Module', () => {
  let store

  beforeEach(() => {
    store = createStore({
      modules: {
        auth: authModule,
      },
    })
  })

  it('sets current user on login', () => {
    const user = { id: 1, name: 'John Doe' }
    store.dispatch('auth/login', user)

    expect(store.state.auth.currentUser).toEqual(user)
  })

  it('clears current user on logout', () => {
    const user = { id: 1, name: 'John Doe' }
    store.commit('auth/setCurrentUser', user)
    store.dispatch('auth/logout')

    expect(store.state.auth.currentUser).toBeNull()
  })

  it('returns true if user is logged in', () => {
    const user = { id: 1, name: 'John Doe' }
    store.commit('auth/setCurrentUser', user)

    expect(store.getters['auth/isLoggedIn']).toBe(true)
  })

  it('returns current user', () => {
    const user = { id: 1, name: 'John Doe' }
    store.commit('auth/setCurrentUser', user)

    expect(store.getters['auth/currentUser']).toEqual(user)
  })
})
