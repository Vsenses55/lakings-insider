import { useState } from "react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-ys64f8hfol";
import imgTickets from "figma:asset/0f81995ea2622127c097861a09b9b23878f23410.png";
import imgTicketsPanel from "figma:asset/e6bcbe39c7cdacb951420d2dc79f0f4c91c4987c.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[20px] py-[15px] relative size-full">{children}</div>
    </div>
  );
}

type InteractiveInputFieldProps = {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  hasError: boolean;
};

function InteractiveInputField({ 
  className, 
  value, 
  onChange, 
  onFocus, 
  onBlur, 
  isFocused, 
  isHovered,
  onMouseEnter,
  onMouseLeave,
  hasError 
}: InteractiveInputFieldProps) {
  // Error state
  if (hasError) {
    return (
      <div className={className || "relative w-full"} data-name="State=Error">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="h-[9px] relative shrink-0 w-[89px]" data-name="Labels">
            <p className="font-['Nunito_Sans',sans-serif] leading-[normal] not-italic text-[#b03335] text-[13px] whitespace-nowrap" style={{ fontWeight: 800 }}>
              Error Message
            </p>
          </div>
          <div className="bg-[#d9d9d9] h-[50px] relative shrink-0 w-full" data-name="Entry Field">
            <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
            <Wrapper>
              <p className="font-['Nunito_Sans',sans-serif] leading-[normal] relative shrink-0 text-[#999] text-[15px] whitespace-nowrap" style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                Email
              </p>
            </Wrapper>
          </div>
        </div>
      </div>
    );
  }

  // Focused state
  if (isFocused) {
    return (
      <div className={className || "relative w-full"} data-name="State=Focused">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="bg-[#414347] h-[50px] relative shrink-0 w-full" data-name="Entry Field">
            <div aria-hidden="true" className="absolute border-2 border-[#999] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] py-[15px] relative size-full">
                <input
                  type="email"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  placeholder="Enter Email"
                  className="font-['Nunito_Sans',sans-serif] leading-[20px] w-full bg-transparent border-none outline-none text-white text-[16px]"
                  style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hover state
  if (isHovered) {
    return (
      <div 
        className={className || "relative w-full"} 
        data-name="State=Hover"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="bg-[#ebebeb] h-[50px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] py-[15px] relative size-full">
                <input
                  type="email"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="Enter Email"
                  className="font-['Nunito_Sans',sans-serif] leading-[20px] w-full bg-transparent border-none outline-none text-[#111] text-[16px]"
                  style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default state
  return (
    <div 
      className={className || "relative w-full"} 
      data-name="State=Default"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <div className="bg-[#f9f9f9] h-[50px] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[20px] py-[15px] relative size-full">
              <input
                type="email"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="Enter Email"
                className="font-['Nunito_Sans',sans-serif] leading-[20px] w-full bg-transparent border-none outline-none text-[#999] text-[16px] placeholder:text-[#999]"
                style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveSubscribe() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setHasError(true);
      return;
    }
    
    // Success - clear error and email
    setHasError(false);
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div className="content-stretch flex flex-col lg:flex-row items-start gap-6 lg:gap-[30px] relative w-full" data-name="Content">
      {/* Subscribe Component */}
      <div className="bg-[#f9f9f9] min-h-[244px] relative flex-1 w-full lg:w-[585px]" data-name="Subscribe Component">
        <div className="flex flex-col items-center justify-center size-full">
          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[24px] md:px-[48px] py-[24px] relative size-full">
            <p className="font-['Flama',sans-serif] leading-[24px] not-italic relative shrink-0 text-[23px] text-black text-center uppercase w-full" style={{ fontWeight: 600 }}>
              GET THE INSIDER SCOOP
            </p>
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Content">
              <InteractiveInputField
                className="relative shrink-0 w-full"
                value={email}
                onChange={(value) => {
                  setEmail(value);
                  setHasError(false); // Clear error when typing
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                isFocused={isFocused}
                isHovered={isHovered}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                hasError={hasError}
              />
              <button 
                type="submit"
                className="bg-black h-[50px] relative shrink-0 w-full hover:bg-[#333] transition-colors"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
                    <p className="font-['Flama',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>
                      SUBSCRIBE
                    </p>
                  </div>
                </div>
              </button>
              
              {/* Privacy Policy Messaging */}
              <p 
                className="font-['Nunito_Sans',sans-serif] leading-[normal] text-[#8d8d8e] text-[13px] text-center w-full"
                style={{ fontWeight: 400, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
              >
                <span className="leading-[normal]">By subscribing you agree to our </span>
                <span className="font-['Nunito_Sans',sans-serif] leading-[normal]" style={{ fontWeight: 700, fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                  privacy policy
                </span>
              </p>
            </div>
          </form>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
      </div>

      {/* Tickets Component */}
      <div className="h-[244px] relative flex-1 w-full lg:w-[585px]" data-name="Tickets">
        <img alt="Get Tickets" className="absolute block max-w-none size-full object-cover" src={imgTickets} />
        <p className="absolute font-['Flama',sans-serif] inset-[80.74%_34.36%_13.52%_25.98%] leading-[24px] not-italic text-[19px] text-white uppercase whitespace-nowrap" style={{ fontWeight: 700 }}>
          GET YOUR TICKETS HERE
        </p>
        <div className="absolute inset-[81.24%_26.47%_13.21%_69.06%]" data-name="Path 175">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.129 13.546">
            <path d={svgPaths.p3b14ed00} fill="white" id="Path 175" />
          </svg>
        </div>
        <div className="absolute inset-[31.56%_20.85%]" data-name="Tickets_Panel">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTicketsPanel} />
          </div>
        </div>
      </div>
    </div>
  );
}