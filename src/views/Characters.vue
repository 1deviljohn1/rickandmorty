<template>
  <div id="app">
    <div class="characters">
      <router-link
        v-for="character in characters"
        :key="character.id"
        :to="{
          name: 'CharacterDetail',
          params: { character, id: character.id },
        }"
        class="characters__item"
      >
        <img class="characters__image" :src="character.image" alt="" />
        <p class="characters__name">{{ character.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { fetchCharacters } from '@/api';

export default {
  name: 'Characers',

  data() {
    return {
      characters: [],
      page: 1,
      maxPage: 1,
      preventScroll: false,
    };
  },

  async created() {
    const data = await fetchCharacters(this.page);

    this.maxPage = data.info.pages;
    this.characters = data.results;
  },

  mounted() {
    window.addEventListener('scroll', this.onscroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onscroll);
  },

  methods: {
    async onscroll() {
      const scrolled = window.innerHeight + window.scrollY;

      if (scrolled >= document.body.offsetHeight && !this.preventScroll) {
        this.preventScroll = true;
        this.page++;
        await this.loadCharacters(this.page);
        this.preventScroll = false;
      }
    },

    async loadCharacters(page) {
      if (page >= this.maxPage) {
        return;
      }

      this.characters = [
        ...this.characters,
        ...(await fetchCharacters(page)).results,
      ];
    },
  },
};
</script>
