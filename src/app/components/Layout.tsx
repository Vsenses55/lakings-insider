import { Outlet, Link, useLocation } from "react-router";
import imgLogoWhite from "figma:asset/22c3e68e7eabf2834b7b9a2410f4146c7d42d872.png";

export default function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[#f9f9f9] content-stretch py-[24px] relative" data-name="Header">
        <div className="flex items-center justify-center">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[218.276px]" data-name="Logo">
            <div className="h-[52px] relative shrink-0 w-full" data-name="Logo_White">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="LA Kings Insider" className="absolute left-0 max-w-none size-full top-0" src={imgLogoWhite} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="bg-white content-stretch flex flex-col items-start pb-px relative" data-name="Nav Bar">
        <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
        <div className="h-[56px] relative shrink-0 w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-name="Container">
          <div className="flex flex-row justify-center md:justify-center overflow-clip rounded-[inherit] h-full min-w-max md:min-w-0 px-4 md:px-0">
            <div className="content-stretch flex items-start justify-center pr-[0.016px] relative h-full">
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between gap-4 md:gap-6 px-[24px] relative h-full">
                  <Link 
                    to="/" 
                    className="content-stretch flex flex-col h-[56px] items-center justify-center relative shrink-0" 
                    data-name="Button"
                  >
                    {isActive("/") && (
                      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-0 pointer-events-none" />
                    )}
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap ${isActive("/") ? "text-[#111]" : "text-[#4a5565]"}`}>
                      Components
                    </p>
                  </Link>
                  
                  <Link 
                    to="/colors" 
                    className="content-stretch flex items-center justify-center py-[16px] relative shrink-0" 
                    data-name="Button"
                  >
                    {isActive("/colors") && (
                      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-x-0 bottom-0 pointer-events-none" />
                    )}
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap ${isActive("/colors") ? "text-[#111]" : "text-[#4a5565]"}`}>
                      Color
                    </p>
                  </Link>
                  
                  <Link 
                    to="/typography" 
                    className="h-[56px] flex items-center justify-center relative shrink-0" 
                    data-name="Button"
                  >
                    {isActive("/typography") && (
                      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-x-0 bottom-0 pointer-events-none" />
                    )}
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap ${isActive("/typography") ? "text-[#111]" : "text-[#4a5565]"}`}>
                      Typography
                    </p>
                  </Link>
                  
                  <Link 
                    to="/spacing" 
                    className="h-[56px] flex items-center justify-center relative shrink-0" 
                    data-name="Button"
                  >
                    {isActive("/spacing") && (
                      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-x-0 bottom-0 pointer-events-none" />
                    )}
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap ${isActive("/spacing") ? "text-[#111]" : "text-[#4a5565]"}`}>
                      Spacing
                    </p>
                  </Link>
                  
                  <Link 
                    to="/prototype" 
                    className="h-[56px] flex items-center justify-center relative shrink-0" 
                    data-name="Button"
                  >
                    {isActive("/prototype") && (
                      <div aria-hidden="true" className="absolute border-b-2 border-black border-solid inset-x-0 bottom-0 pointer-events-none" />
                    )}
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[16px] text-center tracking-[-0.3125px] whitespace-nowrap ${isActive("/prototype") ? "text-[#111]" : "text-[#4a5565]"}`}>
                      Prototype
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
}