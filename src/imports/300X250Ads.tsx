import svgPaths from "./svg-m55y3eb6hv";
import img300X250 from "figma:asset/55bc48240dda5ad25aaaa797a2970239662203b3.png";

export default function Component300X250Ads() {
  return (
    <div className="relative size-full" data-name="300x250 Ads">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 327">
        <g id="Path 164">
          <g id="Vector" />
          <path d={svgPaths.p6d92e00} fill="var(--fill-0, #999999)" id="Vector_2" />
        </g>
      </svg>
      <div className="absolute inset-[10.09%_10.53%_13.46%_10.53%]" data-name="300x250">
        <img alt="" className="absolute block max-w-none size-full" height="250" src={img300X250} width="300" />
      </div>
      <p className="absolute font-['Nunito_Sans:Medium',sans-serif] font-medium inset-[91.44%_35.53%_5.81%_36.05%] leading-[16px] text-[#6c7077] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        ADVERTISEMENT
      </p>
    </div>
  );
}