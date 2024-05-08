import { create } from 'zustand';

export const SearchKeyword = create((set) => ({
  keyword: '',
  setKeyword: (value) => set({ keyword: value }),
}));
