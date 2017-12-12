import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  });
}

// export default [
//   {
//     path: '/',
//     component: Home,
//     text: 'Home',
//     parent: ''
//   },
//   {
//     path: '/about',
//     component: About,
//     parent: ''
//   }
//   // {
//   //   path: '/characters',
//   //   component: 'Characters',
//   //   parent: ''
//   // },
//   // {
//   //   path: '/zinneria',
//   //   component: 'Zinneria',
//   //   parent: '',
//   //   children: [
//   //     {
//   //       path: '/zinneria/places',
//   //       component: 'Places',
//   //       parent: 'Zinneria'
//   //     },
//   //     {
//   //       path: '/zinneria/people',
//   //       component: 'People',
//   //       parent: 'Zinneria'
//   //     }
//   //   ]
//   // },
//   // {
//   //   path: '/calendar',
//   //   component: 'Calendar',
//   //   parent: ''
//   // }
// ];
