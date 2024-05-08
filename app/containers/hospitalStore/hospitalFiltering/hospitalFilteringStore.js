import {create} from 'zustand';

const useFilteringStore = create(set => ({
    checked : '',
    setChecked : (value) => set({checked: value}),
}))

export default useFilteringStore;
