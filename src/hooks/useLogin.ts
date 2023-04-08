import { useMutation } from '@tanstack/react-query'
import { loginOperator, LoginPayload } from '@/services/api/operator'

export const useLogin = () => {
  return useMutation((payload: LoginPayload) => loginOperator(payload))
}
