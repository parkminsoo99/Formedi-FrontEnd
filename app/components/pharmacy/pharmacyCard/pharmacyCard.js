'use client';
import "./pharmacyCardStyle.css"
import useStore from '@/app/containers/pharmacyStore/pharmacy/pharmacyStore';
import {useEffect} from 'react';
import PharmacyName from '@/app/components/pharmacy/pharmacyCard/pharmacyName';
import PharmacyLanguage from '@/app/components/pharmacy/pharmacyCard/pharmacyLanguage';
import Link from "next/link";
import { useSearchKeyword } from "@/app/containers/pharmacyStore/pharmacySearch/pharmacySearchStore";
import useFilteringStore from '@/app/containers/pharmacyStore/pharmacyFiltering/pharmacyFilterlingStore';
import usePharmacyPaginationStore from "@/app/containers/pharmacyStore/pharmacyPageStore/pharmacyPageStore";
import {useRouter} from 'next/navigation';
export default function pharmacyCard() {
    const {setLat,setLng, pharmacy, fetchPharmacy,fetchPharmacyFilter,fetchKeywordPharmacy} = useStore();
    const [checkedList] = useFilteringStore(state => [state.checkedList]); 
    const [keyword] = useSearchKeyword(state => [state.keyword]);
    const {currentItems} = usePharmacyPaginationStore(
        state => ({currentItems: state.currentItems(pharmacy)})
    );
    const router = useRouter();

    useEffect(() => {
        if(checkedList.length == 0 && keyword == ''){
            fetchPharmacy()
        }
        else if(checkedList.length == 0){
            fetchKeywordPharmacy(keyword);
           
        }
        else{
            fetchPharmacyFilter(checkedList);
        }
    }, [checkedList,keyword]);

    if (pharmacy.length === 0) 
        return <div>Loading...</div>;
    const handleClick = (id, param_lat, param_lng) => {
        setLat(param_lat)
        setLng(param_lng)
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
                <div key={index} className="pharmacy-card p-3 rounded-[10px] border border-lime-100 shadow-lg"> 
                    {/* <Link key={item.id} href={{
                        pathname : `/pharmacy/${item.id}`,
                        query : {
                            lat : item.latitude,
                            lng : item.longitude
                        }
                        }}> */}
                    <button onClick={() => {handleClick(item.id,item.latitude,item.longitude)}}><img
                        className="w-80 h-[230px] rounded-[10px] border border-lime-500"
                        src="imgs/pharmacy_picture.jpeg"/></button>
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