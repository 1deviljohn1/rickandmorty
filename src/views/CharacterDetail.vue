<template>
  <div class="detail">
    <router-link to="/">
      <button>Back</button>
    </router-link>
    <p class="detail__name">{{ character.name }}</p>
    <p class="detail__name">{{ character.status }}</p>
    <p class="detail__name">{{ character.gender }}</p>
    <img class="detail__image" :src="character.image" alt="" />
    <p class="detail__location">{{ character.location.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetail',
  props: ['character'],
};
</script>
