
import PharmacyCard from "@/app/components/pharmacy/pharmacyCard/pharmacyCard"
import PharmacyFiltering from "@/app/components/pharmacy/pharmacyFilter/pharmacyFiltering"
export default function pharmacy() {
    return (
        <div className="container mx-auto flex flex-row">
            <div className="inline-grid grid-cols-3 gap-4">
                <PharmacyCard/>
            </div>
            <PharmacyFiltering />
        </div>
    )
}