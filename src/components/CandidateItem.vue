<template>
  <div class="box-candidate">
<!--
  IMAGE
-->
    <div class="box-candidate__image">
      <img :src='candidate.imageUrl' alt="">
    </div>
<!--
  INFO
-->
    <div class="box-candidate__info">
      <header class="heading-primary">
        <div class="box-candidate__title">
          <h1 class="heading-primary--main">
            {{ candidate.name }}
            <span class="flag-red-outline" v-if='candidate.newThisWeek'>Novo essa semana</span>
          </h1>
        </div>
        <h2 class="heading-primary--sub">{{ candidate.career }}</h2>
      </header>
      <p class="paragraph">
        <i class="icon icon-work"></i>
        <span class="span-list"> {{ candidateLastCompanies }} </span>
      </p>
      <p class="paragraph">
        <i class="icon icon-study"></i><span class="span-list"> {{ candidate.university }} </span>
      </p>
      <p class="paragraph">
        <i class="icon icon-location"></i>
        <span class="span-list">
          {{ candidateCities }}
          <b v-if="candidateMoreCities > 0"> e mais {{candidateMoreCities}} cidades.</b>
        </span>
      </p>
      <p class="paragraph">
        <i class="icon icon-skills"></i>
        <span class="span-list">Principais Habilidades:
          <span class="flag-grey" v-for="( skill, index ) in candidate.mainSkills" :key="index" >
            {{skill}}
          </span>
        </span>
      </p>
    </div>
<!--
    ACTIONS
-->
    <div class="box-candidate__actions">
      <button
        class="btn btn--white btn--outline btn--icon"
        @click="toggleFavorite(candidate)">
          <i class="icon icon-star" :class="{ 'favorite': candidate.favorite }"></i>
      </button>
      <div class="dropdown">
        <button class="btn btn--white btn--outline btn--icon">
          <i class="icon icon-dots"></i>
        </button>
        <div class="dropdown__content">
          <a @click="deleteCandidate(candidate)">Remover</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CandidateItem',
  props: ['candidate'],
  computed: {
    candidateLastCompanies() {
      return this.candidate.lastCompanies.join(', ');
    },
    candidateCities() {
      if (this.candidate.cities.length > 2) return this.candidate.cities.slice(0, 2).join(', ');
      return this.candidate.cities.join(', ');
    },
    candidateMoreCities() {
      return this.candidate.cities.length - 2;
    },
  },
  methods: mapActions('candidates', [
    'deleteCandidate',
    'toggleFavorite',
  ]),
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/scss/abstracts/variables';

  $box-padding: 1rem;
  .favorite {
    background-color: #ffd134;
    padding: .9rem;
  }
  .box-candidate {
    padding: $box-padding;
    margin-bottom: .5rem;
    border: 1.1px solid $color-grey;
    display: flex;
    justify-content: space-between;
    position: relative;
    transition: all .3s;

    &:hove  r {
      box-shadow: 0 .3rem .5rem rgba($color-black,.1);

      &::after {
        opacity: 0;
      }
    }
    &__image {
      width: 10rem;
      height: 10rem;
      padding: .5rem;

      img {
        height: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }

    &__info {
      margin-left: 1rem;
      flex-grow: 2;
      .span-list {
        font-size: 1.4rem;
        margin-left: 1rem;
      }
    }

    &__title {
      display: flex;
      align-items: flex-start;
      h1 {
        margin-bottom: .3rem;
      }
      span {
        margin-left: .2rem;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      align-self: flex-end;
      position: absolute;
      top: $box-padding;
      right: $box-padding;
    }
  }
</style>
