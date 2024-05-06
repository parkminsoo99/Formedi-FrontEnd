import {create} from 'zustand';

const useFilteringStore = create(set => ({
    checkedList : '',
    setCheckedList : (value) => set({checkedList: value}),
}))

export default useFilteringStore;
