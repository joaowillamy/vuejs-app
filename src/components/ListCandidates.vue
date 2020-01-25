<template>
  <div>
    <h1 v-for="result in results" v-bind:key="result.id">{{ result.career }}</h1>
  </div>
</template>

<script>
import { fetchCandidates } from '../services/CandidatesService';
// props: {
//   msg: String,
// },
export default {
  name: 'ListCandidates',
  data() {
    return {
      results: [],
    };
  },
  created() {
    // this.getListCandidates();
    const self = this;
    fetch('http://localhost:3000/candidates').then(response => response.json()).then((j) => {
      console.log(j);
      self.results = j.results;
      console.log('this.results', self.results);
    });
  },
  methods: {
    getListCandidates() {
      fetchCandidates().then((j) => {
        console.log(j.results);
        this.results = j.results;
        console.log('this.results', this.results);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
