export const state = () => ({
  homecards: [],
  message: false
});

export const mutations = {
  setHomecards(state, courses) {
    state.homecards = courses
  },
  setMessage(state, value) {
    state.message = value
  }
};

export const actions = {
  async loadHomecards({ commit }) {
    const response = await fetch( process.env.baseUrl + process.env.homecardsAccess);
    let homecards = await response.json();
    commit('setHomecards', homecards);
  },
  changeMessage({ commit }) {
    commit('setMessage', true)
  }
};

export const getters = {
  homecards: s => s.homecards,
  message: s => s.message,
};
