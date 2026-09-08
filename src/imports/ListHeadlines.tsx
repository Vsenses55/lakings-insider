function ListHeadlinesDivider() {
  return (
    <div className="h-0 relative shrink-0 w-[378px]">
      <div className="absolute inset-[-0.13px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378 0.25">
          <path d="M0 0.125H378" id="Divider" stroke="var(--stroke-0, #111111)" strokeWidth="0.25" />
        </svg>
      </div>
    </div>
  );
}
type PostHeadlineProps = {
  className?: string;
  author?: string;
  headline?: string;
  label?: string;
};

function PostHeadline({ className, author = "By Zach Dooley • Feb 6, 2021 • 54 comments", headline = "This is where a long headline would appear", label = "Label" }: PostHeadlineProps) {
  return (
    <div className={className || "relative w-[276px]"} data-name="Post Headline">
      <div className="content-stretch flex flex-col gap-[32px] items-start relative text-[#111] w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
          <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[13px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            {label}
          </p>
          <p className="font-['Flama:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[19px] w-full">{headline}</p>
        </div>
        <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {author}
        </p>
      </div>
    </div>
  );
}

export default function ListHeadlines({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="List Headlines">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
          <div aria-hidden="true" className="absolute border-[#999] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-center py-[10px] relative shrink-0" data-name="Label">
            <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
            <p className="font-['Flama:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121212] text-[19px] uppercase whitespace-nowrap">EDITOR’S PICKS</p>
          </div>
        </div>
        <PostHeadline
          className="relative shrink-0 w-[378px]"
          headline="Looking back on this date in LA
Kings History "
          label="FEATURED STORIES"
        />
        <ListHeadlinesDivider />
        <PostHeadline
          className="relative shrink-0 w-[378px]"
          headline="Kings Care Happenings - Fan Cutouts,
Blood Drive, Royal Readers, Heros, O’Ree  "
          label="OFF THE ICE"
        />
        <ListHeadlinesDivider />
        <PostHeadline
          className="relative shrink-0 w-[378px]"
          headline="Kings Care Happenings - Fan Cutouts,
Blood Drive, Royal Readers, Heros, O’Ree  "
          label="OFF THE ICE"
        />
      </div>
    </div>
  );
}