<template>
  <div>
    {{ candidate.career }}
  </div>
</template>

<script>

export default {
  name: 'CandidateItem',
  props: ['candidate'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
