'use client';

import './hospitalCardStyle.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Store from '@/app/containers/hospitalStore/hospital/hospitalStore.js';
import HospitalName from '@/app/components/hospital/hospitalCard/hospitalName.js';
import HospitalLanguage from '@/app/components/hospital/hospitalCard/hospitalLanguage.js';
import { SearchKeyword } from '@/app/containers/hospitalStore/hospitalSearch/hospitalSearchStore.js';
import FilteringStore from '@/app/containers/hospitalStore/hospitalFiltering/hospitalFilteringStore.js';
import HospitalPaginationStore from '@/app/containers/hospitalStore/hospitalpageStore/hospitalPageStore.js';

export default function HospitalCard() {
  const router = useRouter();
  const {
    setLat,
    setLng,
    hospital,
    fetchNationHospital,
    fetchHospital,
    fetchKeywordHospital,
  } = Store();
  const [keyword] = SearchKeyword((state) => [state.keyword]);
  const [checked] = FilteringStore((state) => [state.checked]);
  const { currentItems } = HospitalPaginationStore(
    (state) => ({ currentItems: state.currentItems(hospital) }),
  );

  useEffect(() => {
    if (keyword === '' && checked.length === 0) {
      fetchHospital();
    } else if (checked.length !== 0) {
      fetchNationHospital(checked[0]);
    } else {
      fetchKeywordHospital(keyword);
    }
  }, [keyword, checked, fetchHospital, fetchKeywordHospital, fetchNationHospital]);

  if (hospital.length === 0) return <div>Loading...</div>;

  const handleClick = (id, paramLat, paramLng) => {
    setLat(paramLat);
    setLng(paramLng);
    router.push('/hospital/[id]', `/hospital/${id}`);
  };

  return (
    <>
      {currentItems.map((item) => {
        const filteredLanguages = Object.entries(item).reduce((acc, [, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            return acc.concat(value);
          }
          return acc;
        }, []);

        return (
          <div key={item.hospital_register_num} className="pharmacy-card p-3 rounded-[10px] border border-lime-100 shadow-lg">
            <button
              type="button"
              onClick={() => handleClick(item.hospital_register_num, item.hospital_latitude, item.hospital_longitude)}
            >
              <img
                className="w-80 h-[230px] rounded-[10px] border border-lime-500"
                src="imgs/hospital-picture.jpeg"
                alt="Hospital"
              />
            </button>
            <div className="flex w-full justify-between items-center mt-3">
              <div className="self-stretch justify-start items-start inline-flex">
                <HospitalName name={item.hospital_name} />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="flex-row justify-start items-start gap-1 inline-flex">
                    <div className="inline-grid grid-cols-3 gap-4">
                      <HospitalLanguage languages={filteredLanguages} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
