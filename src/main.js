import Vue from 'vue';
import { createRouter } from './routes';
import './scss/styles.scss';

const router = createRouter();

const app = new Vue({
  router,
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      router.push(this.currentRoute);
      const matchingView = router.getMatchedComponents();
      return matchingView ? matchingView[0] : require('./pages/404.vue');
    }
  },
  render(h) {
    console.log(this.ViewComponent);
    return h(this.ViewComponent);
  },
  created: function() {
    console.debug('New Instance Created');
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
