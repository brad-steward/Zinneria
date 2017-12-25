<template>
  <main-layout>
	  <h1>Wiki</h1>
	  <p>Zinneria is filled with an amazing array of magical and physical phenomena. Some of it's deepest, highest, or furthest places have the greatest wonders. It's people are many and varied, they keep the life in Zinnera fresh and exciting. It's hidden artifacts, marvels of engineering, and ancient secrets provide no end of study for the scolars of this land. Gaze into the world of zinneria and find what you're looking for.</p>
    <div class="toggles">
      <div class="checkbox">
        <label for="people-toggle">People</label>
        <input v-model="content.people.active" type="checkbox" name="people-toggle" id="people-toggle">
      </div>
      <div class="checkbox">
        <label for="place-toggle">Places</label>
        <input v-model="content.places.active" type="checkbox" id="place-toggle">
      </div>
      <div class="checkbox">
        <label for="thing-toggle">Things</label>
        <input v-model="content.things.active" id="thing-toggle" type="checkbox">
      </div>
    </div>
    <people v-if="content.people.active"></people>
    <places v-if="content.places.active"></places>
    <things v-if="content.things.active"></things>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import People from './wiki/People.vue';
import Places from './wiki/Places.vue';
import Things from './wiki/Things.vue';

var data = {
  content: {
    people: {
      active: true
    },
    places: {
      active: false
    },
    things: {
      active: false
    }
  }
};

export default {
  components: {
    MainLayout,
    People,
    Places,
    Things
  },
  data: function() {
    return data;
  }
};
</script>