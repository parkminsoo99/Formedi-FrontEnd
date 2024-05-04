'use client';
import "./pharmacyCardStyle.css"
import useStore from '@/app/containers/pharmacy/pharmacyStore';
import {useEffect,useState} from 'react';
import PharmacyName from '@/app/components/pharmacy/pharmacyCard/pharmacyName';
import PharmacyLanguage from '@/app/components/pharmacy/pharmacyCard/pharmacyLanguage';
import Link from "next/link";
import { useSearchKeyword } from "@/app/containers/pharmacySearch/pharmacySearchStore";
import useFilteringStore from '@/app/containers/pharmacyFiltering/pharmacyFilterlingStore';
export default function pharmacyCard() {
    const {pharmacy, fetchPharmacy,fetchPharmacyFilter,fetchKeywordPharmacy} = useStore();
    const [checkedList] = useFilteringStore(state => [state.checkedList]); 
    const [sliderValue] = useFilteringStore(state => [state.sliderValue]); 
    const [keyword] = useSearchKeyword(state => [state.keyword]);
    console.log("ininini",checkedList,keyword)
    useEffect(() => {
        if(checkedList.length == 0 && keyword == ''){
            console.log("111111111111111111")
            fetchPharmacy()
        }
        else if(checkedList.length == 0){
            console.log("2222222222")
            fetchKeywordPharmacy(keyword);
           
        }
        else{
            console.log("333333333")
            fetchPharmacyFilter(checkedList);
        }
    }, [sliderValue,checkedList,keyword]);
    if (pharmacy.length === 0) 
        return <div>Loading...</div>;
    return (
        <>
        {pharmacy.map((item, index) => {
            const filteredLanguages = Object.entries(item).reduce((acc, [key, value]) => {
                if (typeof value === 'boolean' && value) {
                    acc.push(key); 
                }
                return acc;
            }, []);

            return (
                <div key={index} className="pharmacy-card p-3 rounded-[10px] border border-lime-100 shadow-lg"> 
                    <Link key={item.id} href={{
                        pathname : `/pharmacy/${item.id}`,
                        query : {
                            lat : item.lat,
                            lng : item.lng
                        }
                        }}>
                    <button><img
                        className="w-80 h-[230px] rounded-[10px] border border-black"
                        src="https://via.placeholder.com/320x230"/></button></Link>
                    <div className="flex w-full justify-between items-center mt-3">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <PharmacyName name={item.name}/> 
                            <div className="flex-col justify-start items-start gap-1 inline-flex">
                                <div className="flex-row justify-start items-start gap-1 inline-flex">
                                    <PharmacyLanguage languages={filteredLanguages}/>
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