import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import candidates from './modules/candidates';

Vue.use(Vuex);

// TODO: Add a cross-env, ex: process.env.NODE_ENV !== 'production'
const debug = true;

export default new Vuex.Store({
  modules: {
    candidates,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
