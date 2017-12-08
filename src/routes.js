export default {
  '/': {
    href: '/',
    name: 'Home',
    parent: ''
  },
  '/about': {
    href: '/about',
    name: 'About',
    parent: ''
  },
  '/characters': {
    href: '/characters',
    name: 'Characters',
    parent: ''
  },
  '/zinneria': {
    href: '/zinneria',
    name: 'Zinneria',
    parent: '',
    children: [
      {
        href: '/zinneria/places',
        name: 'Places',
        parent: 'Zinneria'
      },
      {
        href: '/zinneria/people',
        name: 'People',
        parent: 'Zinneria'
      }
    ]
  },

  '/calendar': {
    href: '/calendar',
    name: 'Calendar',
    parent: ''
  }
};
