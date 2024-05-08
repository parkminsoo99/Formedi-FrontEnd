import { create } from 'zustand';

const PharmacySearch = create((set) => ({
  keyword: '',
  setKeyword: (value) => set({ keyword: value }),
}));
export default PharmacySearch;
