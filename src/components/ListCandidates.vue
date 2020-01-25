<template>
  <div>
    <candidate-item
      v-for="candidate in candidates"
      v-bind:candidate="candidate"
      v-bind:key="candidate.id"
    ></candidate-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CandidateItem from './CandidateItem.vue';

export default {
  name: 'ListCandidates',
  components: {
    CandidateItem,
  },
  computed: mapState({
    candidates: state => state.candidates.all,
  }),
  created() {
    this.$store.dispatch('candidates/getListCandidates');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
