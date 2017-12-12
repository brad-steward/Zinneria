import Vue from 'vue';
import routes from './routes';
import BS from './bootstrap.js';
import './scss/styles.scss';

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute].name;
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue');
    }
  },
  render(h) {
    return h(this.ViewComponent);
  },
  created: function() {
    console.debug('New Instance Created');
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
