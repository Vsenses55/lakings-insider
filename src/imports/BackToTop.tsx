import svgPaths from "./svg-th3p13k14g";

export default function BackToTop() {
  return (
    <div className="relative size-full" data-name="Back to Top">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 49.5">
        <g id="Back to Top">
          <rect height="49" stroke="var(--stroke-0, #999999)" strokeWidth="0.5" width="49" x="0.25" y="0.25" />
          <path d={svgPaths.p1a876680} fill="var(--fill-0, #999999)" id="Icon ionic-ios-arrow-back" />
        </g>
      </svg>
    </div>
  );
}