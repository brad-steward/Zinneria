<template>
  <div class="people">
    <p>This is where we keep the people based information</p>
    <div class="dynamic-wiki">
      <div class="articles">
      <wiki-article v-for="article in articles" :key="article.name" :article="article"></wiki-article>
    </div>
    <div class="article-nav">
<wiki-link 
v-for="article in articles"
:article="article"
:key="article.name"></wiki-link>
    </div>
    </div>
    
  </div>
</template>

<script>
import WikiArticle from '../../components/WikiArticle.vue';
import WikiLink from '../../components/WikiLink.vue';

var data = {
  articles: [
    {
      name: 'Classes',
      id: 'classes',
      body: 'A listing of Homebrew/Special rules for each class. Some are new, some are modified, but if a specific class isn\'t mentioned, then there’s no additional changes to the class. Take it RAW from any official WotC content.',
      children: [
        {
          name: 'Blood Hunter',
          id: 'blood-hunter',
          body: 'Blood Hunter is a construction of Matthew Mercer and he should be given due credit.' + 
          'Blood hunters have sacrificed a part of their humanity in order to pursue the darkness. They gain immense power, but at the cost of being a part of society ever again.'
          + '<br><br><a href="http://www.dmsguild.com/product/170777/Blood-Hunter-Class">Source</a>'
        },
        {
          name: 'Fighter',
          id: 'fighter',
          body: 'The fighter fights things',
          children: [
            {
              name: 'Armiger',
              id: 'armiger',
              body: 'Armigers are fighters who have dedicated their lives to the pursuit of better, more efficient armor. They carry around a manual of different armor enhancement techniques and use that to improve their own armor, as well as others, within cost, of course.<br><br>' + '<a href="https://www.reddit.com/r/UnearthedArcana/comments/4516z2/subclass_the_armiger/">Source</a>'
            },
            {
              name: 'Arsenal',
              id: 'arsenal',
              body: 'The Arsenal is a fighter of such tremendous love for her armaments that she forms spiritual bonds with each of them. The Arsenal may summon her weapons in an instant as well as use them in special manuvres.<br><br>' + '<a href="https://www.reddit.com/r/UnearthedArcana/comments/5va12s/arsenal_fighter_archetype_feedback_much/">Source</a>'
            }
          ]
        },
        {
          name: 'Haemomancer',
          id: 'haemomancer',
          body: 'Haemomancers use their own lifeforce to generate living weapons and armor which they use to beat back the forces of darkness. Often regarded as evil or sacreligious, these individuals spend as much time away from society as they can, or disguise themselves and attempt to never reveal their arts in polite company.<br>' +
          'This is a reformed DandDwiki class.<br><br>' +
          '<a href="http://homebrewery.naturalcrit.com/share/S1ZQcTv9Jz">Source</a>'
        },
        
      ]
    },
    {
      name: 'Professions',
      id: 'professions',
      body: 'These are the professions'
    },
    {
      name: 'Races',
      id: 'races',
      body: 'These are the races'
    },
    {
      name: 'Deities',
      id: 'deities',
      body: 'These are the Deities'
    },
    {
      name: 'Factions',
      id: 'factions',
      body: 'These are the factions'
    }
  ]
};

export default {
  components: {
    WikiLink,
    WikiArticle
  },
  data: () => data
};
</script>

