<template>
  <div>
    <div class="navigation-panel panel">
      <!-- <router-link class="menu" v-for="route in routeList" :key="route.component" :to="route.path">
          <span>{{ route.text }}</span>
		  <div class="submenu sub-panel">
			  <router-link class="" v-for="subMenu in route.children" :key="subMenu.component" :to="subMenu.path">{{ subMenu.text }}</router-link>
		  </div>
      </router-link> -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>