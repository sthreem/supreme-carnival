const state = {
  currencies: JSON.parse(localStorage.getItem('currencies')) || [],
  searchQuery: '',
}

const getters = {
  allCurrencies: (state) => state.currencies,
  filteredCurrencies: (state) => {
    if (!state.searchQuery) return state.currencies

    return state.currencies.filter(
      (currency) =>
        currency.id.toString().includes(state.searchQuery) ||
        currency.isoMark.toLowerCase().includes(state.searchQuery) ||
        currency.symbol.toLowerCase().includes(state.searchQuery)
    )
  },
  findCurrencyById: (state) => (id) =>
    state.currencies.find((currency) => currency.id === id),
}

const actions = {
  filterCurrencyList({ commit }, searchQuery) {
    commit('filterCurrencyList', searchQuery)
  },
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
  filterCurrencyList: (state, searchQuery) => {
    state.searchQuery = searchQuery.toLowerCase()
  },
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

const currencyModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export default currencyModule
