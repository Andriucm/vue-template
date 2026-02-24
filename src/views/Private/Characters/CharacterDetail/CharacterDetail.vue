<template>
  <div>
    <h2>{{ character.name }} {{ character.lastName }}</h2>
    <button @click="editCharacter(character.id)">Editar</button>
    <button @click="removeCharacter(character.id)">Borrar</button>
  </div>
</template>
<script setup lang="ts">
import { type Character } from '@/models/characterModel';
import { useCharacterStore } from '@/stores/useCharacterStore';
import { useRouter } from 'vue-router';
defineProps<{
  character: Character
}>()

const characterStore = useCharacterStore()
const router = useRouter()

const editCharacter = (id: number) => {
  router.push({ name: 'editCharactersPage', params: { id: id } })
}
const removeCharacter = async (id: number) => {
  await characterStore.deleteCharacter(id);
}
</script>
<style module lang="scss"></style>
