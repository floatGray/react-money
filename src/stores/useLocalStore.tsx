import { create } from 'zustand'

interface Local {
  hasReadWelcomes: boolean
  setHasReadWelcomes: (read: boolean) => void
}
const init = localStorage.getItem('hasReadWelcomes')
export const useLocalStore = create<Local>(set => ({
  hasReadWelcomes: init === 'yes',
  setHasReadWelcomes: (read: boolean) => {
    const res = read ? 'yes' : 'no'
    localStorage.setItem('hasReadWelcomes', res)
    set({ hasReadWelcomes: res === 'yes' })
  },
}))
