<template>
  <form @submit.prevent="handleRegister">
    <InputElement v-model="formData.email.value" :type="'email'" :placeholder="'Email'" required
      :error="formData.email.error" />
    <InputElement v-model="formData.password.value" :type="'password'" :placeholder="'Password'" required
      :error="formData.password.error" />
    <InputElement v-model="formData.confirmPassword.value" :type="'password'" :placeholder="'Confirm Password'" required
      :error="formData.confirmPassword.error" />

    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputElement from '@/components/InputElement.vue';
import { z } from 'zod';
import { register } from '@/services/authenticateUser';

const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters long' }).refine((data) => {
    return data === formData.value.password.value;
  }, { message: 'Passwords do not match', path: ['confirmPassword'] })
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
  },
  confirmPassword: {
    value: '',
    error: ''
  }
});

const handleRegister = async () => {
  try {
    Object.keys(formData.value).forEach((key) => {
      formData.value[key as keyof typeof formData.value].error = '';
    });

    const result = registerSchema.safeParse({
      email: formData.value.email.value,
      password: formData.value.password.value,
      confirmPassword: formData.value.confirmPassword.value
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
    await register(
      formData.value.email.value,
      formData.value.password.value
    );
    router.push({ name: 'login' });
  } catch (err) {
    console.error('Error during register:', err);
  }

}
</script>
<style scoped></style>
