<template>
  <div class="detail">
    <router-link class="detail__back" to="/">Home</router-link>
    <template v-if="characterData">
      <img class="detail__image" :src="characterData.image" alt="" />
      <div class="detail__info">
        <div class="detail__text">
          <p class="detail__subtext">Character</p>
          {{ characterData.name }}
        </div>
        <div class="detail__text">
          <p class="detail__subtext">Status</p>
          {{ characterData.status }}
        </div>
        <div class="detail__text">
          <p class="detail__subtext">Gender</p>
          {{ characterData.gender }}
        </div>
        <div v-if="characterData.location" class="detail__text">
          <p class="detail__subtext">Last known location</p>
          {{ characterData.location.name }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { fetchCharacterById } from '@/api';

export default {
  name: 'CharacterDetail',
  props: ['character'],
  data() {
    return {
      characterFromApi: {},
    };
  },

  async created() {
    if (!this.character) {
      this.characterFromApi = await fetchCharacterById(this.$route.params.id);
    }
  },

  computed: {
    characterData() {
      return this.character || this.characterFromApi;
    },
  },
};
</script>
