import {create} from 'zustand'
import axios from 'axios';

const useStore = create(set => ({
  pharmacy: [],
  fetchPharmacy: async () => {
    try {
        const response = await axios.get('http://localhost:9999/pharmacy_real');
        set({ pharmacy: response.data });
        } catch (error) {
        console.error("Failed to fetch data:", error);
        }
    },
  fetchPharmacyFilter: async (checkedList,sliderValue,lat,lng) => {
    try {
        console.log("fetchPharmacy",checkedList,sliderValue,lat,lng)
        const plainOptions = ['English', 'Chinese', 'Japanese'];
        let langChinese = false;
        let langEnglish = false;
        let langJapanese = false;
        switch(checkedList){
            case 'Chinese':
                langChinese = true
            case 'English':
                langEnglish = true
            case 'Japanese':
                langJapanese = true
        }
        const response = await axios.get('http://localhost:9999/pharmacy_real2');
        // const response = await axios.get(`http://localhost:9999/pharmacy_real?english=${langEnglish}&chinese=${langChinese}&japanese=${langJapanese}`);
        set({ pharmacy: response.data });
        } catch (error) {
        console.error("Failed to fetch data:", error);
        }
    },
    fetchKeywordPharmacy: async (keyword) => {
        try {
            console.log("fetchKeywordPharmacy",keyword)
            // const response = await axios.get('http://localhost:9999/pharmacy_real');
            const response = await axios.get(`http://localhost:9999/pharmacy_real?keyword=${keyword}`);
            set({ pharmacy: response.data });
            } catch (error) {
            console.error("Failed to fetch data:", error);
            }
        },
}));

export default useStore;