<template>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <CharacterDetail :character="character" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { type Character } from '@/models/characterModel';
import CharacterDetail from '../CharacterDetail/CharacterDetail.vue';
defineProps<{
  characters: Character[]
}>()
</script>
<style module lang="scss"></style>
