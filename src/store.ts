import Vue from 'vue';
import Vuex from 'vuex';
const config = require('./config/setup.yml');

Vue.use(Vuex);

const validateDirection = (direction: string = '') => {
  const lowerCaseDirection = direction.toLocaleLowerCase()

  if (['top', 'bottom', 'left', 'right'].includes(lowerCaseDirection)) {
    return lowerCaseDirection
  }
  return 'right';
}

export default new Vuex.Store({
  state: {
    ...config,
    gradient: {
      firstColor: config.gradient && config.gradient.firstColor ? config.gradient.firstColor : '#e1eec3',
      secondColor: config.gradient && config.gradient.secondColor ? config.gradient.secondColor : '#f05053',
      direction: config.gradient ? validateDirection(config.gradient.direction) : 'right',
    }
  },
  mutations: {},
  actions: {}
});
