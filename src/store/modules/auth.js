const USER_KEY = 'user'

const state = {
  currentUser: JSON.parse(localStorage.getItem(USER_KEY)) || null,
}

const getters = {
  isLoggedIn: (state) => !!state.currentUser,
  currentUser: (state) => state.currentUser,
}

const actions = {
  login({ commit }, user) {
    commit('setCurrentUser', user)
  },
  logout({ commit }) {
    commit('setCurrentUser', null)
  },
}

const mutations = {
  setCurrentUser: (state, user) => {
    state.currentUser = user
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },
}

const authModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export default authModule
