// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    token: localStorage.getItem('token') || null,
  },
  getters: {
    token: (state) => state.token,
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    REMOVE_TOKEN(state) {
      state.token = null;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    removeToken({ commit }) {
      commit('REMOVE_TOKEN');
      localStorage.removeItem('token');
    },
  },
  modules: {},
});

