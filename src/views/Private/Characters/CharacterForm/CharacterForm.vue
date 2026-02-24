<template>
  <form @submit.prevent="handleSubmit">
    <InputElement v-model="formData.name.value" type="text" placeholder="Name" required :error="formData.name.error" />
    <InputElement v-model="formData.lastName.value" type="text" placeholder="Last name" required
      :error="formData.lastName.error" />

    <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
  </form>
</template>

<script setup lang="ts">
import InputElement from '@/components/InputElement.vue'
import apiClient from '@/interceptors/axios'
import type { Character } from '@/models/characterModel'
import { useCharacterStore } from '@/stores/useCharacterStore'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { z } from 'zod'

const router = useRouter()
const route = useRoute()
const characterStore = useCharacterStore()
const isEdit = computed(() => !!route.params.id)

const characterSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
})

const formData = ref({
  name: { value: '', error: '' },
  lastName: { value: '', error: '' },
})

if (isEdit.value) {
  const id = Number(route.params.id)
  const character = characterStore.getCharacter(id)

  if (character) {
    formData.value = {
      name: { value: character.name, error: '' },
      lastName: { value: character.lastName, error: '' },
    }
  } else {
    router.push({ name: 'newCharactersPage' })
  }
}

const handleSubmit = async () => {
  try {
    Object.keys(formData.value).forEach((key) => {
      formData.value[key as keyof typeof formData.value].error = ''
    })

    const result = characterSchema.safeParse({
      name: formData.value.name.value,
      lastName: formData.value.lastName.value,
    })

    if (!result.success) {
      result.error.issues.forEach((error) => {
        const field = error.path[0] as keyof typeof formData.value
        if (formData.value[field]) {
          formData.value[field].error = error.message
        }
      })
      return
    }

    const formDataPayload = Object.fromEntries(
      Object.entries(formData.value).map(([key, { value }]) => [key, value]),
    ) as unknown as Omit<Character, "id">

    if (isEdit.value) {
      const formatDataPayloadWithId = { ...formDataPayload, id: Number(route.params.id) }
      await characterStore.editCharacter(formatDataPayloadWithId as Character)
    } else {
      await characterStore.addCharacter(formDataPayload)
    }

    router.push({ name: 'charactersPage' })
  } catch (err: unknown) {
    console.error('Error saving character:', err)
  }
}
</script>

<style module lang="scss"></style>
