import { createStore } from 'vuex'

const state = {
  currencies: JSON.parse(localStorage.getItem('currencies')) || [],
}

const getters = {
  allCurrencies: (state) => state.currencies,
  filteredCurrencies: (state) => (searchQuery) => {
    if (!searchQuery) return state.currencies

    const search = searchQuery.toLowerCase()
    return state.currencies.filter(
      (currency) =>
        currency.id.toString().includes(search) ||
        currency.isoMark.toLowerCase().includes(search) ||
        currency.symbol.toLowerCase().includes(search)
    )
  },
}

const actions = {
  addCurrency({ commit }, newCurrency) {
    commit('addCurrency', newCurrency)
  },
  updateCurrency({ commit }, updatedCurrency) {
    commit('updateCurrency', updatedCurrency)
  },
  deleteCurrency({ commit }, id) {
    commit('deleteCurrency', id)
  },
}

const mutations = {
  addCurrency: (state, newCurrency) => {
    state.currencies.push(newCurrency)
    localStorage.setItem('currencies', JSON.stringify(state.currencies))
  },
  updateCurrency: (state, updatedCurrency) => {
    const index = state.currencies.findIndex(
      (currency) => currency.id === updatedCurrency.id
    )
    if (index !== -1) {
      state.currencies.splice(index, 1, updatedCurrency)
      localStorage.setItem('currencies', JSON.stringify(state.currencies))
    }
  },
  deleteCurrency: (state, id) => {
    state.currencies = state.currencies.filter((currency) => currency.id !== id)
    localStorage.setItem('currencies', JSON.stringify(state.currencies))
  },
}

const storeConfig = {
  state,
  getters,
  actions,
  mutations,
}

export default createStore(storeConfig)
export { storeConfig }
