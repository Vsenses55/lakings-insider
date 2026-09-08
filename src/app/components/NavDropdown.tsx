import { useState, useRef, useEffect } from "react";

type DropdownMenuItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type NavDropdownProps = {
  label: string;
  items: DropdownMenuItem[];
  className?: string;
};

export default function NavDropdown({ label, items, className = "" }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setHoveredIndex(null);
    }, 100);
  };

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="flex items-center justify-center h-full">
          <p
            className={`font-black leading-[20px] text-[16px] whitespace-nowrap transition-colors ${
              isOpen ? "text-[#adadad]" : "text-white group-hover:text-[#adadad]"
            }`}
            style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
          >
            {label}
          </p>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[12px] z-50">
          <div className="bg-[#f9f9f9] rounded-[4px] shadow-lg relative min-w-[184px]">
            {/* Triangle Arrow at Top */}
            <div className="absolute -translate-x-1/2 flex h-[7px] items-center justify-center left-[calc(50%-0.5px)] -top-[7px] w-[15px]">
              <div className="h-[7px] w-[15px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
                  <path d="M7.5 0L15 7H0L7.5 0Z" fill="#f9f9f9" />
                </svg>
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-[4px] px-[13px] py-[13px]">
              {items.map((item, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleItemClick(item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`h-[30px] px-[11px] py-[10px] flex items-center rounded-[2px] transition-colors ${
                      isHovered
                        ? "bg-[#111]"
                        : "bg-transparent"
                    }`}
                  >
                    <p
                      className={`font-medium text-[13px] leading-[16px] whitespace-nowrap ${
                        isHovered ? "text-white" : "text-[#111]"
                      }`}
                      style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                    >
                      {item.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Static display components for showing states
export function NavDropdownClosed({ label = "LABELS" }: { label?: string }) {
  return (
    <div className="relative inline-block bg-[#111] px-6 py-4 rounded">
      <button className="relative">
        <div className="flex items-center justify-center">
          <p
            className="font-black leading-[20px] text-white text-[16px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
          >
            {label}
          </p>
        </div>
      </button>
    </div>
  );
}

export function NavDropdownOpen({ label = "LABELS", items }: { label?: string; items: DropdownMenuItem[] }) {
  return (
    <div className="relative inline-block bg-[#111] px-6 py-4 rounded">
      <button className="relative mb-6">
        <div className="flex items-center justify-center">
          <p
            className="font-black leading-[20px] text-[#adadad] text-[16px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
          >
            {label}
          </p>
        </div>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full z-50">
        <div className="bg-[#f9f9f9] rounded-[4px] shadow-lg relative min-w-[184px]">
          {/* Triangle Arrow */}
          <div className="absolute -translate-x-1/2 flex h-[7px] items-center justify-center left-[calc(50%-0.5px)] -top-[7px] w-[15px]">
            <div className="h-[7px] w-[15px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
                <path d="M7.5 0L15 7H0L7.5 0Z" fill="#f9f9f9" />
              </svg>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-[4px] px-[13px] py-[13px]">
            {items.map((item, index) => {
              const isSelected = index === 0;
              return (
                <div
                  key={index}
                  className={`h-[30px] px-[11px] py-[10px] flex items-center rounded-[2px] ${
                    isSelected ? "bg-[#111]" : "bg-white"
                  }`}
                >
                  <p
                    className={`font-medium text-[13px] leading-[16px] whitespace-nowrap ${
                      isSelected ? "text-white" : "text-[#111]"
                    }`}
                    style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}