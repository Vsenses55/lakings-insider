import svgPaths from "./svg-jrs8n6mbfw";
import imgLogoWhite from "figma:asset/565011f0c92ee033210f2e9a9169872b17c5838a.png";
type MenuItemProps = {
  className?: string;
  icon?: boolean;
  label?: string;
};

function MenuItem({ className, icon = true, label = "Menu Item" }: MenuItemProps) {
  return (
    <div className={className || "h-[11px] relative"} data-name="Menu Item">
      <div className="content-stretch flex gap-[8px] h-full items-start relative">
        {icon && (
          <div className="h-[10.956px] relative shrink-0 w-[10.954px]" data-name="Path 166">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9537 10.9557">
              <path d={svgPaths.p3db42300} fill="var(--fill-0, #B7B7B7)" id="Path 166" />
            </svg>
          </div>
        )}
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f9f9f9] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {label}
        </p>
      </div>
    </div>
  );
}
type ColumnItemsProps = {
  className?: string;
  children?: React.ReactNode | null;
};

function ColumnItems({ className, children = null }: ColumnItemsProps) {
  return (
    <div className={className || "relative"} data-name="Column Items">
      <div className="content-stretch flex flex-col items-start relative">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Slot">
          {children || <MenuItem className="h-[11px] relative shrink-0 w-[95.954px]" />}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col gap-[48px] items-start px-[360px] py-[80px] relative size-full" data-name="Footer">
      <div className="content-start flex flex-wrap gap-y-[48px] h-[226px] items-start justify-between relative shrink-0 w-full" data-name="Row">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Logo">
          <div className="h-[43px] relative shrink-0 w-[250px]" data-name="Logo_White">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[99.35%] left-0 max-w-none top-[0.31%] w-[79.2%]" src={imgLogoWhite} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Middle">
          <div className="content-start flex flex-wrap gap-[16px_64px] items-start relative shrink-0 w-full" data-name="Columns">
            <ColumnItems className="relative shrink-0">
              <MenuItem className="h-[11px] relative shrink-0" icon={false} label="Behind the scenes" />
              <MenuItem className="h-[11px] relative shrink-0" icon={false} label="Off the Ice" />
              <MenuItem className="h-[11px] relative shrink-0" icon={false} label="Looking to the future" />
              <MenuItem className="h-[11px] relative shrink-0" icon={false} label="The Nitty Gritty" />
              <MenuItem className="h-[11px] relative shrink-0" icon={false} label="Game Analysis" />
              <MenuItem className="h-[11px] relative shrink-0" icon={false} label="Ontario Regin" />
            </ColumnItems>
            <ColumnItems className="relative shrink-0 w-[200px]">
              <MenuItem className="h-[11px] relative shrink-0 w-full" label="LA Kings Audio Network" />
              <MenuItem className="h-[11px] relative shrink-0 w-full" icon={false} label="All The Kings Men" />
              <MenuItem className="h-[11px] relative shrink-0 w-full" icon={false} label="Fox & Faust" />
              <MenuItem className="h-[11px] relative shrink-0 w-full" icon={false} label="The Reign Check" />
              <MenuItem className="h-[11px] relative shrink-0 w-full" icon={false} label="Kings of the Podcast" />
              <MenuItem className="h-[11px] relative shrink-0 w-full" icon={false} label="Videos" />
            </ColumnItems>
            <ColumnItems className="relative shrink-0">
              <MenuItem className="h-[11px] relative shrink-0 w-full" label="LAKings.com" />
              <MenuItem className="h-[11px] relative shrink-0 w-[95.954px]" icon={false} label="About" />
              <MenuItem className="h-[11px] relative shrink-0 w-[95.954px]" icon={false} label="Archives" />
            </ColumnItems>
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
            <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] relative shrink-0 text-[#b7b7b7] whitespace-nowrap" data-name="Copyright">
              <p className="font-['Helvetica:Regular',sans-serif] not-italic relative shrink-0 text-[15px]">Privacy Policy | Terms of Service</p>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                © 2021 LA KINGS INSIDER
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[22px] items-center relative shrink-0" data-name="Social Icons">
          <div className="h-[22.516px] relative shrink-0 w-[22px]" data-name="Facebook">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22.5161">
              <g id="Facebook">
                <g id="Rectangle 547" />
                <path d={svgPaths.p285a800} fill="var(--fill-0, #999999)" id="Path 1" />
              </g>
            </svg>
          </div>
          <div className="h-[22.509px] relative shrink-0 w-[22.512px]" data-name="Instagram">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5123 22.5094">
              <g id="Instagram">
                <path d={svgPaths.p20663500} fill="var(--fill-0, #999999)" id="Path 3" />
              </g>
            </svg>
          </div>
          <div className="h-[22.457px] relative shrink-0 w-[22.979px]" data-name="Twitter">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.979 22.457">
              <g id="Twitter">
                <g id="Rectangle 548" />
                <path d={svgPaths.p6684ef2} fill="var(--fill-0, #999999)" id="Path 2" />
              </g>
            </svg>
          </div>
          <div className="h-[18.163px] relative shrink-0 w-[25.833px]" data-name="YouTube">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 18.163">
              <g id="YouTube">
                <path d={svgPaths.pece7480} fill="var(--fill-0, #999999)" id="YouTube_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[81.85%_1.04%_5.2%_96.35%]" data-name="Arrow_Up">
        <div className="absolute contents inset-[81.85%_1.04%_5.2%_96.35%]" data-name="Btn: See all news">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="flex-none rotate-90 size-[50px]">
              <div className="relative size-full">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                  <g id="Rectangle 70">
                    <g id="Vector" />
                    <path d={svgPaths.p2de85b00} id="Vector_2" stroke="var(--stroke-0, #999999)" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[87.06%_1.93%_10.4%_97.18%] items-center justify-center">
          <div className="flex-none h-[17.1px] rotate-90 w-[9.789px]">
            <div className="relative size-full" data-name="Icon ionic-ios-arrow-back">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.78888 17.1">
                <path d={svgPaths.p35f6900} fill="var(--fill-0, #999999)" id="Icon ionic-ios-arrow-back" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}