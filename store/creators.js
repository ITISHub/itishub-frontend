export const state = () => ({
  creators: [],
});

export const mutations = {
  setCreators(state, creators) {
    state.creators = creators;
  },
};

export const actions = {
  async loadCreators({ commit }) {
    const response = await fetch(
      process.env.baseUrl + process.env.creatorsAccess
    );
    let creators = await response.json();
    commit("setCreators", creators);
  },
};

export const getters = {
  getCreators: (state) => state.creators,
};
