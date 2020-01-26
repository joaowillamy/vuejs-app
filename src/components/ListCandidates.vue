<template>
  <div class="container">
    <section class="list-candidates">
      <candidate-item
        v-for="candidate in candidates"
        :candidate="candidate"
        :key="candidate.id"
      />
    </section>
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
<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .list-candidates {
    width: 80rem;
  }
</style>
