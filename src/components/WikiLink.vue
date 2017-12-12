<template>
  <div class="article-link" :key="article.name">
	  <div class="article-link-parent">
		  <a :href="url">{{ article.name }}</a>
	  </div>
	  <div class="article-link-child" is="wiki-link" v-if="article.children.length > 0"
	  :article="child" v-for="child in article.children"></div>
	  <slot></slot>
  </div>
</template>

<script>

export default {
  	name: 'wiki-link',
	props: [
		'article'
	],
	computed: {
		url: function () {
			return '#' + this.article.id;
		}
	}
}
</script>
