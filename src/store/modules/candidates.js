/* eslint no-param-reassign: ["error", { "props": false }] */
import { fetchCandidates, deleteCandidate } from '../../api/Candidates.service';

const state = {
  all: [],
};

const getters = {};

const actions = {
  getListCandidates({ commit }) {
    fetchCandidates().then((json) => { commit('setCandidates', json); });
  },

  deleteCandidate({ dispatch }, candidate) {
    deleteCandidate(candidate.id).then(() => { dispatch('getListCandidates'); });
  },
};

const mutations = {
  setCandidates(state_, all) {
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
