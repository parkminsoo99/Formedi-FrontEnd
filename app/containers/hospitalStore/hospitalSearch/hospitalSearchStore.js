import { create } from 'zustand';

const SearchKeyword = create((set) => ({
  keyword: '',
  setKeyword: (value) => set({ keyword: value }),
}));

export default SearchKeyword;