import apiClient from '@/interceptors/axios'
export const login = (email: string, password: string) => {
  return apiClient.post('/api/login', {
    email,
    password,
  })
}
export const register = (email: string, password: string) => {
  return apiClient.post('/api/register', {
    email,
    password,
  })
}
