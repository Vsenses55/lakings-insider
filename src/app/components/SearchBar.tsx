import { useState } from "react";
import svgPathsSearch from "../../imports/svg-ui8wmhoccv";

type SearchItemProps = {
  className?: string;
  state?: "Default" | "Hover";
  label?: string;
};

function SearchItem({ className, state = "Default", label = "label item" }: SearchItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const currentState = isHovered ? "Hover" : state;
  const isDefault = currentState === "Default";
  
  return (
    <div 
      className={className || `h-[75px] relative w-full ${isDefault ? "bg-white" : "bg-[#ebebeb]"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-4 md:px-[310px] relative size-full">
          <div className="content-stretch flex gap-[20px] items-center relative w-full max-w-[1200px] mx-auto">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPathsSearch.p32c54080} fill={isDefault ? "#6C7077" : "#999999"} />
              </svg>
            </div>
            <p className={`font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[16px] flex-1 ${isDefault ? "text-[#6c7077]" : "text-[#999]"}`} style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type SearchBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="bg-white w-full z-40 shadow-lg">
      <div className="content-stretch flex flex-col items-start relative w-full">
        {/* Search Input Bar */}
        <div className="bg-[#f9f9f9] h-[70px] relative w-full border-b border-[#ebebeb]">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-4 md:px-[310px] py-[18px] relative size-full">
              <div className="content-stretch flex items-center justify-between relative w-full max-w-[1200px] mx-auto">
                <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0">
                  <div className="h-[21.268px] relative shrink-0 w-[21.267px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2675 21.2684">
                      <path d={svgPathsSearch.p1e29d280} fill="#111111" />
                    </svg>
                  </div>
                  <div className="relative shrink-0">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="SEARCH LA KINGS INSIDER"
                      className="bg-transparent font-['Nunito_Sans',sans-serif] leading-[20px] text-[#999] text-[16px] border-none outline-none w-[200px] md:w-[272px] placeholder:text-[#999]"
                      style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                      autoFocus
                    />
                  </div>
                </div>
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0 cursor-pointer" onClick={onClose}>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap hidden md:block" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    CLEAR
                  </p>
                  <div className="relative shrink-0 size-[18.6px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6 18.6">
                      <path d={svgPathsSearch.p100d1180} fill="#111111" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Suggestions */}
        {query && (
          <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[32px] relative w-full">
            <div className="content-stretch flex h-[60px] items-center px-4 md:px-[310px] relative w-full">
              <div className="content-stretch flex items-center relative w-full max-w-[1200px] mx-auto">
                <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[#111] text-[13px] uppercase" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  TRENDING
                </p>
              </div>
            </div>
            <SearchItem label="Looking back on this date in LA Kings History" />
            <SearchItem label="Kings Care Happenings - Fan Cutouts, Blood Drive" />
            <SearchItem label="Anze Kopitar named January West Division Star" />
            <SearchItem label="Final - Kings 6, Wild 3 - Doughty, McLellan" />
            <SearchItem label="Matt Roy and Sean Walker injury updates" />
          </div>
        )}
      </div>
    </div>
  );
}