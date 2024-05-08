'use client';

import HospitalCard from '@/app/components/hospital/hospitalCard/hospitalCard.js';
import HospitalFilering from '@/app/components/hospital/hospitalFilter/hospitalFiltering.js';
import HospitalPaginationStore from '@/app/containers/hospitalStore/hospitalpageStore/hospitalPageStore.js';
import Store from '@/app/containers/hospitalStore/hospital/hospitalStore.js';
import Pagination from '@/app/components/hospital/hospitalPage/hospitalPage.js';

export default function Hospital() {
  const { hospital } = Store();
  const { currentPage, setCurrentPage, totalPages } = HospitalPaginationStore(
    (state) => ({
      currentPage: state.currentPage,
      setCurrentPage: state.setCurrentPage,
      totalPages: state.totalPages(hospital),
    }),
  );

  return (
    <div>
      <div className="container mx-auto flex flex-row">
        <div className="inline-grid grid-cols-3 gap-4">
          <HospitalCard />
        </div>
        <HospitalFilering />
      </div>
      <div className="mt-20">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
