<template>
  <div class="candidate">
    {{ candidate.id }}
    <button v-on:click="deleteCandidate(candidate)">Delete</button>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate {
  margin: 20px;
}
</style>
