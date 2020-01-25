/* eslint no-param-reassign: ["error", { "props": false }] */
import { fetchCandidates } from '../../api/Candidates.service';

const state = {
  results: [],
};

const getters = {};

const actions = {
  getListCandidates({ commit }) {
    fetchCandidates().then((json) => { commit('setProducts', json); });
  },
};

const mutations = {
  setProducts(state_, results) {
    state_.results = results;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
