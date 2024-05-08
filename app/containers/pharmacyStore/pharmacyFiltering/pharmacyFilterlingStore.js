import { create } from 'zustand';

const FilteringStore = create((set) => ({
  checkedList: '',
  setCheckedList: (value) => set({ checkedList: value }),
}));

export default FilteringStore;
