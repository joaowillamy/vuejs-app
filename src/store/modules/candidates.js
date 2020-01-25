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
  setCandidates(state, all) {
    state.all = all;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
