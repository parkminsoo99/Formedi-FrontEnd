'use client';

import { CiSearch } from 'react-icons/ci';
import SearchKeyword from '../../../containers/hospitalStore/hospitalSearch/hospitalSearchStore';

export default function HospitalSearch() {
  const { keyword, setKeyword } = SearchKeyword();

  return (
    <div className="w-[300px] flex-col justify-start gap-[30px] inline-flex">
      <div className="w-[300px] h-[38px] justify-start relative items-start inline-flex">
        <div className="w-[300px] h-[38px] left-0 top-1/2 relative bg-white rounded-[15px] shadow">
          <div className="w-[300px] h-[25px] left-[11.11px] top-[10px] absolute justify-start items-start gap-[31px] inline-flex">
            <button type="button" aria-label="Search">
              <CiSearch color="#A2DD75" />
            </button>
            <input
              className="text-xs w-[200px]"
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              aria-label="Search input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
