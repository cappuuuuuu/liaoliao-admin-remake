import axios from 'axios'
import { useAPIStore } from '@/store/api'
const { setIsLoading, setError } = useAPIStore.getState()

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_ORIGIN
})

api.interceptors.request.use(
  (config) => {
    setIsLoading(true)
    return config
  },
  (error) => {
    setIsLoading(false)
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    setIsLoading(false)
    // TODO: add success messages when needed
    return response.data.data
  },
  (error) => {
    setIsLoading(false)
    setError(error.response.data.message || 'An error occurred')
    return Promise.reject(error)
  }
)

export default api
