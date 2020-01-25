import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import candidates from './modules/candidates';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    candidates,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
