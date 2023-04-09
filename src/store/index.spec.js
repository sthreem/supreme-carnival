import { createStore } from 'vuex'
import currencyModule from '@/store/modules/currency'
import authModule from '@/store/modules/auth'

global.localStorage = {
  getItem: jest.fn(() => JSON.stringify([])),
  setItem: jest.fn(),
}

describe('Vuex Store', () => {
  let store

  beforeEach(() => {
    store = createStore({
      modules: {
        currency: currencyModule,
        auth: authModule,
      },
    })
  })

  it('has currency module', () => {
    expect(store.state.currency).toBeDefined()
    expect(store._modules.root._children.currency._rawModule).toBe(
      currencyModule
    )
  })

  it('has auth module', () => {
    expect(store.state.auth).toBeDefined()
    expect(store._modules.root._children.auth._rawModule).toBe(authModule)
  })
})
