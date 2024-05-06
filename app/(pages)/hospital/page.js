
import HospitalCard from "@/app/components/hospital/hospitalCard/hospitalCard";
import HospitalSearch from "@/app/components/hospital/hospitalSearch/hospitalSearch";
export default function pharmacy() {
    return (
        <div className="container mx-auto flex flex-row">
            <div className="inline-grid grid-cols-3 gap-4">
                <HospitalCard/>
            </div>
            <HospitalSearch />
        </div>
    )
}