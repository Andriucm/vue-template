import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Login/LoginPage.vue'
import RegisterPage from '@/views/Register/RegisterPage.vue'
import CharactersPage from '@/views/Private/Characters/CharactersPage.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { useCharacterStore } from '@/stores/useCharacterStore'
import CharacterForm from '@/views/Private/Characters/CharacterForm/CharacterForm.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
    { path: '/characters', name: 'charactersPage', component: CharactersPage },
    { path: '/characters/new', name: 'newCharactersPage', component: CharacterForm },
    { path: '/characters/edit/:id', name: 'editCharactersPage', component: CharacterForm },
  ],
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ['login', 'register']
  const authRequired = !publicPages.includes(to.name as string)

  const authStore = useAuthStore()

  const token = authStore?.token

  if (authRequired) {
    const characterStore = useCharacterStore()
    characterStore.init()

    if (!token) {
      return next({ name: 'login' })
    }
  }
  next()
})

export default router
