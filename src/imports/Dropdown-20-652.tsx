import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[30px] relative shrink-0 w-[184px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[11px] py-[10px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type SlotDropdownItemTextProps = {
  text: string;
};

function SlotDropdownItemText({ text }: SlotDropdownItemTextProps) {
  return (
    <Wrapper>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        {text}
      </p>
    </Wrapper>
  );
}

export default function Dropdown() {
  return (
    <div className="bg-[#f9f9f9] relative size-full" data-name="Dropdown">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[13px] py-[27px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Slot">
          <Wrapper additionalClassNames="bg-[#111]">
            <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Label Name
            </p>
          </Wrapper>
          <SlotDropdownItemText text="Label Name" />
          <SlotDropdownItemText text="Label Name" />
          <SlotDropdownItemText text="Label Name" />
          <SlotDropdownItemText text="Label Name" />
        </div>
        <div className="-translate-x-1/2 absolute flex h-[7px] items-center justify-center left-[calc(50%-0.5px)] top-0 w-[15px]">
          <div className="flex-none rotate-180">
            <div className="h-[7px] relative w-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
                <path d="M7.5 0L15 7H0L7.5 0Z" fill="var(--fill-0, #111111)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}