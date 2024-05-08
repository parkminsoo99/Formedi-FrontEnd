'use client';
import "./hospitalCardStyle.css"
import useStore from '@/app/containers/hospitalStore/hospital/hospitalStore';
import { useEffect, useState } from 'react';
import HospitalName from '@/app/components/hospital/hospitalCard/hospitalName';
import HospitalLanguage from '@/app/components/hospital/hospitalCard/hospitalLanguage';
import Link from "next/link";
import { useSearchKeyword } from "@/app/containers/hospitalStore/hospitalSearch/hospitalSearchStore";
import useFilteringStore from "@/app/containers/hospitalStore/hospitalFiltering/hospitalFilteringStore";
import useHospitalPaginationStore from "@/app/containers/hospitalStore/hospitalpageStore/hospitalPageStore"
import { useRouter } from 'next/navigation'
export default function hospitalCard() {
const router = useRouter();
const {lat,lng,setLat,setLng,hospital, fetchNationHospital, fetchHospital, fetchKeywordHospital} = useStore();
const [keyword] = useSearchKeyword(state => [state.keyword]);
const [checked] = useFilteringStore(state => [state.checked]);
const {currentItems} = useHospitalPaginationStore(
    state => ({currentItems: state.currentItems(hospital)})
);
useEffect(() => {
    if (keyword == '' && checked.length == 0) {
        fetchHospital()
    }
    else if (checked.length != 0) {
      fetchNationHospital(checked[0])
    }
    else {
      fetchKeywordHospital(keyword);
    }
  }, [keyword, checked]);


  if (hospital.length === 0)
    return <div>Loading...</div>;
const handleClick = (id, param_lat, param_lng) => {
    setLat(param_lat)
    setLng(param_lng)
    router.push('/hospital/[id]', `/hospital/${id}`);
    };
  return (
    <>
      {currentItems.map((item, index) => {
        const filteredLanguages = Object.entries(item).reduce((acc, [key, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            return acc.concat(value);
          }
          return acc;
        }, []);
        return (
          <div key={index} className="pharmacy-card p-3 rounded-[10px] border border-lime-100 shadow-lg">
            {/* <Link href="/hospital/[id]" as={`/hospital/${item.hospital_register_num}`}> */}
            {/* <Link key={item.hospital_register_num}  href={{
              pathname: `/hospital/${item.hospital_register_num}`,
              query: {
                lat: item.hospital_latitude,
                lng: item.hospital_longitude
              }
            }}> */}
              <button onClick={() => handleClick(item.hospital_register_num,item.hospital_latitude, item.hospital_longitude)}><img
                className="w-80 h-[230px] rounded-[10px] border border-lime-500"
                src="imgs/hospital-picture.jpeg" /></button>
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