import svgPaths from "./svg-c1gukw7rf4";

function IconAndQuery({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
      <div className="h-[21.268px] relative shrink-0 w-[21.267px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2675 21.2684">
          <path d={svgPaths.p1e29d280} fill="var(--fill-0, #111111)" id="Search Icon" />
        </svg>
      </div>
      <div className="h-[34px] relative shrink-0 w-[272px]" data-name="Entry">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-center justify-between px-[310px] py-[18px] relative size-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1200px]" data-name="Content">
          {children}
        </div>
      </div>
    </div>
  );
}

function SearchComponentClose() {
  return (
    <div className="relative shrink-0 size-[18.6px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6 18.6">
        <path d={svgPaths.p100d1180} fill="var(--fill-0, #111111)" id="Close" />
      </svg>
    </div>
  );
}

function SearchComponentHelper() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-px">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 34">
        <path d="M1 0H0V34H1V0Z" fill="var(--fill-0, #999999)" id="Rectangle 84" />
      </svg>
    </div>
  );
}
type SearchItemProps = {
  className?: string;
  state?: "Default" | "Hover";
};

function SearchItem({ className, state = "Default" }: SearchItemProps) {
  const isDefault = state === "Default";
  return (
    <div className={className || `h-[75px] relative w-[1780px] ${isDefault ? "bg-white" : "bg-[#ebebeb]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[310px] relative size-full">
          <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-[1200px]" data-name="Search Dropdown Item">
            <div className="relative shrink-0 size-[15px]" data-name="Search Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p32c54080} fill={isDefault ? "var(--fill-0, #6C7077)" : "var(--fill-0, #999999)"} id="Search Icon" />
              </svg>
            </div>
            <p className={`font-["Nunito_Sans:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-[1160px] ${isDefault ? "text-[#6c7077]" : "text-[#999]"}`} style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              label item
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type SearchComponentProps = {
  className?: string;
  state?: "Default" | "Entry";
};

function SearchComponent({ className, state = "Default" }: SearchComponentProps) {
  if (state === "Entry") {
    return (
      <div className={className || "bg-white relative w-[1780px]"} data-name="State=Entry">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="bg-[#f9f9f9] h-[70px] relative shrink-0 w-full" data-name="Search Bar Entry">
            <Wrapper>
              <IconAndQuery>
                <SearchComponentHelper />
              </IconAndQuery>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Close">
                <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  CLEAR
                </p>
                <SearchComponentClose />
              </div>
            </Wrapper>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[32px] relative shrink-0 w-full" data-name="Search Suggestions">
            <div className="content-stretch flex h-[60px] items-center relative shrink-0 w-[1200px]" data-name="Header Label">
              <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[#111] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                TRENDING
              </p>
            </div>
            <SearchItem className="bg-white h-[75px] relative shrink-0 w-[1780px]" />
            <SearchItem className="bg-white h-[75px] relative shrink-0 w-[1780px]" />
            <SearchItem className="bg-white h-[75px] relative shrink-0 w-[1780px]" />
            <SearchItem className="bg-white h-[75px] relative shrink-0 w-[1780px]" />
            <SearchItem className="bg-white h-[75px] relative shrink-0 w-[1780px]" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "bg-white cursor-pointer relative w-[1780px]"} data-name="State=Default">
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className="bg-[#f9f9f9] h-[70px] relative shrink-0 w-full" data-name="Search Bar Click">
          <Wrapper>
            <IconAndQuery>
              <SearchComponentHelper />
              <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] left-[13.73px] text-[#999] text-[16px] text-left top-[calc(50%-7px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                SEARCH LA KINGS INSIDER
              </p>
            </IconAndQuery>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Close">
              <SearchComponentClose />
            </div>
          </Wrapper>
          <div aria-hidden="true" className="absolute border-[#ebebeb] border-b border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </button>
  );
}

export default function SearchComponent1() {
  return <SearchComponent className="bg-white cursor-pointer relative size-full" />;
}