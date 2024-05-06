import {create} from 'zustand'
import axios from 'axios';

const useStore = create(set => ({
    hospital: [],
    fetchHospital: async () => {
    try {
        const response = await axios.get('http://localhost:9999/pharmacy_real');
        set({ hospital: response.data });
        } catch (error) {
        console.error("Failed to fetch data:", error);
        }
    },
    fetchKeywordHospital: async (keyword) => {
        try {
            console.log("fetchKeywordPharmacy",keyword)
            // const response = await axios.get('http://localhost:9999/pharmacy_real');
            const response = await axios.get(`http://localhost:9999/pharmacy_real?keyword=${keyword}`);
            set({ hospital: response.data });
            } catch (error) {
            console.error("Failed to fetch data:", error);
            }
        },
}));

export default useStore;