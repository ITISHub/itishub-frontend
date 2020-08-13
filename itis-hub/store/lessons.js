export const state = () => ({
  lessons: [],
});

export const mutations = {
  setLessons(state, lessons) {
    state.lessons = lessons
  }
};

export const actions = {
  async loadUsers({ commit }, courseId) {
    const response = await fetch( process.env.baseUrl + process.env.courseAccess  + courseId);
    let cource = await response.json();
    commit('setLessons', cource.lessons)
  },
};

export const getters = {
  lessons: s => s.lessons
};
