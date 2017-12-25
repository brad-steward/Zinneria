<template>
  <div class="people">
    <h1>People</h1>
    <p>The People of Zinneria are a varied and (mostly) peaceful lot. The standard citizen believes in peace and strives for it in their daily lives. Those who seek to disrupt that either through military force or simply by being malicious (monsters, etc.) are met with hostility and derision. This has led to an increase in the number of political dealings with the design of subverting the public’s view and still achieving power.</p>
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
      body:
        "A listing of Homebrew/Special rules for each class. Some are new, some are modified, but if a specific class isn't mentioned, then there’s no additional changes to the class. Take it RAW from any official WotC content.",
      children: [
        {
          name: 'Blood Hunter',
          id: 'blood-hunter',
          body:
            'Blood Hunter is a construction of Matthew Mercer and he should be given due credit.' +
            'Blood hunters have sacrificed a part of their humanity in order to pursue the darkness. They gain immense power, but at the cost of being a part of society ever again.' +
            '<br><br><a href="http://www.dmsguild.com/product/170777/Blood-Hunter-Class">Source</a>'
        },
        {
          name: 'Fighter',
          id: 'fighter',
          body: 'The fighter fights things',
          children: [
            {
              name: 'Armiger',
              id: 'armiger',
              body:
                'Armigers are fighters who have dedicated their lives to the pursuit of better, more efficient armor. They carry around a manual of different armor enhancement techniques and use that to improve their own armor, as well as others, within cost, of course.<br><br>' +
                '<a href="https://www.reddit.com/r/UnearthedArcana/comments/4516z2/subclass_the_armiger/">Source</a>'
            },
            {
              name: 'Arsenal',
              id: 'arsenal',
              body:
                'The Arsenal is a fighter of such tremendous love for her armaments that she forms spiritual bonds with each of them. The Arsenal may summon her weapons in an instant as well as use them in special manuvres.<br><br>' +
                '<a href="https://www.reddit.com/r/UnearthedArcana/comments/5va12s/arsenal_fighter_archetype_feedback_much/">Source</a>'
            }
          ]
        },
        {
          name: 'Haemomancer',
          id: 'haemomancer',
          body:
            'Haemomancers use their own lifeforce to generate living weapons and armor which they use to beat back the forces of darkness. Often regarded as evil or sacreligious, these individuals spend as much time away from society as they can, or disguise themselves and attempt to never reveal their arts in polite company.<br>' +
            'This is a reformed DandDwiki class.<br><br>' +
            '<a href="http://homebrewery.naturalcrit.com/share/S1ZQcTv9Jz">Source</a>'
        },
        {
          name: 'Ranger',
          id: 'ranger',
          body:
            'This class operates under the Unearthed Arcana rules for the Revised Ranger. ' +
            'Found here: <a href="https://media.wizards.com/2016/dnd/downloads/UA_RevisedRanger.pdf">UA Article</a>'
        }
      ]
    },
    {
      name: 'Professions',
      id: 'professions',
      body:
        'There are many walks of life across the world of the Zinn. Most are typical people that you would find in any such partially developed world, but Zinneria holds a few in unique tasks.',
      children: [
        {
          name: 'Zinnic',
          id: 'zinnic',
          body:
            'One of the typical adventurer class. Zinnics believe there is glory and power to be found in the ancient places where the Zinn are rumored to still be able to communicate with the modern world. They spend their time either doing work for people who can pay for it, or seeking treasure and goals of their own. They are often mistaken for typical campaigners, but these are set aside by their particular fervor for finding the lost secrets from the creation of the world.'
        },
        {
          name: 'Hunter Guilders',
          id: 'hunter-guilders',
          body:
            "Men and women who spend their lives hunting down the giants that plague the northern mountains, or the colored dragons tha steal sheep. Many are organized into a guild, with contracts available to kill specific creatures or perform reconnaisance or stealth missions to gather info on the monster's operations. Few giant hunters eschew the trappings of organized hunting. These people are often looking for revenge or a different type of glory."
        }
      ]
    },
    {
      name: 'Races',
      id: 'races',
      body:
        'Zinneria is composed of many races varying wildly across species and region. The civilized races are usually pretty open to cultural and genetic mixing, and some cities like Teontia are veritable melting pots of culture and society. The secret races are ones that live secluded, some are unknown to the common populace, but others are merely so far separated from society that they live worlds apart. The vile races are a collection of beings who tend to the evil and chaotic by nature, they are very rarely included in societal affairs and often find themselves on the opposite side of any civilized race in a conflict.' +
        '<br>' +
        '<blockquote>“What is civilized? I fear that definition is merely made up by any who happen to be saying it at the time.” – Domin Thrand, Cleric of Bahamut, 3rd Twist</blockquote>',
      children: [
        {
          name: 'The Civilized Races',
          id: 'civilized-races',
          body:
            '<ul class="internal-link-lists">' +
            '    <li><a class="inactive" href="#humans">Humans</a></li>' +
            '    <li><a class="inactive" href="#elves">Elves</a></li>' +
            '    <li><a class="inactive" href="#dwarves">Dwarves</a></li>' +
            '    <li><a class="inactive" href="#gnomes">Gnomes</a></li>' +
            '    <li><a class="inactive" href="#halflings">Halflings</a></li>' +
            '    <li><a class="inactive" href="#dragonborn">Dragonborn</a></li>' +
            '    <li><a class="inactive" href="#half-elves">Half Elves</a></li>' +
            '    <li><a class="inactive" href="#half-orcs">Half Orcs</a></li>' +
            '    <li><a class="inactive" href="#tiefling">Tiefling</a></li>' +
            '    <li><a href="#caiten">Caiten</a></li>' +
            '</ul>',
          children: [
            {
              name: 'Caiten',
              id: 'caiten',
              body:
                "The Caiten are a race of anthropomorphic cats with a long and varied history. They live in the desert to the east and their main export is DEATH. Jokes aside, Caiten are fierce, independent and naturally prideful. They have a knack for stealth and dexterity and tend toward careers that use those skills. Many Caiten turn toward a Zinnic's work or becoming a researcher due to their natural curiosity." +
                '<br><br>Common Insults: <ul><li>Thistle-fur: This indicates a lack of hygiene which for a caiten is very important.</li></ul>'
            }
          ]
        },
        {
          name: 'The Vile Races',
          id: 'vile-races',
          body: ''
        },
        {
          name: 'The Secret Races',
          id: 'secret-races',
          body: ''
        }
      ]
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

