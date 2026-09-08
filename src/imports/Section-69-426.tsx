import clsx from "clsx";
import imgFeaturedImage from "figma:asset/37a3ef8ceea7c4c2aa91ebde5a7452f6eabefbb4.png";
import imgImage6 from "figma:asset/d9c885db4474efee935f50587302772a7bab1299.png";
import svgPaths from "./svg-lubgdmrf6i";

type CopyProps = {
  body: string;
  author: string;
  additionalClassNames?: string;
};

function Copy({ body, author, children, additionalClassNames = "" }: React.PropsWithChildren<CopyProps>) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[18px] items-start relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
        {children}
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#111] w-full">
        <p className="font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[16px] w-full" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {body}
        </p>
        <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[13px] w-full" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {author}
        </p>
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
type ListHeadlinesLabelTextProps = {
  text: string;
};

function ListHeadlinesLabelText({ text }: ListHeadlinesLabelTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#999] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center justify-center pb-[10px] relative shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121212] text-[19px] uppercase whitespace-nowrap" style={{ fontWeight: 700 }}>{text}</p>
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
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
          {isMentions && labelVisible && (
            <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[13px] uppercase w-full" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {label}
            </p>
          )}
          {isMentions && (
            <p className="font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[16px] w-full" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {headline}
            </p>
          )}
          {isFeatures && labelVisible && (
            <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[13px] uppercase w-full" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              {label}
            </p>
          )}
          {isFeatures && <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[19px] w-full" style={{ fontWeight: 600 }}>{headline}</p>}
        </div>
        <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[13px] w-full" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {author}
        </p>
      </div>
    </div>
  );
}
type CardProps = {
  className?: string;
  author?: string;
  body?: string;
  children?: React.ReactNode | null;
  headline?: string;
  label?: string;
  states?: "Large" | "Small" | "Small Mobile";
};

function Card({ className, author = "By Zach Dooley • 1 hour ago • 54 comments", body = "It was first and foremost a scary evening for the LA Kings, as defensemen Matt Roy and\nSean Walker both exited the game early with injuries that were extremely difficult to  ", children = null, headline = "Compete & Intensity, Maatta, FRK Getting\nClose, the Modern Enforcer ", label = "POSTGAME NOTES", states = "Large" }: CardProps) {
  const isLarge = states === "Large";
  const isSmallMobileOrSmall = ["Small Mobile", "Small"].includes(states);
  return (
    <div className={className || `relative ${isLarge ? "w-[790px]" : ""}`}>
      <div className={`content-stretch flex gap-[40px] items-start relative ${isLarge ? "flex-col w-full" : states === "Small" ? "flex-col" : ""}`}>
        {isSmallMobileOrSmall && (
          <>
            <div className="bg-[#111] h-[260px] shrink-0 w-[380px]" data-name="Img">
              {children || null}
            </div>
            <Copy additionalClassNames="w-[380px]" body={body} author={author}>
              <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                {label}
              </p>
              <div className="font-['Flama:Semibold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#111] text-[19px] w-[min-content]">
                <p className="mb-0">{headline}</p>
                <p>{`Close, the Modern Enforcer `}</p>
              </div>
            </Copy>
          </>
        )}
        {isLarge && (
          <>
            <div className="bg-[#ab5b5b] h-[497px] shrink-0 w-full" data-name="Img">
              {children || null}
            </div>
            <Copy additionalClassNames="w-full" body={body} author={author}>
              <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                {label}
              </p>
              <p className="font-['Flama',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#111] text-[28px] w-full" style={{ fontWeight: 600 }}>
                {headline}
              </p>
            </Copy>
          </>
        )}
      </div>
    </div>
  );
}

type ListHeadlinesProps = {
  className?: string;
  children?: React.ReactNode;
};

function ListHeadlines({ className, children }: ListHeadlinesProps) {
  return (
    <div className={className}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
        {children}
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-[40px] items-start relative" data-name="Section">
      {/* Featured Card - 780px */}
      <Card 
        className="relative w-full lg:w-[780px] shrink-0" 
        states="Large"
        label="POSTGAME NOTES"
        headline="Compete & Intensity, Maatta, FRK Getting Close, the Modern Enforcer"
        body="It was first and foremost a scary evening for the LA Kings, as defensemen Matt Roy and Sean Walker both exited the game early with injuries that were extremely difficult to"
        author="By Zach Dooley • 1 hour ago • 54 comments"
      >
        <div className="size-full relative">
          <img alt="" className="absolute block max-w-none size-full object-cover" src={imgFeaturedImage} />
        </div>
      </Card>
      
      {/* Right Column - 380px */}
      <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-[40px]">
        <ListHeadlines className="w-full">
          <ListHeadlinesLabelText text="EDITOR'S PICKS" />
          <PostHeadline
            className="w-full"
            headline="Looking back on this date in LA Kings History"
            label="FEATURED STORIES"
            author="By Zach Dooley • Feb 6, 2021 • 54 comments"
            state="Features"
          />
          <ListHeadlinesDivider />
          <PostHeadline
            className="w-full"
            headline="Kings Care Happenings - Fan Cutouts, Blood Drive, Royal Readers, Heros, O'Ree"
            label="OFF THE ICE"
            author="By Zach Dooley • Feb 6, 2021 • 54 comments"
            state="Features"
          />
        </ListHeadlines>
        <div className="h-[327px] w-full max-w-[380px] relative" data-name="300x250 Ads">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 327">
            <g id="Path 164">
              <rect x="0.5" y="0.5" width="375" height="326" fill="none" stroke="#ECECEC" strokeWidth="1" />
              <path d={svgPaths.p3e3ccf00} fill="var(--fill-0, #999999)" id="Vector_2" />
            </g>
          </svg>
          <div className="absolute inset-[10.09%_10.53%_13.46%_10.53%]" data-name="Image 6">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage6} />
            </div>
          </div>
          <p className="absolute font-['Nunito_Sans:Medium',sans-serif] font-medium inset-[91.44%_35.22%_5.81%_36.05%] leading-[16px] text-[#6c7077] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            ADVERTISEMENT
          </p>
        </div>
      </div>
    </div>
  );
}