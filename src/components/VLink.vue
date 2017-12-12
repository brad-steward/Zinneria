<template>
<div class="nav-link">
<a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
    class="nav-link"
  >
    <slot></slot>
  </a>
</div>
  
</template>

<script>
import routes from '../routes';

export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    }
  }
};

// const router = new VueRouter( {
//   routes
// })
</script>
