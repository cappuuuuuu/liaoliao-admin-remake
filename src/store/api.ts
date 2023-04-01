import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import produce from 'immer'

type Message = {
  type: 'success' | 'error' | null;
  content: string | null;
}

type APIState = {
  isLoading: boolean;
  message: Message;
  setMessage: (message: Message) => void;
  initMessage: () => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const useAPIStore = create<APIState>()(
  devtools(
    (set) => ({
      isLoading: false,
      message: { type: null, content: null },
      setMessage: (message: Message) => set(() => ({ message })),
      initMessage: () => set(
        produce((state) => {
          state.message.content = null
        })
      ),
      setIsLoading: (isLoading: boolean) => set(() => ({ isLoading }))
    }),
    {
      name: 'api-state'
    }
  )
)
