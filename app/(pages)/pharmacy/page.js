'use client';

import PharmacyCard from '@/app/components/pharmacy/pharmacyCard/pharmacyCard';
import PharmacyFiltering from '@/app/components/pharmacy/pharmacyFilter/pharmacyFiltering';
import PharmacyPaginationStore from '@/app/containers/pharmacyStore/pharmacyPageStore/pharmacyPageStore';
import Store from '@/app/containers/pharmacyStore/pharmacy/pharmacyStore';
import Pagination from '@/app/components/pharmacy/pharmacyPage/pharmacyPage';

export default function pharmacy() {
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
