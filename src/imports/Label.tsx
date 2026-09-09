export default function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Label">
      <div aria-hidden="true" className="absolute border-[#999] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center justify-center pb-[10px] relative shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121212] text-[19px] uppercase whitespace-nowrap" style={{ fontWeight: 700 }}>RECENT PODCASTS</p>
      </div>
    </div>
  );
}