'use client'
import { Radio } from 'antd';
import HospitalSearch from "@/app/components/hospital/hospitalSearch/hospitalSearch";
import useFilteringStore from "@/app/containers/hospitalStore/hospitalFiltering/hospitalFilteringStore";

export default function pharmacyFiltering() {
  const [checked, setChecked] = useFilteringStore(state => [state.checked, state.setChecked]);

  const onChange = (e) => {
    setChecked([e.target.value]);
  };

  const plainOptions = ['중동', '미국', '일본', '중국', '몽골', '러시아', '베트남', '인도네시아'];

  return (
    <div className="ml-10 w-[300px] flex-col justify-start gap-[30px] inline-flex">
      <HospitalSearch />
      <div className="bg-white rounded-[15px] justify-center gap-2.5 inline-flex shadow">
        <div className="flex-col justify-start gap-[19px] inline-flex">
          <div className="pt-5 pl-[5px] justify-start items-start text-lime-500 text-2xl font-bold font-['Pretendard']">Nations</div>
          <div className="flex-col justify-center items-center gap-[15px] flex pb-5">
            <Radio.Group className="inline-grid grid-cols-2 gap-4" onChange={onChange}>
              {plainOptions.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  )
}