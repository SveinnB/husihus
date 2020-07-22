export const state = () => ({
  footer: {}
})

export const mutations = {
  SET_FOOTER(state, footer){
    state.footer = footer;
  },
  SET_FOOTER_ERROR(state, error){
    state.footer = error;
  }
}

export const actions = {
  async fetchFooter({ commit }, $prismic) {
    try {
      const footer = (await $prismic.api.getSingle('footer')).data
      commit('SET_FOOTER', footer)
    }
    catch (e) {
      const error = 'Please create a footer document';
      commit('SET_FOOTER_ERROR', error);
    }
  }
}
