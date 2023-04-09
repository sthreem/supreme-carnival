import { createStore } from 'vuex'
import currencyModule from '@/store/modules/currency'

global.localStorage = {
  getItem: jest.fn(() => JSON.stringify([])),
  setItem: jest.fn(),
}

describe('Currency Module', () => {
  let store

  beforeEach(() => {
    store = createStore({
      modules: {
        currency: currencyModule,
      },
    })
    store.state.currency.currencies = []
  })

  it('initializes state', () => {
    expect(store.state.currency.currencies).toEqual([])
    expect(store.state.currency.searchQuery).toBe('')
  })

  it('returns all currencies', () => {
    store.state.currency.currencies = [{ id: 1, isoMark: 'USD', symbol: '$' }]
    const allCurrencies = store.getters['currency/allCurrencies']
    expect(allCurrencies).toEqual([{ id: 1, isoMark: 'USD', symbol: '$' }])
  })

  it('filters currencies', () => {
    store.state.currency.currencies = [
      { id: 1, isoMark: 'USD', symbol: '$' },
      { id: 2, isoMark: 'EUR', symbol: '€' },
    ]
    store.state.currency.searchQuery = 'us'
    const filteredCurrencies = store.getters['currency/filteredCurrencies']
    expect(filteredCurrencies).toEqual([{ id: 1, isoMark: 'USD', symbol: '$' }])
  })

  it('finds currency by id', () => {
    store.state.currency.currencies = [
      { id: 1, isoMark: 'USD', symbol: '$' },
      { id: 2, isoMark: 'EUR', symbol: '€' },
    ]
    const findCurrencyById = store.getters['currency/findCurrencyById']
    expect(findCurrencyById(1)).toEqual({ id: 1, isoMark: 'USD', symbol: '$' })
  })

  it('filters currency list', () => {
    store.dispatch('currency/filterCurrencyList', 'usd')
    expect(store.state.currency.searchQuery).toBe('usd')
  })

  it('adds a currency', () => {
    store.dispatch('currency/addCurrency', {
      id: 1,
      isoMark: 'USD',
      symbol: '$',
    })
    expect(store.state.currency.currencies).toEqual([
      { id: 1, isoMark: 'USD', symbol: '$' },
    ])
  })

  it('updates a currency', () => {
    store.state.currency.currencies = [{ id: 1, isoMark: 'USD', symbol: '$' }]
    store.dispatch('currency/updateCurrency', {
      id: 1,
      isoMark: 'USDX',
      symbol: '$',
    })
    expect(store.state.currency.currencies).toEqual([
      { id: 1, isoMark: 'USDX', symbol: '$' },
    ])
  })

  it('deletes a currency', () => {
    store.state.currency.currencies = [
      { id: 1, isoMark: 'USD', symbol: '$' },
      { id: 2, isoMark: 'EUR', symbol: '€' },
    ]
    store.dispatch('currency/deleteCurrency', 1)
    expect(store.state.currency.currencies).toEqual([
      { id: 2, isoMark: 'EUR', symbol: '€' },
    ])
  })
})
