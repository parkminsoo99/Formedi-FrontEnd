'use client';

import PharmacyCard from '../../components/pharmacy/pharmacyCard/pharmacyCard';
import PharmacyFiltering from '../../components/pharmacy/pharmacyFilter/pharmacyFiltering';
import PharmacyPaginationStore from '../../containers/pharmacyStore/pharmacyPageStore/pharmacyPageStore';
import Store from '../../containers/pharmacyStore/pharmacy/pharmacyStore';
import Pagination from '../../components/pharmacy/pharmacyPage/pharmacyPage';

export default function Pharmacy() {
  const { pharmacy } = Store();
  const {
    currentPage,
    setCurrentPage,
    totalPages,
  } = PharmacyPaginationStore((state) => ({
    currentPage: state.currentPage,
    setCurrentPage: state.setCurrentPage,
    totalPages: state.totalPages(pharmacy),
  }));
  return (
    <div>
      <div className="container mx-auto flex flex-row">
        <div className="inline-grid grid-cols-3 gap-4">
          <PharmacyCard />
        </div>
        <PharmacyFiltering />
      </div>
      <div className="mt-15">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
