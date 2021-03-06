import Vue from 'vue';
import Vuex from 'vuex';
import { validateDirection, validateColor } from './utils/validator';

const config = require('./config/setup.yml');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...config
  },
  mutations: {},
  actions: {}
});
