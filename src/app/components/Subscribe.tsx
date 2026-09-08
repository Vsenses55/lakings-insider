import { useState } from "react";
import svgPaths from "../../imports/svg-9xkfjv4ldw";

type SubscribeProps = {
  className?: string;
  onSubmit?: (email: string) => void;
};

export default function Subscribe({ className = "", onSubmit }: SubscribeProps) {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }
    if (!isChecked) {
      setError("Please accept the privacy policy");
      return;
    }
    
    setError("");
    onSubmit?.(email);
  };

  return (
    <div className={`bg-[#f9f9f9] w-full max-w-[585px] ${className}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[48px] py-[24px] w-full">
          <h2 className="font-['Flama',sans-serif] font-semibold leading-[24px] text-[23px] text-black text-center uppercase w-full">
            GET THE INSIDER SCOOP
          </h2>
          
          <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[10px] items-start justify-center w-full">
            {/* Input Field */}
            <div className="relative w-full">
              <div 
                className={`h-[50px] relative w-full ${
                  error ? 'bg-[#d9d9d9]' : 
                  isFocused ? 'bg-[#414347]' : 
                  isHovered ? 'bg-[#ebebeb]' : 
                  'bg-[#f9f9f9]'
                }`}
              >
                <div 
                  aria-hidden="true" 
                  className={`absolute inset-0 pointer-events-none ${
                    isFocused ? 'border-2 border-[#999]' : 'border-[0.5px] border-[#999]'
                  } border-solid`}
                />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[20px] py-[15px] size-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      placeholder="Enter Email"
                      className={`w-full bg-transparent border-none outline-none font-normal leading-[20px] text-[16px] ${
                        isFocused ? 'text-white' : 
                        error ? 'text-[#999]' :
                        'text-[#999]'
                      } placeholder:text-[#999]`}
                      style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <button 
              type="submit"
              className="bg-black h-[50px] w-full hover:bg-[#2b2b2b] transition-colors"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[211px] py-[16px] size-full">
                  <p className="font-['Flama',sans-serif] font-bold leading-[normal] text-[15px] text-white whitespace-nowrap">
                    REGISTER
                  </p>
                </div>
              </div>
            </button>

            {/* Privacy Policy Opt-in */}
            <p 
              className="font-normal leading-[normal] text-[#8d8d8e] text-[13px] text-center w-full"
              style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
            >
              <span className="leading-[normal]">By subscribing you agree to our </span>
              <span className="font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                privacy policy
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}