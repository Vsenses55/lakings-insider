import { useState } from "react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-j40jpafphk";
import svgPathsSearch from "../../imports/svg-ui8wmhoccv";
import svgPathsBackToTop from "../../imports/svg-th3p13k14g";
import svgPathsBanner from "../../imports/svg-lubgdmrf6i";
import imgLogoWhite from "figma:asset/565011f0c92ee033210f2e9a9169872b17c5838a.png";
import imgAds from "figma:asset/7abbc6cb054696a20fcd790bf4232219b3f761c2.png";
import imgSpotlight from "figma:asset/37a3ef8ceea7c4c2aa91ebde5a7452f6eabefbb4.png";
import imgTakeoverAd from "figma:asset/c416c616ba831f3b7bac9561b3d59cf436f6fe2e.png";
import img300X250Banner from "figma:asset/d9c885db4474efee935f50587302772a7bab1299.png";
import imgCardFight from "../../assets/kings-card-fight.png";
import imgCardGoalie from "../../assets/kings-card-goalie.png";
import imgCardForward from "../../assets/kings-card-forward.png";
import imgCardMatchup from "../../assets/kings-card-matchup.png";
import imgPodcastKingsMen from "../../assets/podcast-all-the-kings-men.png";
import imgPodcastOntarioReign from "../../assets/podcast-ontario-reign.png";
import imgPodcastFoxFaust from "../../assets/podcast-fox-and-faust.png";
import imgPodcastKotp from "../../assets/podcast-kotp.png";
// Component imports
import SearchBar from "./SearchBar";
import NavDropdown from "./NavDropdown";
import { Menu, X } from "lucide-react";
import CardImport from "../../imports/Card";
import Button from "../../imports/Button";
import Label from "../../imports/Label";
import Podcasts from "../../imports/Podcasts";
import ButtonMorePodcasts from "../../imports/Button-68-594";
import Component300X250Ads from "../../imports/300X250Ads";
import ListHeadlinesMayorsManor from "../../imports/ListHeadlines-69-97";
import Section from "../../imports/Section-69-426";
import InteractiveSubscribe from "./InteractiveSubscribe";

const imgFeaturedImage = "https://images.unsplash.com/photo-1771938429358-09d2637c1eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc3MzU5MzIyM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const imgReferee = "https://images.unsplash.com/photo-1615015324755-69c2d6f3c3de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjByZWZlcmVlJTIwaWNlfGVufDF8fHx8MTc3Mzc3MTM0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgHockeyAction = "https://images.unsplash.com/flagged/photo-1550585477-a025700d7fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBwbGF5ZXIlMjBhY3Rpb258ZW58MXx8fHwxNzczNzc5Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgGoalieSave = "https://images.unsplash.com/photo-1551241784-1058bb555220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnb2FsaWUlMjBzYXZlfGVufDF8fHx8MTc3Mzc3OTY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgTeamCelebration = "https://images.unsplash.com/photo-1612639401210-3db99c43b320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczNzc5NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgHockeyArena = "https://images.unsplash.com/photo-1611483446721-898ab75ac42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob2NrZXklMjBhcmVuYXxlbnwxfHx8fDE3NzM3Nzk2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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
        <div className="font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
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

