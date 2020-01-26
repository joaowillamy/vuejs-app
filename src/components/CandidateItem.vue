<template>
  <div class="box-candidate">
    <header class="heading-primary">
      <h1 class="heading-primary--main">{{ candidate.name }}</h1>
      <h2 class="heading-primary--sub">{{ candidate.name }}</h2>
    </header>
    <p class="paragraph">
      {{ candidate.id }}  - {{candidate.favorite}}
    </p>
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
<style lang="scss" scoped>
  @import '../assets/scss/abstracts/variables';

  .box-candidate {
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1.1px solid $color-grey;
  }
</style>
