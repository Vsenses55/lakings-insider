import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import NavDropdown from "./NavDropdown";

type MenuItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type NavSection = {
  label: string;
  items: MenuItem[];
};

type NavGroupProps = {
  sections: NavSection[];
};

export default function NavGroup({ sections }: NavGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop: Show individual dropdowns */}
      <div className="hidden md:flex gap-12 items-center justify-center">
        {sections.map((section, index) => (
          <NavDropdown key={index} label={section.label} items={section.items} />
        ))}
      </div>

      {/* Mobile: Show hamburger icon */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-[#adadad] transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <button className="text-white hover:text-[#adadad] transition-colors" aria-label="Search">
          <Search size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header with X and Search */}
          <div className="bg-[#111] h-[60px] flex items-center justify-between px-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 -ml-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <button className="text-white p-2 -mr-2" aria-label="Search">
              <Search size={24} />
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-4 py-6">
            {sections.map((section, sectionIndex) => {
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
                          onClick={() => handleItemClick(item)}
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
    </>
  );
}
