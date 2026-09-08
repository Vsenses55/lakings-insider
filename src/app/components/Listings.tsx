type ListingItemProps = {
  category: string;
  headline: string;
  author: string;
  date: string;
  commentCount: number;
  onClick?: () => void;
};

function ListingItem({ category, headline, author, date, commentCount, onClick }: ListingItemProps) {
  return (
    <div 
      className="relative w-full cursor-pointer group"
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col gap-[32px] items-start relative text-[#111] w-full">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p 
            className="font-black leading-[16px] text-[13px] uppercase text-[#111] transition-colors group-hover:text-[#4a5565]"
            style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
          >
            {category}
          </p>
          <p className="leading-[24px] text-[19px] font-semibold text-[#111] font-['Flama',sans-serif] transition-colors group-hover:text-[#4a5565]">
            {headline}
          </p>
        </div>
        
        {/* Meta */}
        <p 
          className="font-medium leading-[16px] text-[13px] text-[#111]"
          style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
        >
          By {author} • {date} • {commentCount} comments
        </p>
      </div>
    </div>
  );
}

function ListingDivider() {
  return (
    <div className="h-0 relative w-full">
      <div className="absolute inset-0">
        <svg className="block w-full h-[0.25px]" fill="none" preserveAspectRatio="none" viewBox="0 0 378 0.25">
          <path d="M0 0.125H378" stroke="#111111" strokeWidth="0.25" />
        </svg>
      </div>
    </div>
  );
}

type ListingsProps = {
  title?: string;
  items: ListingItemProps[];
  className?: string;
};

export default function Listings({ 
  title = "EDITOR'S PICKS", 
  items,
  className = "" 
}: ListingsProps) {
  return (
    <div className={`relative w-full max-w-[378px] ${className}`}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative">
        {/* Section Title */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#999] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex items-center justify-center py-[10px] relative shrink-0">
            <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
            <p className="leading-[24px] text-[#121212] text-[19px] uppercase whitespace-nowrap font-bold font-['Flama',sans-serif]">
              {title}
            </p>
          </div>
        </div>

        {/* Listing Items */}
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <ListingItem {...item} />
            {index < items.length - 1 && <div className="mt-[24px]"><ListingDivider /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
