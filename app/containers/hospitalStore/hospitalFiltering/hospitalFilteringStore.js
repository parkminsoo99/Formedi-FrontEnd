import { create } from 'zustand';

const FilteringStore = create((set) => ({
  checked: '',
  setChecked: (value) => set({ checked: value }),
}));

export default FilteringStore;
