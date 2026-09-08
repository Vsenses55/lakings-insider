import svgPaths from "./svg-lfva0cr7du";
import imgLogoWhite from "figma:asset/565011f0c92ee033210f2e9a9169872b17c5838a.png";
type LabelItemProps = {
  className?: string;
  labels?: string;
  state?: "Default" | "Hover";
};

function LabelItem({ className, labels = "LABELS", state = "Default" }: LabelItemProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">
          {state === "Hover" && (
            <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[20px] relative shrink-0 text-[#adadad] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {labels}
            </p>
          )}
          {state === "Default" && (
            <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {labels}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Nav Bar">
      <div className="content-stretch flex items-center justify-between max-w-[1200px] relative shrink-0 w-full" data-name="Content">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[218.276px]" data-name="Logo">
          <div className="h-[52px] relative shrink-0 w-full" data-name="Logo_White">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogoWhite} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[48px] items-center justify-end relative shrink-0" data-name="Menu & Search">
          <div className="content-stretch flex gap-[58px] items-center relative shrink-0" data-name="Menu Items">
            <LabelItem className="relative shrink-0" labels="EXPLORE" />
            <LabelItem className="relative shrink-0" labels="AUDIO & VIDEO" />
            <LabelItem className="relative shrink-0" labels="LAKINGS.COM" />
          </div>
          <button className="block cursor-pointer h-[17.534px] relative shrink-0 w-[16.045px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0447 17.5338">
              <path d={svgPaths.p4188700} fill={"Default" === "Default" ? "var(--fill-0, white)" : "var(--fill-0, #999999)"} id="Search Icon" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}