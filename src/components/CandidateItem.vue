<template>
  <div class="candidate">
    {{ candidate.id }} - {{ candidate.name }} - {{candidate.favorite}}
    <button v-on:click="deleteCandidate(candidate)">Delete</button>
    <button v-on:click="toggleFavorite(candidate)">favorite</button>
  </div>
</template>

<script>

export default {
  name: 'CandidateItem',
  props: ['candidate'],
  methods: {
    deleteCandidate(candidate) {
      this.$store.dispatch('candidates/deleteCandidate', candidate);
    },
    toggleFavorite(candidate) {
      this.$store.dispatch('candidates/toggleFavorite', candidate);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate {
  margin: 20px;
}
</style>
