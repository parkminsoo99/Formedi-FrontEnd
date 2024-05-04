'use client'
import {Checkbox} from 'antd';
import PharmacyFilterSearch from '../../pharmacySearch/pharmacySearch';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['English', 'Chinese', 'Japanese'];
import useFilteringStore from "../../../containers/pharmacyFiltering/pharmacyFilterlingStore";
export default function pharmacyFiltering() {
    const [checkedList, setCheckedList] = useFilteringStore(state => [state.checkedList, state.setCheckedList]); 
    const onChange = (list) => {
        setCheckedList(list);
    };
    return (
        <div
            className="ml-10 w-[300px] flex-col justify-start gap-[30px] inline-flex">
            <PharmacyFilterSearch/>
            <div
                className="bg-white rounded-[15px] justify-center gap-2.5 inline-flex shadow">
                <div className="flex-col justify-start gap-[19px] inline-flex">
                    <div
                        className="pt-5 pl-[5px] justify-start items-start text-lime-500 text-2xl font-bold font-['Pretendard']">Language</div>
                    <div className="flex-col justify-center items-center gap-[15px] flex pb-5">
                        <CheckboxGroup
                            className="inline-grid grid-cols-2 gap-4 "
                            options={plainOptions}
                            value={checkedList}
                            onChange={onChange}/>
                    </div>
                </div>
            </div>           
        </div>

    )
}