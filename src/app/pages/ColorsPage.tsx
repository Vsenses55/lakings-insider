type ColorSwatchProps = {
  name: string;
  hex: string;
  textColor: 'light' | 'dark';
  accessibilityRating: 'AAA' | 'AA';
};

function ColorSwatch({ name, hex, textColor, accessibilityRating }: ColorSwatchProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative rounded-[10px]">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />

      {/* Color swatch with WCAG rating */}
      <div className="relative rounded-[8px] shrink-0 w-full" style={{ backgroundColor: hex }}>
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[72px] py-[41px] relative size-full">
            <p
              className={`text-[20px] leading-[24px] not-italic text-center whitespace-nowrap ${
                textColor === 'dark' ? 'text-[#00091c]' : 'text-white'
              }`}
              style={{ fontFamily: 'Montserrat', fontWeight: 700 }}
            >
              {accessibilityRating}
            </p>
          </div>
        </div>
      </div>

      {/* Color info */}
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <div className="h-[20px] relative shrink-0 w-full">
          <p
            className="absolute left-0 top-0 text-[14px] leading-[20px] text-[#0f172b] not-italic whitespace-nowrap"
            style={{ fontFamily: 'Inter', fontWeight: 600 }}
          >
            {name}
          </p>
        </div>
        <div className="h-[16px] relative shrink-0 w-full">
          <p
            className="absolute left-0 top-0 text-[12px] leading-[16px] text-[#45556c] not-italic whitespace-nowrap"
            style={{ fontFamily: 'Menlo', fontWeight: 400 }}
          >
            {hex}
          </p>
        </div>
      </div>
    </div>
  );
}

type ColorCategoryProps = {
  title: string;
  colors: ColorSwatchProps[];
};

function ColorCategory({ title, colors }: ColorCategoryProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
      <div className="h-[28px] relative shrink-0 w-full">
        <p
          className="absolute left-0 top-0 text-[20px] leading-[28px] text-[#0f172b] not-italic whitespace-nowrap"
          style={{ fontFamily: 'Inter', fontWeight: 700 }}
        >
          {title}
        </p>
      </div>
      <div className="content-stretch flex flex-wrap gap-[24px] items-start relative w-full">
        {colors.map((color, index) => (
          <div key={index} className="flex-1 min-w-[200px]">
            <ColorSwatch {...color} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ColorsPage() {
  const primaryColors: ColorSwatchProps[] = [
    { name: 'Primary/100', hex: '#cfcfcf', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Primary/300', hex: '#707070', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Primary/500', hex: '#111111', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Primary/700', hex: '#0a0a0a', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Primary/900', hex: '#030303', textColor: 'light', accessibilityRating: 'AAA' },
  ];

  const secondaryColors: ColorSwatchProps[] = [
    { name: 'Secondary/100', hex: '#e2e2e4', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Secondary/300', hex: '#a7a9ad', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Secondary/500', hex: '#6c7077', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Secondary/700', hex: '#414347', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Secondary/900', hex: '#161618', textColor: 'light', accessibilityRating: 'AAA' },
  ];

  const tertiaryColors: ColorSwatchProps[] = [
    { name: 'Tertiary/100', hex: '#ebebeb', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Tertiary/300', hex: '#c2c2c2', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Tertiary/500', hex: '#999999', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Tertiary/700', hex: '#5c5c5c', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Tertiary/900', hex: '#1f1f1f', textColor: 'light', accessibilityRating: 'AAA' },
  ];

  const dangerColors: ColorSwatchProps[] = [
    { name: 'Danger/100', hex: '#efdbdf', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Danger/300', hex: '#d0949f', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Danger/500', hex: '#c03135', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Danger/700', hex: '#6a1d20', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Danger/900', hex: '#23040b', textColor: 'light', accessibilityRating: 'AAA' },
  ];

  const infoColors: ColorSwatchProps[] = [
    { name: 'Info/100', hex: '#d8ebeb', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Info/300', hex: '#8ac4c5', textColor: 'dark', accessibilityRating: 'AAA' },
    { name: 'Info/500', hex: '#3c9d99', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Info/700', hex: '#255c5c', textColor: 'light', accessibilityRating: 'AAA' },
    { name: 'Info/900', hex: '#0e1f1f', textColor: 'light', accessibilityRating: 'AAA' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
      <h1 className="text-[24px] text-[#0f172b] mb-2" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Colors</h1>
      <p className="text-[#45556c] text-[14px] mb-12" style={{ fontFamily: 'Inter', fontWeight: 400 }}>The LA Kings Insider color palette with accessibility ratings.</p>

      {/* Color Palette */}
      <div className="flex flex-col gap-[24px] mb-16">
        <ColorCategory title="Primary" colors={primaryColors} />
        <ColorCategory title="Secondary" colors={secondaryColors} />
        <ColorCategory title="Tertiary" colors={tertiaryColors} />
        <ColorCategory title="Danger" colors={dangerColors} />
        <ColorCategory title="Info" colors={infoColors} />
      </div>

      {/* Semantic Color Tokens */}
      <div className="mb-16">
        <h2 className="text-[20px] text-[#0f172b] mb-6" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Semantic Tokens</h2>
        <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[#e2e8f0]">
                <th className="text-left py-3 px-3 text-[14px] text-[#314158]" style={{ fontWeight: 600 }}>Token Name</th>
                <th className="text-left py-3 px-3 text-[14px] text-[#314158]" style={{ fontWeight: 600 }}>Value</th>
                <th className="text-left py-3 px-3 text-[14px] text-[#314158]" style={{ fontWeight: 600 }}>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorSurfaceSurfaceBkg</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#ffffff</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#ffffff' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorSurfaceSurfaceContainerLight</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#f9f9f9</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#f9f9f9' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorSurfaceSurfaceField</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#ebebeb</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#ebebeb' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorSurfaceSurfaceContainerDark</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#111111</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-white/40" style={{ backgroundColor: '#111111' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorSurfaceSurfaceBtn</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#111111</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-white/40" style={{ backgroundColor: '#111111' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorSurfaceSurfaceStroke</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#999999</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#999999' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">txtTxtPrimary</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#111111</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-white/40" style={{ backgroundColor: '#111111' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">txtTxtSecondary</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#999999</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#999999' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorBrandWhite</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#ffffff</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#ffffff' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorBrandBlack</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#000000</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-white/40" style={{ backgroundColor: '#000000' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorBrandPrimary</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#111111</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-white/40" style={{ backgroundColor: '#111111' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorBrandSecondary</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#6c7077</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#6c7077' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorBrandTertiary</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#999999</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#999999' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorUtilityDanger</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#af3335</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#af3335' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorUtilityFocused</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#499999</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#499999' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">colorUtilityHover</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">#adadad</td>
                <td className="py-3 px-3">
                  <div className="w-12 h-8 rounded border border-black/20" style={{ backgroundColor: '#adadad' }}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}