import { create } from 'zustand';
import axios from 'axios';

axios.defaults.withCredentials = true;
const Store = create((set) => ({
  lat: '',
  setLat: (value) => set({ lat: value }),
  lng: '',
  setLng: (value) => set({ lng: value }),
  hospital: [],
  fetchHospital: async () => {
    try {
      const response = await axios({
        url: '/hospitals',
        method: 'GET',
      });
      set({ hospital: response.data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
  fetchKeywordHospital: async (keyword) => {
    try {
      const response = await axios.get(`/hospitals/search?keyword=${keyword}`);
      set({ hospital: response.data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
  fetchNationHospital: async (nation) => {
    try {
      const response = await axios.get(`/hospitals/nation/${nation}`);
      set({ hospital: response.data });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  },
}));

export default Store;
