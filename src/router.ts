import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Terms from './views/Terms.vue';
import Privacy from './views/Privacy.vue';
import Credits from './views/Credits.vue';

const config = require('./config/setup.yml');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/credits',
    name: 'credits',
    component: Credits
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
]

// TODO: update condition
if (config.theme === 'light') {
  routes.push({
    path: '/terms',
    name: 'terms',
    component: Terms
  })
}

// TODO: update condition
if (config.theme === 'light') {
  routes.push({
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  })
}

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes
});
