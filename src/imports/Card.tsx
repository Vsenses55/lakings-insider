import clsx from "clsx";

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
        <div className="font-['Nunito_Sans',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
          <p className="mb-0">{body}</p>
          <p>{`Sean Walker both exited the game early with injuries that were extremely difficult to  `}</p>
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
  imageUrl?: string;
};

export default function Card({ className, author = "By Zach Dooley • 1 hour ago • 54 comments", body = "It was first and foremost a scary evening for the LA Kings, as defensemen Matt Roy and\nSean Walker both exited the game early with injuries that were extremely difficult to  ", children = null, headline = "Final - Kings 6, Wild 3 - Doughty, McLellan", label = "POSTGAME NOTES", states = "Large", imageUrl }: CardProps) {
  const isLarge = states === "Large";
  const isSmall = states === "Small";
  const isSmallMobile = states === "Small Mobile";
  const isSmallMobileOrSmall = ["Small Mobile", "Small"].includes(states);
  return (
    <div className={className || `relative ${isLarge ? "w-[790px]" : ""}`}>
      <div className={`content-stretch flex gap-[40px] items-start relative ${isLarge ? "flex-col w-full" : isSmall ? "flex-col" : ""}`}>
        {isSmallMobile && (
          <>
            <div className="flex gap-[12px] items-start w-full">
              <div className="bg-[#111] h-[120px] w-[120px] shrink-0 overflow-hidden" data-name="Img">
                {imageUrl ? (
                  <img src={imageUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  children || null
                )}
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start flex-1">
                <div className="content-stretch flex flex-col gap-[6px] items-start w-full">
                  <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#444] text-[11px] uppercase" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    {label}
                  </p>
                  <p className="font-['Flama',sans-serif] leading-[18px] not-italic text-[#111] text-[14px]" style={{ fontWeight: 600 }}>{headline}</p>
                </div>
                <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[13px] text-[#6c7077]" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  {author}
                </p>
              </div>
            </div>
          </>
        )}
        {isSmall && (
          <>
            <div className="bg-[#111] h-[260px] shrink-0 w-[380px] overflow-hidden" data-name="Img">
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                children || null
              )}
            </div>
            <Copy additionalClassNames="w-[380px]" body={body} author={author}>
              <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                {label}
              </p>
              <p className="font-['Flama',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#111] text-[19px] w-[min-content]" style={{ fontWeight: 600 }}>{headline}</p>
            </Copy>
          </>
        )}
        {isLarge && (
          <>
            <div className="bg-[#ab5b5b] h-[497px] shrink-0 w-full overflow-hidden" data-name="Img">
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                children || null
              )}
            </div>
            <Copy additionalClassNames="w-full" body={body} author={author}>
              <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                {label}
              </p>
              <p className="font-['Flama',sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[#111] text-[28px] w-[min-content]" style={{ fontWeight: 600 }}>{headline}</p>
            </Copy>
          </>
        )}
      </div>
    </div>
  );
}