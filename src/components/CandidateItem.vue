<template>
  <div class="box-candidate">
    <div class="box-candidate__image">
      <img :src='candidate.imageUrl' alt="">
    </div>
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
      <p class="paragraph">{{ candidate.id }}  - {{candidate.favorite}}</p>
    </div>
    <div class="box-candidate__actions">
      <button
        class="btn btn--white btn--outline btn--icon"
        @click="toggleFavorite(candidate)">
          <i class="icon icon-star"></i>
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

const candidate = {
  id: 13,
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEY24VfmZUwPiFt2tQdUTHuRZ-PTMtBL3B53SvmexSiy6P7V0ew',
  name: 'Ernie Ullrich',
  newThisWeek: false,
  career: 'Human Optimization Technician',
  lastCompanies: [
    'Abshire, Lindgren and Becker',
    'Macejkovic LLC',
  ],
  university: 'Vermont',
  cities: [
    'Port Charleshaven',
    'Brianneside',
    'Fredericshire',
    'East Llewellynberg',
  ],
  mainSkills: [
    'Paradigm',
    'Security',
  ],
  favorite: true,
};
console.log(candidate);
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

  $box-padding: 1rem;

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
