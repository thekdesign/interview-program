export const state = () => ({
  user: {},
  token: ''
})

export const getters = {
  user (state) {
    return state.user
  },
  token (state) {
    return state.token
  }
}

export const mutations = {
  SET_USER (state, data) {
    state.user = data
  },

  SET_TOKEN (state, data) {
    state.token = data
    localStorage.setItem('token', data)
  }
}

export const actions = {
  async me (context) {
    const user = await this.$meRepository.index()
    context.commit('SET_USER', await user)
  },

  logout (context) {
    context.commit('SET_TOKEN', '')
  }
}
