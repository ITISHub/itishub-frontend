import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    actions: {},
    state: {
      theme: true,
    },
    mutations: {
      setTheme(state, newTheme) {
        state.theme = newTheme;
      }
    }
  });

export default store
