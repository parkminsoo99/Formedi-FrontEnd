'use client';
export default function HospitalLanguage({ languages }){
    return (
        <>
        {Array.isArray(languages) &&
        languages.map((language) => (
          <div key={language} className="justify-start items-start inline-flex">
            <div className="w-[55px] h-5 py-px rounded-[30px] border border-lime-300 justify-center items-center flex">
              <div className="text-black text-[8px] font-semibold font-['Pretendard']">
                {language}
              </div>
            </div>
          </div>
        ))}
        </>
    );
  };