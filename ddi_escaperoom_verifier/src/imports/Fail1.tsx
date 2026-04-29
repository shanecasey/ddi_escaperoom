import svgPaths from "./svg-mq2518j0cy";
import imgAnagramDesignGlitchTexture144 from "figma:asset/aff96e31fa24369247382aec72bf46450b68bdfe.png";

function Group1() {
  return (
    <div className="absolute contents leading-[0] left-[37px] not-italic text-[0px] text-center top-[310px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:SemiBold',sans-serif] h-[74px] justify-center left-[calc(50%-1.5px)] text-[red] top-[347px] tracking-[0.72px] w-[335px]">
        <p className="text-[36px] whitespace-pre-wrap">
          <span className="font-['New_Science_Mono:Light',sans-serif] leading-[42px] not-italic text-white tracking-[0.72px]">CLEARANCE</span>
          <span className="font-['New_Science_Mono:Light',sans-serif] leading-[42px] not-italic text-[red] tracking-[0.72px]">
            <br aria-hidden="true" />
          </span>
          <span className="leading-[42px] text-[red]">DENIED</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Degular:Regular',sans-serif] h-[64px] justify-center left-[205px] text-white top-[455px] w-[330px]">
        <p className="whitespace-pre-wrap">
          <span className="font-['New_Science_Mono:SemiBold',sans-serif] leading-[24px] not-italic text-[18px]">INVALID PROOF</span>
          <span className="leading-[24px] text-[21px]">
            <br aria-hidden="true" />
            Cryptographic proof failed verification.
          </span>
        </p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[37px] top-[310px]">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[133px] top-[568px]">
      <div className="absolute bg-black border-[1.25px] border-solid border-white h-[63px] left-[133px] top-[568px] w-[149px]" data-name="Header Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:Bold',sans-serif] h-[24px] justify-center leading-[0] left-[207.5px] not-italic text-[21px] text-center text-white top-[600px] tracking-[2.1px] w-[149px]">
        <p className="leading-[normal] whitespace-pre-wrap">RETRY</p>
      </div>
    </div>
  );
}

export default function Fail() {
  return (
    <div className="bg-black relative size-full" data-name="FAIL1">
      <div className="absolute flex h-[519px] items-center justify-center left-[26px] top-[49px] w-[412px]">
        <div className="flex-none rotate-180">
          <div className="h-[519px] opacity-15 relative w-[412px]" data-name="Anagram Design -  Glitch Texture (14) 4">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[249.13%] left-[-117.96%] max-w-none top-[-76.69%] w-[313.83%]" src={imgAnagramDesignGlitchTexture144} />
              </div>
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(270deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0) 100%)" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-671px] size-[1293px] top-[100px]">
        <div className="flex-none rotate-180">
          <div className="opacity-15 relative size-[1293px]" data-name="Anagram Design -  Glitch Texture (14) 3">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover size-full" src={imgAnagramDesignGlitchTexture144} />
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(270deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, rgb(0, 0, 0) 100%)" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:Regular',sans-serif] h-[35px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[58.5px] tracking-[1.28px] w-[204px]">
        <p className="leading-[normal] whitespace-pre-wrap">TRUST_ ALLIANCE</p>
      </div>
      <Group2 />
      <Group />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['New_Science_Mono:Regular',sans-serif] h-[35px] justify-center leading-[0] left-1/2 not-italic opacity-50 text-[16px] text-center text-white top-[859.5px] tracking-[1.28px] w-[330px]">
        <p className="leading-[normal] whitespace-pre-wrap">OPERATIVE USE ONLY</p>
      </div>
      <div className="-translate-x-1/2 absolute h-[801px] left-[calc(50%-0.5px)] top-[59px] w-[333px]" data-name="Header Background">
        <div className="absolute inset-[0_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 334 802">
            <path d={svgPaths.p1979400} id="Header Background" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
    </div>
  );
}