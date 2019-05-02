import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '2rem',
  defaultHeight: '2rem'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
