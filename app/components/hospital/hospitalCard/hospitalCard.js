'use client';
import "./hospitalCardStyle.css"
import useStore from '@/app/containers/hospitalStore/hospital/hospitalStore';
import {useEffect} from 'react';
import HospitalName from '@/app/components/hospital/hospitalCard/hospitalName';
import HospitalLanguage from '@/app/components/hospital/hospitalCard/hospitalLanguage';
import Link from "next/link";
import { useSearchKeyword } from "@/app/containers/hospitalStore/hospitalSearch/hospitalSearchStore";
export default function hospitalCard() {
    const {hospital, fetchHospital,fetchKeywordHospital} = useStore();
    const [keyword] = useSearchKeyword(state => [state.keyword]);
    console.log("ininini",keyword)
    useEffect(() => {
        if(keyword == ''){
            console.log("111111111111111111")
            fetchHospital()
        }
        else{
            console.log("2222222222")
            fetchKeywordHospital(keyword);
           
        }
    }, [keyword]);
    if (hospital.length === 0) 
        return <div>Loading...</div>;
    return (
        <>
        {hospital.map((item, index) => {
            const filteredLanguages = Object.entries(item).reduce((acc, [key, value]) => {
                if (typeof value === 'boolean' && value) {
                    acc.push(key); 
                }
                return acc;
            }, []);

            return (
                <div key={index} className="pharmacy-card p-3 rounded-[10px] border border-lime-100 shadow-lg"> 
                    <Link key={item.id} href={{
                        pathname : `/hospital/${item.id}`,
                        query : {
                            lat : item.lat,
                            lng : item.lng
                        }
                        }}>
                    <button><img
                        className="w-80 h-[230px] rounded-[10px] border border-lime-500"
                        src="imgs/hospital-picture.jpeg"/></button></Link>
                    <div className="flex w-full justify-between items-center mt-3">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <HospitalName name={item.name}/> 
                            <div className="flex-col justify-start items-start gap-1 inline-flex">
                                <div className="flex-row justify-start items-start gap-1 inline-flex">
                                    <HospitalLanguage languages={filteredLanguages}/>
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