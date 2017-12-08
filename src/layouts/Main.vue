<template>
  <div>
    <div class="navigation-panel panel">
      <v-link class="menu" v-for="route in routList" :key="route.name" :href="route.href">
          <span>{{ route.name }}</span>
		  <div class="submenu">
			  <v-link class="sub-panel" v-for="subMenu in route.children" :key="subMenu.name" :href="subMenu.href">{{ subMenu.name }}</v-link>
		  </div>
      </v-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue';
import routes from '../routes';

export default {
  components: {
    VLink
  },
  computed: {
    routList() {
      return routes;
    }
  }
};
</script>