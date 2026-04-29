export default function Group() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:SemiBold',sans-serif] h-[74px] justify-center leading-[0] left-1/2 not-italic text-[#04ff00] text-[0px] text-center top-[37px] tracking-[0.72px] w-[335px]">
        <p className="text-[36px] whitespace-pre-wrap">
          <span className="font-['New_Science_Mono:Light',sans-serif] leading-[42px] not-italic text-white tracking-[0.72px]">IDENTITY</span>
          <span className="font-['New_Science_Mono:Light',sans-serif] leading-[42px] not-italic text-[#04ff00] tracking-[0.72px]">
            <br aria-hidden="true" />
          </span>
          <span className="leading-[42px] text-[#04ff00]">CONFIRMED</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Degular:Regular',sans-serif] h-[71px] justify-center leading-[0] left-[168.5px] not-italic text-[16px] text-center text-white top-[109.5px] w-[301px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Presented credentials successfully verified. `}</p>
      </div>
      <div className="absolute bg-[rgba(217,217,217,0.2)] h-[176px] left-[19px] top-[129px] w-[301px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:Regular',sans-serif] h-[57px] justify-center leading-[0] left-[30px] not-italic text-[21px] text-white top-[174.5px] w-[276px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['New_Science_Mono:SemiBold',sans-serif] leading-[24px] not-italic">CODENAME:</span>
          <span className="leading-[24px]">{` `}</span>
        </p>
        <p className="leading-[24px]">OPERATIVE 010 ‘EDEN’</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:Regular',sans-serif] h-[75px] justify-center leading-[0] left-[30px] not-italic text-[21px] text-white top-[249.5px] w-[276px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="font-['New_Science_Mono:SemiBold',sans-serif] leading-[24px] not-italic">PASSPHRASE:</span>
          <span className="leading-[24px]">{` `}</span>
        </p>
        <p className="leading-[24px] mb-0">THE CENTER CANNOT HOLD</p>
        <p className="leading-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}