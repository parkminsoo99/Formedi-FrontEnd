import { create } from 'zustand';
import axios from 'axios';

const Store = create((set) => ({
  lat: '',
  setLat: (value) => set({ lat: value }),
  lng: '',
  setLng: (value) => set({ lng: value }),
  pharmacy: [],
  fetchPharmacy: async () => {
    try {
      const response = await axios.get('/pharmacies/name/약국');
      set({ pharmacy: response.data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
  fetchPharmacyFilter: async (checkedList) => {
    try {
      const plainOptions = ['English', 'Chinese', 'Japanese'];
      let langChinese = false;
      let langEnglish = false;
      let langJapanese = false;
      checkedList.forEach((element) => {
        if (element === 'Chinese') {
          langChinese = true;
        } else if (element === 'English') {
          langEnglish = true;
        } else if (element === 'Japanese') {
          langJapanese = true;
        }
      });

      const response = await axios.get(`/pharmacies/nearest?lat=123&lon=123&english=${langEnglish}&chinese=${langChinese}&japanese=${langJapanese}`);
      set({ pharmacy: response.data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
  fetchKeywordPharmacy: async (keyword) => {
    try {
      const response = await axios.get(`/pharmacies/name/${keyword}`);
      set({ pharmacy: response.data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
}));

export default Store;
