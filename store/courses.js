export const state = () => ({
  courses: [],
});

export const getters = {
  getCourses: (state) => state.courses,
};

export const actions = {
  async loadCourses({ commit }) {
    const response = await fetch(
      process.env.baseUrl + process.env.courseAccess
    );
    let courses = await response.json();
    commit("setCourses", courses);
  },
};

export const mutations = {
  setCourses(state, courses) {
    state.courses = courses;
  },
};
