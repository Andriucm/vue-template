import type { Character } from '@/models/characterModel'
import { useAuthStore } from '@/stores/useAuthStore'
import { mockCharacters } from '@/mocks/charactersMock'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const apiClient = axios.create({
  baseURL: 'http://localhost:4000' /* import.meta.env.VITE_API_BASE_URL */,
})

// "request" las peticiones
// "response" las respuestas
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const mock = new MockAdapter(apiClient)

mock.onPost('/api/register').reply((config) => {
  const { email, password } = JSON.parse(config.data)

  if (email && password) {
    const authStore = useAuthStore()
    const token = `mocked_token`
    authStore.setToken(token)
    return [200, { token, message: 'User registered successfully' }]
  } else {
    return [400, { message: 'Missing email or password' }]
  }
})

mock.onPost('/api/login').reply((config) => {
  const { email, password } = JSON.parse(config.data)

  if (email === 'test@test.com' && password === 'testtest') {
    const authStore = useAuthStore()
    const token = `mocked_token`
    authStore.setToken(token)
    return [200, { token, message: 'User logged in successfully' }]
  } else {
    return [401, { message: 'Invalid email or password' }]
  }
})

mock.onGet(`/api/characters`).reply(200, mockCharacters)

mock.onPost(`/api/characters`).reply((config) => {
  const characterData: Character = JSON.parse(config.data)
  const formattedCharacter = { ...characterData, id: mockCharacters.length + 1 }
  mockCharacters.push(formattedCharacter)
  return [200, formattedCharacter]
})

// api/characters/1
mock.onPut(/\/api\/characters\/\d+/).reply((config) => {
  const id = parseInt(config.url!.split('/').pop()!)
  const characterData: Character = JSON.parse(config.data)

  const index = mockCharacters.findIndex((character) => {
    return character.id === id
  })
  if (index === -1) {
    return [404, { message: 'Character not found' }]
  }
  mockCharacters[id] = characterData
  return [200, characterData]
})

mock.onDelete(/\/api\/characters\/\d+/).reply((config) => {
  const id = parseInt(config.url!.split('/').pop()!)
  const index = mockCharacters.findIndex((character) => {
    return character.id === id
  })
  const foundCharacter = mockCharacters[index]
  if (!foundCharacter) {
    return [404, { message: 'Character not found' }]
  }
  mockCharacters.splice(index, 1)
  return [200, { message: 'Character deleted successfully' }]
})

export default apiClient
