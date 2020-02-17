import { fetchCandidates, deleteCandidate, updateCandidate } from '../../api/Candidates.service';
import { setById, getById } from '../../utils/store.util';

const state = {
  all: [],
};

const getters = {};

const actions = {
  async getListCandidates({ commit }) {
    const json = await fetchCandidates();
    commit('setCandidates', json);
  },

  async deleteCandidate({ dispatch }, candidate) {
    await deleteCandidate(candidate.id);
    dispatch('getListCandidates');
  },

  async toggleFavorite({ commit, state }, candidate) {
    commit('setToggleFavorite', candidate);
    const newCandidate = getById(state, candidate.id);
    const json = await updateCandidate(candidate.id, { favorite: newCandidate.favorite });
    commit('setCandidate', json);
  },
};

const mutations = {
  setCandidates(state, all) {
    state.all = all;
  },

  setCandidate(state, candidate) {
    state.all = setById(state, candidate.id, candidate);
  },

  setToggleFavorite(state, candidate_) {
    const candidate = { ...candidate_ };
    if (typeof candidate.favorite === 'undefined') {
      candidate.favorite = false;
    }
    candidate.favorite = !candidate.favorite;
    state.all = setById(state, candidate.id, candidate);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
