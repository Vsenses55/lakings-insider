import clsx from "clsx";
import svgPaths from "./svg-j40jpafphk";
import imgLogoWhite from "figma:asset/565011f0c92ee033210f2e9a9169872b17c5838a.png";
import imgAds from "figma:asset/7abbc6cb054696a20fcd790bf4232219b3f761c2.png";
import imgSpotlight from "figma:asset/37a3ef8ceea7c4c2aa91ebde5a7452f6eabefbb4.png";
import imgTakeoverAd from "figma:asset/c416c616ba831f3b7bac9561b3d59cf436f6fe2e.png";

const imgFeaturedImage = "https://images.unsplash.com/photo-1771938429358-09d2637c1eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3MzU5MzIyM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const img300X250 = "https://images.unsplash.com/photo-1609935061446-c0b5236fee71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBwbGF5ZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc3MzU5MzIzM3ww&ixlib=rb-4.1.0&q=80&w=1080";
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
        <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          <p className="mb-0">{body}</p>
          <p>{`Sean Walker both exited the game early with injuries that were extremely difficult to  `}</p>
        </div>
        <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          {author}
        </p>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.984 2.984">
        {children}
      </svg>
    </div>
  );
}
type DotsHelperProps = {
  additionalClassNames?: string;
};

function DotsHelper({ additionalClassNames = "" }: DotsHelperProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d="M2.984 0H0V2.984H2.984V0Z" fill="var(--fill-0, #6C6C6C)" id="Rectangle 93" />
    </Wrapper>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <g id="Group 12">
        <path d="M2.984 0H0V2.984H2.984V0Z" fill="var(--fill-0, #373838)" id="Rectangle 96" />
      </g>
    </Wrapper>
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
      <div className="content-stretch flex items-center justify-center py-[10px] relative shrink-0" data-name="Label">
        <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Flama:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121212] text-[19px] uppercase whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
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
type CardProps = {
  className?: string;
  author?: string;
  body?: string;
  children?: React.ReactNode | null;
  headline?: string;
  label?: string;
  states?: "Large" | "Small" | "Small Mobile";
};

