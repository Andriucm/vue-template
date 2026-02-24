<template>
  <input class="input-field" v-model="computedModel" :type="type" :placeholder="placeholder" :required="required" />
  <p v-if="error" class="error-message">{{ error }}</p>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  error: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])

const computedModel = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emits('update:modelValue', value)
  }
})
</script>
<style module lang="scss">
.input-field{
  margin-bottom: 16px;
}
.error-message {
  color: red;
  margin-top: 8px;
  font-size: 0.875em;
  margin-top: 0.25em;
}
</style>
