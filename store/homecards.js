export const state = () => ({
  homecards: [
    {
      id: 1,
      title: "education",
      image: null,
      url: "/disciplines",
    },
    {
      id: 2,
      title: "community",
      image: null,
      url: "/community",
    },
    {
      id: 3,
      title: "about",
      image: null,
      url: "/about",
    },
  ],
});

export const getters = {
  getHomecards: (state) => state.homecards,
};

export const actions = {
  async loadHomecards({ commit }) {
    const response = await fetch(
      process.env.baseUrl + process.env.homecardsAccess
    );
    let homecards = await response.json();
    commit("setHomecards", homecards);
  },
};

export const mutations = {
  setHomecards(state, courses) {
    state.homecards = courses;
  },
};
