import Vue from 'vue';
import Vuex from 'vuex';
import { validateDirection, validateColor } from './utils/validator';

const config = require('./config/setup.yml');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...config,
    gradient: {
      direction: config.gradient ? validateDirection(config.gradient.direction) : 'right',
      firstColor: config.gradient ? validateColor(config.gradient.firstColor, '#e1eec3') : '#e1eec3',
      secondColor: config.gradient ? validateColor(config.gradient.secondColor, '#f05053') : '#f05053',
    },
    pattern: {
      type: config.pattern && config.pattern.type,
      color: config.pattern ? validateColor(config.pattern.color, '#e1eec3') : '#e1eec3',
    }
  },
  mutations: {},
  actions: {}
});
