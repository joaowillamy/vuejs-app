/* eslint no-param-reassign: ["error", { "props": false }] */
import { fetchCandidates } from '../../api/Candidates.service';

const state = {
  all: [],
};

const getters = {};

const actions = {
  getListCandidates({ commit }) {
    fetchCandidates().then((json) => { commit('setProducts', json); });
  },
};

const mutations = {
  setProducts(state_, all) {
    state_.all = all;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
