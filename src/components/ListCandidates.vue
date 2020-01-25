<template>
  <div>
    <p v-for="candidate in candidates" v-bind:key="candidate.id">{{ candidate.career }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ListCandidates',
  computed: mapState({
    candidates: state => state.candidates.results,
  }),
  created() {
    this.$store.dispatch('candidates/getListCandidates');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
