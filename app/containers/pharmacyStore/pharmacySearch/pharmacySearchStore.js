import { create } from 'zustand';

export const PharmacySearch = create((set) => ({
  keyword: '',
  setKeyword: (value) => set({ keyword: value }),
}));