function Card({ className, author = "By Zach Dooley • 1 hour ago • 54 comments", body = "It was first and foremost a scary evening for the LA Kings, as defensemen Matt Roy and\nSean Walker both exited the game early with injuries that were extremely difficult to  ", children = null, headline = "Final - Kings 6, Wild 3 - Doughty, McLellan", label = "POSTGAME NOTES", states = "Large" }: CardProps) {
  const isLarge = states === "Large";
  const isSmallMobileOrSmall = ["Small Mobile", "Small"].includes(states);
  return (
    <div className={className || `relative ${isLarge ? "w-[790px]" : ""}`}>
      <div className={`content-stretch flex gap-[40px] items-start relative ${isLarge ? "flex-col w-full" : states === "Small" ? "flex-col" : ""}`}>
        {isSmallMobileOrSmall && (
          <>
            <div className="bg-[#ab5b5b] h-[260px] shrink-0 w-[380px]" data-name="Img">
              {children || null}
            </div>
            <Copy additionalClassNames="w-[380px]" body={body} author={author}>
              <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                {label}
              </p>
              <p className="font-['Flama:Semibold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#111] text-[19px] w-[min-content]">{headline}</p>
            </Copy>
          </>
        )}
        {isLarge && (
          <>
            <div className="bg-[#ab5b5b] h-[497px] shrink-0 w-full" data-name="Img">
              {children || null}
            </div>
            <Copy additionalClassNames="w-full" body={body} author={author}>
              <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                {label}
              </p>
              <p className="font-['Flama:Semibold',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#111] text-[28px] w-[min-content]">{headline}</p>
            </Copy>
          </>
        )}
      </div>
    </div>
  );
}
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

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] isolate items-center relative size-full" data-name="HOME">
      <div className="bg-[#111] content-stretch flex flex-col h-[80px] items-center justify-center relative shrink-0 w-[1920px] z-[6]" data-name="Nav Bar">
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
      <div className="h-[90px] relative shrink-0 w-[728px] z-[4]" data-name="Ads">
        <img alt="" className="absolute block max-w-none size-full" height="90" src={imgAds} width="728" />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[48px] items-start justify-center overflow-clip p-[48px] relative shrink-0 w-[1296px] z-[3]" data-name="Container">
        <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-[1216px]" data-name="Section">
          <Card className="relative shrink-0 w-[790px]">
            <div className="h-[497px] relative shrink-0 w-[790px]" data-name="Featured_Image">
              <img alt="" className="absolute block max-w-none size-full" height="497" src={imgFeaturedImage} width="790" />
            </div>
          </Card>
          <ListHeadlines className="flex-[1_0_0] min-h-px min-w-px relative">
            <ListHeadlinesLabelText text="EDITOR’S PICKS" />
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
            <div className="h-[327px] relative shrink-0 w-[380px]" data-name="300x250 Ads">
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
          </ListHeadlines>
        </div>
        <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-[1200px]" data-name="Spotlight">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[600px]" data-name="Img">
            <div className="h-[442px] relative shrink-0 w-[600px]" data-name="Spotlight">
              <img alt="" className="absolute block max-w-none size-full" height="442" src={imgSpotlight} width="600" />
            </div>
          </div>
          <div className="bg-[#111] content-stretch flex flex-col h-[442px] items-center justify-between overflow-clip p-[48px] relative shrink-0 w-[600px]" data-name="Card">
            <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Spotlight">
              <p className="font-['Flama:Bold',sans-serif] h-[13.69px] leading-[24px] not-italic relative shrink-0 text-[#999] text-[19px] uppercase w-[105.124px]">SPOTLIGHT</p>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
                <p className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[16px] relative shrink-0 text-[#ccc] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  OFF THE ICE
                </p>
                <div className="font-['Flama:Semibold',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[28px] text-white w-[min-content] whitespace-pre-wrap">
                  <p className="mb-0">Anze Kopitar, Dr. Maurice O’Gorman</p>
                  <p className="mb-0">named January West Division “Stars</p>
                  <p>{`of the Month”  `}</p>
                </div>
                <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#ccc] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  <p className="mb-0">LA Kings forward Anze Kopitar and Children’s Hopsital Los Angeles</p>
                  <p className="mb-0">{`doctor Maurice O’Gorman have been selected as the NHL’s West `}</p>
                  <p>{`Division “Stars of the Month” for the month of January. `}</p>
                </div>
              </div>
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#ccc] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                By Zach Dooley • 1/20/2021 • 54 comments
              </p>
            </div>
          </div>
          <div className="absolute contents inset-[11.54%_45.24%_68.41%_45.33%]" data-name="Dots">
            <div className="absolute contents inset-[11.54%_45.24%_68.41%_48.39%]">
              <Helper additionalClassNames="inset-[0_96.09%_96.63%_0]" />
              <Helper additionalClassNames="inset-[0_80.08%_96.63%_16.02%]" />
              <Helper additionalClassNames="inset-[0_64.06%_96.63%_32.03%]" />
              <Helper additionalClassNames="inset-[0_48.05%_96.63%_48.05%]" />
              <Helper additionalClassNames="inset-[0_32.03%_96.63%_64.06%]" />
              <Helper additionalClassNames="inset-[0_16.02%_96.63%_80.08%]" />
              <Helper additionalClassNames="inset-[0_0_96.63%_96.09%]" />
              <Helper additionalClassNames="inset-[13.81%_96.09%_82.83%_0]" />
              <Helper additionalClassNames="inset-[13.81%_80.08%_82.83%_16.02%]" />
              <Helper additionalClassNames="inset-[13.81%_64.06%_82.83%_32.03%]" />
              <Helper additionalClassNames="inset-[13.81%_48.05%_82.83%_48.05%]" />
              <Helper additionalClassNames="inset-[13.81%_32.03%_82.83%_64.06%]" />
              <Helper additionalClassNames="inset-[13.81%_16.02%_82.83%_80.08%]" />
              <Helper additionalClassNames="inset-[13.81%_0_82.83%_96.09%]" />
              <Helper additionalClassNames="inset-[27.61%_96.09%_69.02%_0]" />
              <Helper additionalClassNames="inset-[27.61%_80.08%_69.02%_16.02%]" />
              <Helper additionalClassNames="inset-[27.61%_64.06%_69.02%_32.03%]" />
              <Helper additionalClassNames="inset-[27.61%_48.05%_69.02%_48.05%]" />
              <Helper additionalClassNames="inset-[27.61%_32.03%_69.02%_64.06%]" />
              <Helper additionalClassNames="inset-[27.61%_16.02%_69.02%_80.08%]" />
              <Helper additionalClassNames="inset-[27.61%_0_69.02%_96.09%]" />
              <Helper additionalClassNames="inset-[41.41%_96.09%_55.22%_0]" />
              <Helper additionalClassNames="inset-[41.41%_80.08%_55.22%_16.02%]" />
              <Helper additionalClassNames="inset-[41.41%_64.06%_55.22%_32.03%]" />
              <Helper additionalClassNames="inset-[41.41%_48.05%_55.22%_48.05%]" />
              <Helper additionalClassNames="inset-[41.41%_32.03%_55.22%_64.06%]" />
              <Helper additionalClassNames="inset-[41.41%_16.02%_55.22%_80.08%]" />
              <Helper additionalClassNames="inset-[41.41%_0_55.22%_96.09%]" />
              <Helper additionalClassNames="inset-[55.22%_96.09%_41.41%_0]" />
              <Helper additionalClassNames="inset-[55.22%_80.08%_41.41%_16.02%]" />
              <Helper additionalClassNames="inset-[55.22%_64.06%_41.41%_32.03%]" />
              <Helper additionalClassNames="inset-[55.22%_48.05%_41.41%_48.05%]" />
              <Helper additionalClassNames="inset-[55.22%_32.03%_41.41%_64.06%]" />
              <Helper additionalClassNames="inset-[55.22%_16.02%_41.41%_80.08%]" />
              <Helper additionalClassNames="inset-[55.22%_0_41.41%_96.09%]" />
              <Helper additionalClassNames="inset-[69.02%_96.09%_27.61%_0]" />
              <Helper additionalClassNames="inset-[69.02%_80.08%_27.61%_16.02%]" />
              <Helper additionalClassNames="inset-[69.02%_64.06%_27.61%_32.03%]" />
              <Helper additionalClassNames="inset-[69.02%_48.05%_27.61%_48.05%]" />
              <Helper additionalClassNames="inset-[69.02%_32.03%_27.61%_64.06%]" />
              <Helper additionalClassNames="inset-[69.02%_16.02%_27.61%_80.08%]" />
              <Helper additionalClassNames="inset-[69.02%_0_27.61%_96.09%]" />
              <Helper additionalClassNames="inset-[82.83%_96.09%_13.81%_0]" />
              <Helper additionalClassNames="inset-[82.83%_80.08%_13.81%_16.02%]" />
              <Helper additionalClassNames="inset-[82.83%_64.06%_13.81%_32.03%]" />
              <Helper additionalClassNames="inset-[82.83%_48.05%_13.81%_48.05%]" />
              <Helper additionalClassNames="inset-[82.83%_32.03%_13.81%_64.06%]" />
              <Helper additionalClassNames="inset-[82.83%_16.02%_13.81%_80.08%]" />
              <Helper additionalClassNames="inset-[82.83%_0_13.81%_96.09%]" />
              <Helper additionalClassNames="inset-[96.63%_96.09%_0_0]" />
              <Helper additionalClassNames="inset-[96.63%_80.08%_0_16.02%]" />
              <Helper additionalClassNames="inset-[96.63%_64.06%_0_32.03%]" />
              <Helper additionalClassNames="inset-[96.63%_48.05%_0_48.05%]" />
              <Helper additionalClassNames="inset-[96.63%_32.03%_0_64.06%]" />
              <Helper additionalClassNames="inset-[96.63%_16.02%_0_80.08%]" />
              <Helper additionalClassNames="inset-[96.63%_0_0_96.09%]" />
            </div>
            <DotsHelper additionalClassNames="inset-[11.54%_54.42%_87.79%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[11.54%_53.4%_87.79%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[11.54%_52.38%_87.79%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[14.31%_54.42%_85.02%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[14.31%_53.4%_85.02%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[14.31%_52.38%_85.02%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[17.08%_54.42%_82.25%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[17.08%_53.4%_82.25%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[17.08%_52.38%_82.25%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[19.84%_54.42%_79.48%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[19.84%_53.4%_79.48%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[19.84%_52.38%_79.48%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[22.61%_54.42%_76.71%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[22.61%_53.4%_76.71%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[22.61%_52.38%_76.71%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[25.38%_54.42%_73.94%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[25.38%_53.4%_73.94%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[25.38%_52.38%_73.94%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[28.15%_54.42%_71.18%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[28.15%_53.4%_71.18%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[28.15%_52.38%_71.18%_47.37%]" />
            <DotsHelper additionalClassNames="inset-[30.92%_54.42%_68.41%_45.33%]" />
            <DotsHelper additionalClassNames="inset-[30.92%_53.4%_68.41%_46.35%]" />
            <DotsHelper additionalClassNames="inset-[30.92%_52.38%_68.41%_47.37%]" />
          </div>
        </div>
      </div>
      <div className="absolute h-[1080px] left-0 top-[80px] w-[1920px] z-[2]" data-name="Takeover_Ad">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTakeoverAd} />
        </div>
      </div>
      <div className="bg-[#111] content-stretch flex flex-col gap-[48px] items-start px-[360px] py-[80px] relative shrink-0 w-[1920px] z-[1]" data-name="Footer">
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
    </div>
  );
}