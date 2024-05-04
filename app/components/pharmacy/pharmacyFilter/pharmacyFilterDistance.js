import { useEffect } from 'react';
import useFilteringStore from "../../../containers/pharmacyFiltering/pharmacyFilterlingStore";

export default function pharmacyFilterDistance() {

    useEffect(() => {
        const output = document.getElementById('demo');
        if (output) {
            output.innerHTML = sliderValue;
        }
    }, [sliderValue]);

    return (
        <div className="pb-[15px] bg-white border-b border-lime-100 justify-start items-end gap-[203px] inline-flex">
            <div className="w-[300px] h-[54px] flex-col justify-center items-center gap-[1px] inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                    <div className="text-lime-500 text-lg font-bold font-['Pretendard']">Distance</div>
                </div>
                <div className="slidecontainer w-[255px]">
                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={sliderValue}
                        onChange={(e)=>setSliderValue(e)}
                        className="slider"
                        id="myRange"
                    />
                </div>
                <div className="flex flex-row text-lime-300 text-[10px] font-bold font-['Pretendard']">
                    <p><span id="demo">{sliderValue}</span></p>
                    <p>km</p>
                </div>
            </div>
        </div>
    );
}