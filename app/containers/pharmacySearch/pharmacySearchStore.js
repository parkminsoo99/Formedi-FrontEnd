import { create } from 'zustand'

export const useSearchKeyword = create((set) => ({
  keyword: '',
  setKeyword: (value) => set({ keyword: value }),
}))
