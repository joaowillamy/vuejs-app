<template>
  <div class="candidate">
    {{ candidate.id }} - {{ candidate.name }} - {{candidate.favorite}}
    <button @click="deleteCandidate(candidate)">Delete</button>
    <button @click="toggleFavorite(candidate)">favorite</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CandidateItem',
  props: ['candidate'],
  methods: mapActions('candidates', [
    'deleteCandidate',
    'toggleFavorite',
  ]),
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate {
  margin: 20px;
}
</style>
