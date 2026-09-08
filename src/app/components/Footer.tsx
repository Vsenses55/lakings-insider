import svgPaths from "../../imports/svg-jrs8n6mbfw";
import imgLogoWhite from "figma:asset/565011f0c92ee033210f2e9a9169872b17c5838a.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#111] relative w-full">
      <div className="px-4 md:px-8 lg:px-[120px] py-[60px] md:py-[80px]">
        {/* Top Row - Logo and Social Icons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-[40px] md:mb-[60px] gap-6">
          {/* Logo */}
          <div className="h-[43px] w-[250px] shrink-0">
            <img alt="LA Kings Insider Logo" className="h-full w-auto" src={imgLogoWhite} />
          </div>

          {/* Social Icons */}
          <div className="flex gap-[22px] items-center shrink-0">
            <button className="h-[22.516px] w-[22px] hover:opacity-70 transition-opacity" aria-label="Facebook">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22.5161">
                <path d={svgPaths.p285a800} fill="#999999" />
              </svg>
            </button>
            <button className="h-[22.509px] w-[22.512px] hover:opacity-70 transition-opacity" aria-label="Instagram">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5123 22.5094">
                <path d={svgPaths.p20663500} fill="#999999" />
              </svg>
            </button>
            <button className="h-[22.457px] w-[22.979px] hover:opacity-70 transition-opacity" aria-label="Twitter">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.979 22.457">
                <path d={svgPaths.p6684ef2} fill="#999999" />
              </svg>
            </button>
            <button className="h-[18.163px] w-[25.833px] hover:opacity-70 transition-opacity" aria-label="YouTube">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8333 18.163">
                <path d={svgPaths.pece7480} fill="#999999" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links - Three Columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-[40px] md:mb-[60px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Behind the scenes
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Off the Ice
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Looking to the future
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              The Nitty Gritty
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Game Analysis
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              LA Kings Audio Network
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              All The Kings Men
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Fox & Faust
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              The Reign Check
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Kings of the Podcast
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              LAKings.com
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              About
            </a>
            <a href="#" className="text-[#f9f9f9] text-[16px] leading-[20px] hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Archives
            </a>
          </div>
        </div>

        {/* Bottom - Privacy, Copyright, and Back to Top Button */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <p className="font-['Helvetica',sans-serif] text-[15px] text-[#b7b7b7] leading-[normal]">
              Privacy Policy | Terms of Service
            </p>
            <p className="font-semibold text-[14px] text-[#b7b7b7] leading-[normal]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              © 2021 LA KINGS INSIDER
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="rotate-90 size-[50px] relative shrink-0">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
              <path d={svgPaths.p2de85b00} stroke="#999999" strokeWidth="0.5" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[17.1px] w-[9.789px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.78888 17.1">
                  <path d={svgPaths.p35f6900} fill="#999999" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}