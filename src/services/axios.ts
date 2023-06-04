import axios from 'axios'
import { useAPIStore } from '@/store/api'
const { setIsLoading, setMessage } = useAPIStore.getState()

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_ORIGIN
})

apiClient.interceptors.request.use(
  (config) => {
    setIsLoading(true)
    return config
  },
  (error) => {
    setIsLoading(false)
    return Promise.reject(error)
  }
)

apiClient.interceptors.response.use(
  (response) => {
    const successMessage = response.data.message
    setIsLoading(false)

    // show the ReponseAlert component if need.
    if (successMessage) {
      setMessage({
        type: 'success',
        content: successMessage
      })
    }
    return response.data.data
  },
  (error) => {
    setIsLoading(false)
    // when response error, everytime show the ReponseAlert compononent.
    setMessage({
      type: 'error',
      content: error.response.data.message
    })
    return Promise.reject(error)
  }
)

export default apiClient
