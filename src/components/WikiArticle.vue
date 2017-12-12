<template>
  <div class="article" :key="article.name" :id="article.id">
	  <div class="article-header">
		  {{ article.name }}
	  </div>
	  <span class="article-body" v-html="article.body"></span>
	  <div is="wiki-article" v-if="article.children.length > 0"
	  :article="child" v-for="child in article.children"></div>
	  <slot></slot>
  </div>
</template>

<script>

export default {
  	name: 'wiki-article',
	props: [
		'article'
	]
}
</script>
