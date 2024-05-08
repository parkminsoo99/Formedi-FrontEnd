'use client';

import './pharmacyCardStyle.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Store from '@/app/containers/pharmacyStore/pharmacy/pharmacyStore.js';
import PharmacyName from '@/app/components/pharmacy/pharmacyCard/pharmacyName.js';
import PharmacyLanguage from '@/app/components/pharmacy/pharmacyCard/pharmacyLanguage.js';
import PharmacySearch from '@/app/containers/pharmacyStore/pharmacySearch/pharmacySearchStore.js';
import FilteringStore from '@/app/containers/pharmacyStore/pharmacyFiltering/pharmacyFilterlingStore.js';
import PharmacyPaginationStore from '@/app/containers/pharmacyStore/pharmacyPageStore/pharmacyPageStore.js';

export default function PharmacyCard() {
  const {
    setLat,
    setLng,
    pharmacy,
    fetchPharmacy,
    fetchPharmacyFilter,
    fetchKeywordPharmacy,
  } = Store();
  const [checkedList] = FilteringStore((state) => [state.checkedList]);
  const [keyword] = PharmacySearch((state) => [state.keyword]);
  const { currentItems } = PharmacyPaginationStore(
    (state) => ({ currentItems: state.currentItems(pharmacy) }),
  );
  const router = useRouter();

  useEffect(() => {
    if (checkedList.length === 0 && keyword === '') {
      fetchPharmacy();
    } else if (checkedList.length === 0) {
      fetchKeywordPharmacy(keyword);
    } else {
      fetchPharmacyFilter(checkedList);
    }
  }, [checkedList, keyword, fetchPharmacy, fetchPharmacyFilter, fetchKeywordPharmacy]);

  if (pharmacy.length === 0) return <div>Loading...</div>;

  const handleClick = (id, paramLat, paramLng) => {
    setLat(paramLat);
    setLng(paramLng);
    router.push('/pharmacy/[id]', `/pharmacy/${id}`);
  };

  return (
    <>
      {currentItems.map((item, index) => {
        const filteredLanguages = Object.entries(item).reduce((acc, [key, value]) => {
          if (typeof value === 'boolean' && value) {
            acc.push(key);
          }
          return acc;
        }, []);

        return (
          <div key={item.id} className="pharmacy-card p-3 rounded-[10px] border border-lime-100 shadow-lg">
            <button
              type="button"
              onClick={() => {
                handleClick(item.id, item.latitude, item.longitude);
              }}
            >
              <img
                className="w-80 h-[230px] rounded-[10px] border border-lime-500"
                src="imgs/pharmacy_picture.jpeg"
                alt="Pharmacy"
              />
            </button>
            <div className="flex w-full justify-between items-center mt-3">
              <div className="self-stretch justify-start items-start inline-flex">
                <PharmacyName name={item.name} />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="flex-row justify-start items-start gap-1 inline-flex">
                    <PharmacyLanguage languages={filteredLanguages} />
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
