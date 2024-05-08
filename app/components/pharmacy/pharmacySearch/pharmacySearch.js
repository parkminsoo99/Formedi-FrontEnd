import {CiSearch} from 'react-icons/ci';
import PharmacySearch from '../../../containers/pharmacyStore/pharmacySearch/pharmacySearchStore';

export default function PharmacySearchComponent() {
    const {keyword, setKeyword} = PharmacySearch();
    return (
        <div
            className="w-[300px] h-[38px] justify-start relative items-start inline-flex">
            <div
                className="w-[300px] h-[38px] left-0 top-1/2 relative bg-white rounded-[15px] shadow">
                <div
                    className="w-[300px] h-[25px] left-[11.11px] top-[10px] absolute justify-start items-start gap-[31px] inline-flex">
                    <button type="button" aria-label="Search">
                        <CiSearch color="#A2DD75"/>
                    </button>
                    <label htmlFor="search-input" className="sr-only">
                        Search
                    </label>
                    <input
                        id="search-input"
                        className="text-xs w-[200px]"
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search..."/>
                </div>
            </div>
        </div>
    );
}