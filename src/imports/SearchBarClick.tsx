import svgPaths from "./svg-vicf52os1p";

export default function SearchBarClick() {
  return (
    <div className="bg-[#f9f9f9] relative w-full" data-name="Search Bar Click">
      <div className="content-stretch flex items-center justify-between px-4 md:px-8 lg:px-12 py-[18px] relative w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-full" data-name="Content">
          <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-name="Icon and Query">
            <div className="h-[21.268px] relative shrink-0 w-[21.267px]" data-name="Search Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2675 21.2684">
                <path d={svgPaths.p1e29d280} fill="var(--fill-0, #111111)" id="Search Icon" />
              </svg>
            </div>
            <div className="h-[34px] relative shrink-0 w-full max-w-[272px]" data-name="Entry">
              <div className="absolute h-[34px] left-0 top-0 w-px">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 34">
                  <path d="M1 0H0V34H1V0Z" fill="var(--fill-0, #999999)" id="Rectangle 84" />
                </svg>
              </div>
              <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] left-[13.73px] text-[#999] text-[16px] top-[calc(50%-7px)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[calc(100%-13.73px)]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                SEARCH LA KINGS INSIDER
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Close">
            <div className="relative shrink-0 size-[18.6px]" data-name="Close">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6 18.6">
                <path d={svgPaths.p100d1180} fill="var(--fill-0, #111111)" id="Close" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}