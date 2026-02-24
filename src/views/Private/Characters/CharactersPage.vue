<template>
  <div>
    <h1>Personajes de mi lista</h1>
    <CharacterList :characters="characters" />
  </div>
</template>
<script setup lang="ts">
import { useCharacterStore } from '@/stores/useCharacterStore';
import { computed } from 'vue';
import CharacterList from './CharactersList/CharacterList.vue';


const charactersStore = useCharacterStore()
const characters = computed(() => charactersStore.formattedCharacters)
</script>
<style module lang="scss"></style>
