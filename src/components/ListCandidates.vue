<template>
  <div>
    <p v-for="result in results" v-bind:key="result.id">{{ result.career }}</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import { fetchCandidates } from '../services/CandidatesService';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    results: [],
  },
  actions: {
    getListCandidates({ commit }) {
      fetchCandidates().then((json) => { commit('setProducts', json); });
    },
  },
  mutations: {
    setProducts(state, results) {
      state.results = results;
    },
  },
});

export default {
  name: 'ListCandidates',
  computed: {
    results() {
      return store.state.results;
    },
  },
  created() {
    store.dispatch('getListCandidates');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
