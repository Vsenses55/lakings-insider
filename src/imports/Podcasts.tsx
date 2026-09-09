type CardPodastProps = {
  className?: string;
  imageUrl?: string;
};

function CardPodast({ className, imageUrl }: CardPodastProps) {
  return (
    <div className={className || "relative w-full sm:w-[380px]"} data-name="Card Podast">
      <div className="content-stretch flex gap-[20px] items-start relative w-full">
        <div className="bg-[#111] shrink-0 size-[120px] sm:size-[175px] overflow-hidden" data-name="Img">
          {imageUrl && <img src={imageUrl} alt="" className="w-full h-full object-cover" />}
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18px] items-start min-h-px min-w-px relative" data-name="Copy">
          <div className="content-stretch flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
            <p className="leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              POSTGAME NOTES
            </p>
            <p className="leading-[20px] min-w-full relative shrink-0 text-[#111] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Los Angeles Kings vs Golden Knights Game Recap
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
            <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#111] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              By Zach Dooley • 1 hour ago • 54 comments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type ContentProps = {
  imageUrlLeft?: string;
  imageUrlRight?: string;
};

function Content({ imageUrlLeft, imageUrlRight }: ContentProps) {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[20px] items-start relative shrink-0 w-full sm:w-[770px]">
      <CardPodast className="relative shrink-0 w-full sm:w-[380px]" imageUrl={imageUrlLeft} />
      <CardPodast className="relative shrink-0 w-full sm:w-[380px]" imageUrl={imageUrlRight} />
    </div>
  );
}

type PodcastsProps = {
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
};

export default function Podcasts({ imageUrl1, imageUrl2, imageUrl3, imageUrl4 }: PodcastsProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full" data-name="Podcasts">
      <Content imageUrlLeft={imageUrl1} imageUrlRight={imageUrl2} />
      <Content imageUrlLeft={imageUrl3} imageUrlRight={imageUrl4} />
    </div>
  );
}
