'use client';
import HospitalCard from '../../components/hospital/hospitalCard/hospitalCard';
import HospitalFilering from '../../components/hospital/hospitalFilter/hospitalFiltering';
import HospitalPaginationStore from '../../containers/hospitalStore/hospitalpageStore/hospitalPageStore';
import Store from '../../containers/hospitalStore/hospital/hospitalStore';
import Pagination from '../../components/hospital/hospitalPage/hospitalPage';

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