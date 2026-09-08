export default function NavBar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px relative size-full" data-name="Nav Bar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-center pr-[0.016px] relative size-full">
            <div className="relative shrink-0 w-[540.719px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] relative w-full">
                <div className="content-stretch flex flex-col h-[56px] items-center justify-center relative shrink-0 w-[97px]" data-name="Button">
                  <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#111] text-[16px] text-center tracking-[-0.3125px] w-full">Components</p>
                </div>
                <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0" data-name="Button">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap">Color</p>
                </div>
                <div className="h-[56px] relative shrink-0 w-[88.469px]" data-name="Button">
                  <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[44px] not-italic text-[#4a5565] text-[16px] text-center top-[16px] tracking-[-0.3125px] whitespace-nowrap">Typography</p>
                </div>
                <div className="h-[56px] relative shrink-0 w-[59.984px]" data-name="Button">
                  <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[30.5px] not-italic text-[#4a5565] text-[16px] text-center top-[16px] tracking-[-0.3125px] whitespace-nowrap">Spacing</p>
                </div>
                <div className="h-[56px] relative shrink-0 w-[73.234px]" data-name="Button">
                  <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[37.5px] not-italic text-[#4a5565] text-[16px] text-center top-[16px] tracking-[-0.3125px] whitespace-nowrap">Prototype</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}