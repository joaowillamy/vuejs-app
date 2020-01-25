import { fetchCandidates, deleteCandidate, updateCandidate } from '../../api/Candidates.service';

const getById = (state, id) => state.all.find(candidate_ => candidate_.id === id);

const setById = (state, id, newCandidate) => state.all
  .map((candidate_) => {
    if (candidate_.id === id) return newCandidate;
    return candidate_;
  });

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

  toggleFavorite({ commit, state }, candidate) {
    commit('setToggleFavorite', candidate);
    const newCandidate = getById(state, candidate.id);

    updateCandidate(candidate.id, { favorite: newCandidate.favorite })
      .then((json) => { commit('setCandidate', json); });
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
