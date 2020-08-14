export const state = () => ({
  mathanLessons: [],
  discreteMathLessons: [],
  algemLessons: [],
});

export const mutations = {
  setDiscreteMathLessons(state, lessons) {
    state.discreteMathLessons = lessons
  },
  setAlgemLessons(state, lessons) {
    state.algemLessons = lessons
  },
  setMathanLessons(state, lessons) {
    state.mathanLessons = lessons
  }
};

export const actions = {
  async loadLessons({ commit }, courseId) {
    const response = await fetch( process.env.baseUrl + process.env.courseAccess  + courseId);
    let cource = await response.json();
    switch (courseId) {
      case process.env.courseId.mathAn: commit('setMathanLessons', cource.lessons); break;
      case process.env.courseId.discreteMath: commit('setDiscreteMathLessons', cource.lessons); break;
      case process.env.courseId.alGem: commit('setAlgemLessons', cource.lessons); break;
      default: break;
    }
  },
};

export const getters = {
  mathanLessons: s => s.mathanLessons,
  discreteMathLessons: s => s.discreteMathLessons,
  algemLessons: s => s.algemLessons,
};
