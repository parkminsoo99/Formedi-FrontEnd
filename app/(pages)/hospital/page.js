"use client"
import HospitalCard from "@/app/components/hospital/hospitalCard/hospitalCard";
import HospitalFilering from "@/app/components/hospital/hospitalFilter/hospitalFiltering";
import useHospitalPaginationStore from "@/app/containers/hospitalStore/hospitalpageStore/hospitalPageStore"
import useStore from '@/app/containers/hospitalStore/hospital/hospitalStore';
import Pagination from "@/app/components/hospital/hospitalPage/hospitalPage";
export default function pharmacy() {
    const {hospital} = useStore();
    const {currentPage, setCurrentPage, totalPages} = useHospitalPaginationStore(
        state => ({currentPage: state.currentPage, setCurrentPage: state.setCurrentPage, totalPages: state.totalPages(hospital)})
    );

    return (
        <div>
            <div className="container mx-auto flex flex-row">
                <div className="inline-grid grid-cols-3 gap-4">
                    <HospitalCard/>
                </div>
                <HospitalFilering/>
            </div>
            <div className="mt-20">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}/>
            </div>
        </div>
    )
}