function ListHeadlinesDivider() {
  return (
    <div className="h-0 relative shrink-0 w-full md:w-[378px]">
      <div className="absolute inset-[-0.13px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378 0.25">
          <path d="M0 0.125H378" stroke="#111111" strokeWidth="0.25" />
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
      <div className="content-stretch flex items-center justify-center py-[10px] relative shrink-0">
        <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121212] text-[19px] uppercase whitespace-nowrap" style={{ fontWeight: 700 }}>{text}</p>
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
    <div className={className || "relative"}>
      <div className="content-stretch flex gap-[8px] items-start relative">
        {icon && (
          <div className="h-[10.956px] relative shrink-0 w-[10.954px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9537 10.9557">
              <path d={svgPaths.p3db42300} fill="#B7B7B7" />
            </svg>
          </div>
        )}
        <p className="font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[#f9f9f9] text-[16px] whitespace-nowrap" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
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
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col items-start relative gap-2">
        {children || <MenuItem />}
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
    <div className={className || "relative w-full md:w-[276px]"}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative text-[#111] w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[13px] uppercase w-full" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            {label}
          </p>
          <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[19px] w-full" style={{ fontWeight: 600 }}>{headline}</p>
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
};

function Card({ className, author = "By Zach Dooley • 1 hour ago • 54 comments", body = "It was first and foremost a scary evening for the LA Kings, as defensemen Matt Roy and\nSean Walker both exited the game early with injuries that were extremely difficult to  ", children = null, headline = "Final - Kings 6, Wild 3 - Doughty, McLellan", label = "POSTGAME NOTES" }: CardProps) {
  return (
    <div className={className || "relative w-full"}>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative w-full">
        <div className="bg-[#ab5b5b] relative shrink-0 w-full overflow-hidden" style={{ aspectRatio: '790/497' }}>
          {children || null}
        </div>
        <Copy additionalClassNames="w-full" body={body} author={author}>
          <p className="font-['Nunito_Sans',sans-serif] leading-[16px] relative shrink-0 text-[#444] text-[13px] uppercase whitespace-nowrap" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            {label}
          </p>
          <p className="font-['Flama',sans-serif] leading-[28px] md:leading-[32px] not-italic relative shrink-0 text-[24px] md:text-[28px] w-full" style={{ fontWeight: 600 }}>{headline}</p>
        </Copy>
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
  const [isHovered, setIsHovered] = useState(false);
  const currentState = isHovered ? "Hover" : state;
  
  return (
    <button
      className={className || "relative"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative">
          <p className={`font-['Nunito_Sans',sans-serif] leading-[20px] relative shrink-0 text-[14px] md:text-[16px] whitespace-nowrap ${currentState === "Hover" ? "text-[#adadad]" : "text-white"}`} style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            {labels}
          </p>
        </div>
      </div>
    </button>
  );
}

type ListHeadlinesProps = {
  className?: string;
  children?: React.ReactNode;
};

function ListHeadlines({ className, children }: ListHeadlinesProps) {
  return (
    <div className={className || "relative w-full"}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
        {children}
      </div>
    </div>
  );
}

function Ad300x250Banner() {
  return (
    <div className="relative size-full" data-name="300x250 Ads">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 327">
        <g id="Path 164">
          <g id="Vector" />
          <path d={svgPathsBanner.p6d92e00} fill="var(--fill-0, #999999)" id="Vector_2" />
        </g>
      </svg>
      <div className="absolute inset-[10.09%_10.53%_13.46%_10.53%]" data-name="300x250">
        <img alt="" className="absolute block max-w-none size-full" height="250" src={img300X250Banner} width="300" />
      </div>
      <p className="absolute font-['Nunito_Sans:Medium',sans-serif] font-medium inset-[91.44%_35.53%_5.81%_36.05%] leading-[16px] text-[#6c7077] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        ADVERTISEMENT
      </p>
    </div>
  );
}

export default function HomePrototype() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));

  const navSections = [
    {
      label: "EXPLORE",
      items: [
        { label: "Behind the scenes" },
        { label: "Off the Ice" },
        { label: "Looking to the future" },
        { label: "The Nitty Gritty" },
        { label: "Game Analysis" }
      ]
    },
    {
      label: "AUDIO & VIDEO",
      items: [
        { label: "LA Kings Audio Network" },
        { label: "All The Kings Men" },
        { label: "Fox & Faust" },
        { label: "The Reign Check" },
        { label: "Videos" }
      ]
    },
    {
      label: "LAKINGS.COM",
      items: [
        { label: "Home" },
        { label: "News" },
        { label: "Schedule" },
        { label: "Roster" },
        { label: "Stats" }
      ]
    }
  ];

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="bg-white flex flex-col gap-0 lg:gap-[40px] items-center relative w-full min-h-screen">
      {/* Background Image - max 1920px, positioned behind content */}
      <div className="absolute left-1/2 top-[80px] w-[1920px] h-[1080px] -translate-x-1/2 z-[2] pointer-events-none hidden lg:block">
        <img alt="" className="w-[1920px] h-[1080px]" src={imgTakeoverAd} />
      </div>

      {/* Sticky Nav Bar */}
      <div className="bg-[#111] sticky top-0 flex items-center justify-center w-full h-[80px] z-50 px-4 md:px-8">
        <div className="flex items-center justify-between max-w-[1200px] w-full">
          <div className="flex items-center shrink-0 w-[160px] md:w-[218.276px]">
            <div className="h-[40px] md:h-[52px] relative w-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="LA Kings Insider" className="absolute left-0 max-w-none size-full top-0" src={imgLogoWhite} />
              </div>
            </div>
          </div>
          <div className="flex gap-[24px] md:gap-[48px] items-center justify-end">
            {/* Desktop: Nav Dropdowns */}
            <div className="hidden md:flex gap-[32px] md:gap-[58px] items-center">
              {navSections.map((section, index) => (
                <NavDropdown 
                  key={index}
                  label={section.label}
                  items={section.items}
                />
              ))}
            </div>
            
            {/* Mobile: Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-[#adadad] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            
            {/* Search Icon */}
            <button 
              className="relative h-[17.534px] w-[16.045px] flex-shrink-0"
              onClick={() => setSearchVisible(!searchVisible)}
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0447 17.5338">
                <path d={svgPaths.p4188700} fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Component - positioned below nav */}
      {searchVisible && (
        <div className="absolute top-[80px] left-0 w-full z-40">
          <SearchBar isOpen={searchVisible} onClose={() => setSearchVisible(false)} />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white z-50 min-h-screen">
          {/* Header with X and Search */}
          <div className="bg-[#111] h-[68px] flex items-center justify-between px-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 -ml-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <button 
              className="text-white p-2 -mr-2" 
              aria-label="Search"
              onClick={() => {
                setSearchVisible(true);
                setMobileMenuOpen(false);
              }}
            >
              <svg className="block h-[17.534px] w-[16.045px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0447 17.5338">
                <path d={svgPaths.p4188700} fill="white" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-4 py-6">
            {navSections.map((section, sectionIndex) => {
              const isExpanded = expandedSections.has(sectionIndex);

              return (
                <div key={sectionIndex} className="mb-4">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(sectionIndex)}
                    className="w-full flex items-center justify-between py-4 border-b border-[#e2e2e2]"
                  >
                    <h3
                      className="font-black text-[18px] leading-[24px] text-[#111] uppercase"
                      style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                    >
                      {section.label}
                    </h3>

                    {/* Plus/Minus Icon */}
                    <div className="w-[24px] h-[24px] border border-[#111] flex items-center justify-center">
                      {isExpanded ? (
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                          <path d="M0 1H12" stroke="#111" strokeWidth="2" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 0V12M0 6H12" stroke="#111" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Section Items */}
                  {isExpanded && (
                    <div className="py-4 pl-0">
                      {section.items.map((item, itemIndex) => (
                        <button
                          key={itemIndex}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block w-full text-left py-3 text-[#111] text-[16px] leading-[24px] hover:opacity-70 transition-opacity"
                          style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Banner Ad */}
      <div className="relative z-[4] hidden lg:block">
        <img alt="Advertisement" className="block" height="90" src={imgAds} width="728" />
      </div>

      {/* White Container - 1296px with padding, content max 1200px */}
      <div className="bg-white border border-[#ECECEC] flex flex-col gap-[48px] items-center justify-center overflow-clip p-6 md:p-12 relative w-full max-w-[1296px] z-[3]">
        {/* Content wrapper - max 1200px */}
        <div className="w-full max-w-[1200px] flex flex-col gap-[48px]">
          {/* Featured Section with Editor's Picks and Ad */}
          <Section />

          {/* Spotlight Section */}
          <div className="w-full flex flex-col md:flex-row gap-0">
            <div className="w-full md:w-1/2">
              <img alt="Spotlight" className="w-full h-auto md:h-[442px] object-cover" src={imgSpotlight} />
            </div>
            <div className="bg-[#111] w-full md:w-1/2 flex flex-col justify-between p-8 md:p-12 min-h-[400px] md:h-[442px]">
              <div className="flex items-start justify-end w-full">
                <p className="font-['Flama',sans-serif] leading-[24px] not-italic text-[#999] text-[19px] uppercase" style={{ fontWeight: 700 }}>SPOTLIGHT</p>
              </div>
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-3">
                  <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#ccc] text-[13px] uppercase" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    OFF THE ICE
                  </p>
                  <p className="font-['Flama',sans-serif] leading-[28px] md:leading-[32px] text-[24px] md:text-[28px] text-white" style={{ fontWeight: 600 }}>
                    Anze Kopitar, Dr. Maurice O'Gorman named January West Division "Stars of the Month"
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[20px] text-[#ccc] text-[14px] md:text-[16px]" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    LA Kings forward Anze Kopitar and Children's Hospital Los Angeles doctor Maurice O'Gorman have been selected as the NHL's West Division "Stars of the Month" for the month of January.
                  </p>
                </div>
                <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#ccc] text-[13px]" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  By Zach Dooley • 1/20/2021 • 54 comments
                </p>
              </div>
            </div>
          </div>

          {/* 2-Column Grid Section */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[780px_380px] gap-6 lg:gap-[40px]">
              {/* Left Column - 780px */}
              <div className="w-full lg:max-w-[780px] flex flex-col gap-[40px]">
                {/* 2x2 Grid of Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
                  {/* Card 1 */}
                  <div className="w-full">
                    <div className="block sm:hidden">
                      <CardImport states="Small Mobile" imageUrl={imgCardFight} />
                    </div>
                    <div className="hidden sm:block">
                      <CardImport states="Small" imageUrl={imgCardFight} />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="w-full">
                    <div className="block sm:hidden">
                      <CardImport states="Small Mobile" imageUrl={imgCardGoalie} />
                    </div>
                    <div className="hidden sm:block">
                      <CardImport states="Small" imageUrl={imgCardGoalie} />
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="w-full">
                    <div className="block sm:hidden">
                      <CardImport states="Small Mobile" imageUrl={imgCardForward} />
                    </div>
                    <div className="hidden sm:block">
                      <CardImport states="Small" imageUrl={imgCardForward} />
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="w-full">
                    <div className="block sm:hidden">
                      <CardImport states="Small Mobile" imageUrl={imgCardMatchup} />
                    </div>
                    <div className="hidden sm:block">
                      <CardImport states="Small" imageUrl={imgCardMatchup} />
                    </div>
                  </div>
                </div>

                {/* More News Button */}
                <div className="w-full h-[47px]">
                  <Button />
                </div>

                {/* Label and Podcasts */}
                <div className="flex flex-col gap-[40px]">
                  <Label />
                  <Podcasts
                    imageUrl1={imgPodcastKingsMen}
                    imageUrl2={imgPodcastOntarioReign}
                    imageUrl3={imgPodcastFoxFaust}
                    imageUrl4={imgPodcastKotp}
                  />
                </div>

                {/* More Podcasts Button */}
                <div className="w-full h-[47px]">
                  <ButtonMorePodcasts />
                </div>
              </div>

              {/* Right Column - 380px */}
              <div className="w-full flex flex-col gap-[40px]">
                <div className="h-[327px] w-full">
                  <Component300X250Ads />
                </div>
                
                <div className="w-full">
                  <ListHeadlines>
                    <ListHeadlinesLabelText text="LAKINGS.COM" />
                    <PostHeadline
                      className="w-full"
                      headline="Looking back on this date in LA Kings History"
                      label="FEATURED STORIES"
                      author="By Zach Dooley • Feb 6, 2021 • 54 comments"
                    />
                    <ListHeadlinesDivider />
                    <PostHeadline
                      className="w-full"
                      headline="Kings Care Happenings - Fan Cutouts, Blood Drive, Heros, O'Ree"
                      label="OFF THE ICE"
                      author="By Zach Dooley • Feb 6, 2021 • 54 comments"
                    />
                    <ListHeadlinesDivider />
                    <PostHeadline
                      className="w-full"
                      headline="Anze Kopitar named January West Division Star"
                      label="FEATURED STORIES"
                      author="By Zach Dooley • Feb 6, 2021 • 54 comments"
                    />
                    <ListHeadlinesDivider />
                    <PostHeadline
                      className="w-full"
                      headline="Kings vs Wild Preview: Time to bounce back"
                      label="GAME PREVIEW"
                      author="By Zach Dooley • Feb 6, 2021 • 54 comments"
                    />
                    <ListHeadlinesDivider />
                    <PostHeadline
                      className="w-full"
                      headline="Final - Kings 6, Wild 3 - Doughty, McLellan"
                      label="POSTGAME NOTES"
                      author="By Zach Dooley • Feb 6, 2021 • 54 comments"
                    />
                  </ListHeadlines>
                </div>
                
                <div className="w-full">
                  <ListHeadlinesMayorsManor />
                </div>
              </div>
            </div>
          </div>

          {/* Trending Section - 3 Column Grid */}
          <div className="w-full">
            {/* Trending Label Header */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mb-6">
              <div aria-hidden="true" className="absolute border-[#999] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center justify-center pb-[10px] relative shrink-0">
                <div aria-hidden="true" className="absolute border-[#111] border-b-2 border-solid inset-0 pointer-events-none" />
                <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#121212] text-[19px] uppercase whitespace-nowrap" style={{ fontWeight: 700 }}>TRENDING</p>
              </div>
            </div>

            {/* 3 Column Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[40px]">
              {/* Card 1 */}
              <div className="w-full">
                <div className="flex flex-col gap-[18px]">
                  <div className="bg-[#111] h-[206px] w-full overflow-hidden">
                    <img src={imgHockeyAction} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#444] text-[13px] uppercase" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                      POSTGAME NOTES
                    </p>
                    <p className="font-['Flama',sans-serif] leading-[24px] not-italic text-[#111] text-[19px]" style={{ fontWeight: 600 }}>
                      Compete & Intensity, Maatta, FRK Getting Close, the Modern Enforcer
                    </p>
                  </div>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[20px] text-[#111] text-[16px]" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    The Kings CARE Foundation participated in several events throughout the course of November
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#111] text-[13px]" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    By Zach Dooley • 1 hour ago • 54 comments
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full">
                <div className="flex flex-col gap-[18px]">
                  <div className="bg-[#111] h-[206px] w-full overflow-hidden">
                    <img src={imgGoalieSave} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#444] text-[13px] uppercase" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                      POSTGAME NOTES
                    </p>
                    <p className="font-['Flama',sans-serif] leading-[24px] not-italic text-[#111] text-[19px]" style={{ fontWeight: 600 }}>
                      Compete & Intensity, Maatta, FRK Getting Close, the Modern Enforcer
                    </p>
                  </div>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[20px] text-[#111] text-[16px]" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    The Kings CARE Foundation participated in several events throughout the course of November
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#111] text-[13px]" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    By Zach Dooley • 1 hour ago • 54 comments
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full">
                <div className="flex flex-col gap-[18px]">
                  <div className="bg-[#111] h-[206px] w-full overflow-hidden">
                    <img src={imgTeamCelebration} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#444] text-[13px] uppercase" style={{ fontWeight: 900, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                      ANGELES ANALYSIS
                    </p>
                    <p className="font-['Flama',sans-serif] leading-[24px] not-italic text-[#111] text-[19px]" style={{ fontWeight: 600 }}>
                      Kings sign Andreas Athanasiou to one-year contract
                    </p>
                  </div>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[20px] text-[#111] text-[16px]" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    The Kings CARE Foundation participated in several events throughout the course of November
                  </p>
                  <p className="font-['Nunito_Sans',sans-serif] leading-[16px] text-[#111] text-[13px]" style={{ fontWeight: 500, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    By Zach Dooley • 1 hour ago • 54 comments
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe & Tickets Section */}
          <div className="w-full max-w-[1200px]">
            <InteractiveSubscribe />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111] w-full px-4 md:px-12 py-12 md:py-20 z-[1]">
        <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1200px] mx-auto">
          {/* Top Row - Logo and Social Icons */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Logo */}
            <div className="h-[43px] w-[200px] md:w-[250px] shrink-0">
              <img alt="LA Kings Insider" className="h-full w-auto" src={imgLogoWhite} />
            </div>

            {/* Social Icons */}
            <div className="flex gap-[22px] items-center shrink-0">
              <div className="h-[22.516px] w-[22px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22.5161">
                  <path d={svgPaths.p285a800} fill="#999999" />
                </svg>
              </div>
              <div className="h-[22.509px] w-[22.512px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5123 22.5094">
                  <path d={svgPaths.p20663500} fill="#999999" />
                </svg>
              </div>
              <div className="h-[22.457px] w-[22.979px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.979 22.457">
                  <path d={svgPaths.p6684ef2} fill="#999999" />
                </svg>
              </div>
              <div className="h-[18.163px] w-[25.833px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 18.163">
                  <path d={svgPaths.pece7480} fill="#999999" />
                </svg>
              </div>
            </div>
          </div>

          {/* Middle - Links */}
          <div className="flex flex-wrap gap-8 md:gap-16">
            <ColumnItems>
              <MenuItem icon={false} label="Behind the scenes" />
              <MenuItem icon={false} label="Off the Ice" />
              <MenuItem icon={false} label="Looking to the future" />
              <MenuItem icon={false} label="The Nitty Gritty" />
              <MenuItem icon={false} label="Game Analysis" />
              <MenuItem icon={false} label="Ontario Regin" />
            </ColumnItems>
            <ColumnItems>
              <MenuItem label="LA Kings Audio Network" />
              <MenuItem icon={false} label="All The Kings Men" />
              <MenuItem icon={false} label="Fox & Faust" />
              <MenuItem icon={false} label="The Reign Check" />
              <MenuItem icon={false} label="Kings of the Podcast" />
              <MenuItem icon={false} label="Videos" />
            </ColumnItems>
            <ColumnItems>
              <MenuItem label="LAKings.com" />
              <MenuItem icon={false} label="About" />
              <MenuItem icon={false} label="Archives" />
            </ColumnItems>
          </div>

          {/* Bottom - Privacy, Copyright, and Back to Top Button */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="flex flex-col gap-3 text-[#b7b7b7]">
              <p className="text-[15px]">Privacy Policy | Terms of Service</p>
              <p className="font-['Nunito_Sans',sans-serif] text-[14px]" style={{ fontWeight: 600, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                © 2021 LA KINGS INSIDER
              </p>
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="size-[49.5px] relative shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Back to top"
            >
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.5 49.5">
                <rect height="49" stroke="#999999" strokeWidth="0.5" width="49" x="0.25" y="0.25" />
                <path d={svgPathsBackToTop.p1a876680} fill="#999999" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}