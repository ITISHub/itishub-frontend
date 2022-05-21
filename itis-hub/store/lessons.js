export const state = () => ({
  mathanLessons: [],
  discreteMathLessons: [],
  algemLessons: [],
});

export const mutations = {
  setLessons(state, payload) {
    state[payload.lessonsType] = payload.lessons;
  },
};

export const actions = {
  async loadLessons({ commit }, courseId) {
    const response = await fetch(
      process.env.baseUrl + process.env.courseAccess + courseId
    );
    let cource = await response.json();
    switch (courseId) {
      case process.env.courseId.mathAn:
        commit("setLessons", {
          lessons: cource.lessons,
          lessonsType: "mathanLessons",
        });
        break;
      case process.env.courseId.discreteMath:
        commit("setLessons", {
          lessons: cource.lessons,
          lessonsType: "discreteMathLessons",
        });
        break;
      case process.env.courseId.alGem:
        commit("setLessons", {
          lessons: cource.lessons,
          lessonsType: "algemLessons",
        });
        break;
    }
  },
};

export const getters = {
  getMathanLessons: (s) => s.mathanLessons,
  getDiscreteMathLessons: (s) => s.discreteMathLessons,
  getAlgemLessons: (s) => s.algemLessons,
};
