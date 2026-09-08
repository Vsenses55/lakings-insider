function ListHeadlinesLabel({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#999] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center justify-center pb-[10px] relative shrink-0" data-name="Label">
        {children}
      </div>
    </div>
  );
}

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
  labelVisible?: boolean;
  state?: "Features" | "Mentions";
};

function PostHeadline({ className, author = "By Zach Dooley • Feb 6, 2021 • 54 comments", headline = "This is where a long headline would appear", label = "Label", labelVisible = true, state = "Features" }: PostHeadlineProps) {
  const isFeatures = state === "Features";
  const isMentions = state === "Mentions";
  return (
    <div className={className || "relative w-[276px]"}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative text-[#111] w-full">
        <div className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${isFeatures ? "" : 'font-["Nunito_Sans:Black",sans-serif] font-black'}`} data-name="Header">
          {isMentions && labelVisible && (
            <p className="leading-[16px] relative shrink-0 text-[13px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {label}
            </p>
          )}
          {isMentions && (
            <p className="leading-[20px] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {headline}
            </p>
          )}
          {isFeatures && labelVisible && (
            <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[13px] uppercase w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {label}
            </p>
          )}
          {isFeatures && <p className="font-['Flama:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[19px] w-full">{headline}</p>}
        </div>
        <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {author}
        </p>
      </div>
    </div>
  );
}

export default function ListHeadlines() {
  return (
    <div className="relative size-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <ListHeadlinesLabel>
          <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
          <p className="font-['Flama:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#111] text-[19px] uppercase whitespace-nowrap">MAYORSMANOR.COM</p>
        </ListHeadlinesLabel>
        <PostHeadline className="relative shrink-0 w-[300px]" headline="Miscellaneous Quotes from Five Kings Players " label="FEATURED STORIES" labelVisible={false} state="Mentions" />
        <ListHeadlinesDivider />
        <PostHeadline className="relative shrink-0 w-[300px]" headline="Drew Doughty Postgame Quotes " label="OFF THE ICE" labelVisible={false} state="Mentions" />
        <ListHeadlinesDivider />
        <PostHeadline className="relative shrink-0 w-[300px]" headline="Kings vs Golden Knights - Feb 14 presented by Violent Gentlemen" label="OFF THE ICE" labelVisible={false} state="Mentions" />
        <ListHeadlinesDivider />
        <PostHeadline className="relative shrink-0 w-[300px]" headline="Anderson update, goalies, winning streak battle, Bjornfot & Iafallo" label="OFF THE ICE" labelVisible={false} state="Mentions" />
      </div>
    </div>
  );
}