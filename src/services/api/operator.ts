import apiClient from '@/services/axios'

export type LoginPayload = {
  account: string;
  password: string;
}

export function loginOperator (payload: LoginPayload) {
  return apiClient.post('admin/login', payload)
}
