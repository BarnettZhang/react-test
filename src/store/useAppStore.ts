import { create } from 'zustand'

type State = {
  count: number
  theme: 'light' | 'dark'
}

type Actions = {
  increment: () => void
  setTheme: (theme: State['theme']) => void
}

export const useAppStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}))
