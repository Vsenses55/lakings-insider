import svgPaths from "./svg-4j5z1uzqgf";

export default function OptIn() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Opt In">
      <div className="relative shrink-0 size-[20px]" data-name="Button">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Button">
            <rect fill="var(--fill-0, #EBEBEB)" height="19.5" width="19.5" x="0.25" y="0.25" />
            <rect height="19.5" stroke="var(--stroke-0, #999999)" strokeWidth="0.5" width="19.5" x="0.25" y="0.25" />
            <path d={svgPaths.p2b9b8380} fill="var(--fill-0, #111111)" id="Checkmark" />
          </g>
        </svg>
      </div>
      <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-center min-h-px min-w-px relative" data-name="Messaging">
        <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#8d8d8e] text-[13px]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          <span className="leading-[normal]">{`By subscribing you agree to our `}</span>
          <span className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            privacy policy
          </span>
        </p>
      </div>
    </div>
  );
}