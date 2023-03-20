import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type APIState = {
  isLoading: boolean;
  error: string | null;
  setError: (error: string | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const useAPIStore = create<APIState>()(
  devtools(
    persist(
      (set) => ({
        isLoading: false,
        error: null,
        setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
        setError: (error: string | null) => set(() => ({ error }))
      }),
      {
        name: 'api-state'
      }
    )
  )
)
