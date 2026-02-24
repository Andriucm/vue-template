<template>
  <form @submit.prevent="handleLogin">
    <InputElement v-model="formData.email.value" :type="'email'" :placeholder="'Email'" required
      :error="formData.email.error" />
    <InputElement v-model="formData.password.value" :type="'password'" :placeholder="'Password'" required
      :error="formData.password.error" />

    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputElement from '@/components/InputElement.vue';
import { z } from 'zod';
import { login } from '@/services/authenticateUser';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
})

const router = useRouter();

const formData = ref({
  email: {
    value: '',
    error: ''
  },
  password: {
    value: '',
    error: ''
  }
});

const handleLogin = async () => {
  try {
    Object.keys(formData.value).forEach((key) => {
      formData.value[key as keyof typeof formData.value].error = '';
    });

    const result = loginSchema.safeParse({
      email: formData.value.email.value,
      password: formData.value.password.value
    });

    if (!result.success) {
      result.error.errors.forEach((e) => {
        const field = e.path[0] as keyof typeof formData.value;
        if (formData.value[field]) {
          formData.value[field].error = e.message;
        }
      });
      return;
    }
    //pegarle al backend
    await login(
      formData.value.email.value,
      formData.value.password.value
    );
    router.push({ name: 'charactersPage' });
  } catch (err) {
    console.error('Error during login:', err);
  }

}
</script>
<style scoped></style>
