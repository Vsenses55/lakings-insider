type TypographyItemProps = {
  label: string;
  size: string;
  lineHeight: string;
  fontWeight: string;
  fontFamily: string;
  example: string;
  className: string;
};

function TypographyItem({ label, size, lineHeight, fontWeight, fontFamily, example, className }: TypographyItemProps) {
  return (
    <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-6 w-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-semibold text-[14px] text-[#0f172b] mb-1">{label}</p>
          <p className="font-normal text-[12px] text-[#90a1b9]">
            {fontFamily} · {size} · {lineHeight} · {fontWeight}
          </p>
        </div>
        <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
          <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Click to copy</span>
        </button>
      </div>
      <p className={className}>{example}</p>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
      <h1 className="text-[24px] font-bold text-[#0f172b] mb-2">Typography</h1>
      <p className="text-[#45556c] text-[14px] mb-12">The LA Kings Insider typography scale with font sizes, line heights, and weights.</p>
      
      {/* Typography Examples */}
      <h2 className="text-[20px] font-bold text-[#0f172b] mb-6">Type Scale Examples</h2>
      <div className="flex flex-col gap-4 mb-16">
        <TypographyItem
          label="H1"
          fontFamily="Flama Semibold"
          size="text-[48px]"
          lineHeight="leading-[48px]"
          fontWeight="font-semibold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[48px] leading-[48px] font-semibold text-[#0f172b] font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="H2"
          fontFamily="Flama Semibold"
          size="text-[40px]"
          lineHeight="leading-[40px]"
          fontWeight="font-semibold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[40px] leading-[40px] font-semibold text-[#0f172b] font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="H3"
          fontFamily="Flama Semibold"
          size="text-[33px]"
          lineHeight="leading-[32px]"
          fontWeight="font-semibold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[33px] leading-[32px] font-semibold text-[#0f172b] font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="H4"
          fontFamily="Flama Semibold"
          size="text-[28px]"
          lineHeight="leading-[32px]"
          fontWeight="font-semibold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[28px] leading-[32px] font-semibold text-[#0f172b] font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="H5"
          fontFamily="Flama Semibold"
          size="text-[23px]"
          lineHeight="leading-[24px]"
          fontWeight="font-semibold"
          example="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
          className="text-[23px] leading-[24px] font-semibold text-[#0f172b] uppercase font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="H6"
          fontFamily="Flama Bold"
          size="text-[19px]"
          lineHeight="leading-[24px]"
          fontWeight="font-bold"
          example="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
          className="text-[19px] leading-[24px] font-bold text-[#0f172b] uppercase font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="Body (Large) Bold"
          fontFamily="Flama Semibold"
          size="text-[19px]"
          lineHeight="leading-[24px]"
          fontWeight="font-semibold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[19px] leading-[24px] font-semibold text-[#0f172b] font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="Body (Large)"
          fontFamily="Flama Semibold"
          size="text-[19px]"
          lineHeight="leading-[24px]"
          fontWeight="font-semibold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[19px] leading-[24px] font-semibold text-[#0f172b] font-['Flama',sans-serif]"
        />
        
        <TypographyItem
          label="Body"
          fontFamily="Nunito Sans Regular"
          size="text-[16px]"
          lineHeight="leading-[20px]"
          fontWeight="font-normal"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[16px] leading-[20px] font-normal text-[#0f172b] font-['Nunito Sans',sans-serif]"
        />
        
        <TypographyItem
          label="Body Bold"
          fontFamily="Nunito Sans Black"
          size="text-[16px]"
          lineHeight="leading-[20px]"
          fontWeight="font-black"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[16px] leading-[20px] font-black text-[#0f172b] font-['Nunito Sans',sans-serif]"
        />
        
        <TypographyItem
          label="LABELS"
          fontFamily="Nunito Sans Black"
          size="text-[13px]"
          lineHeight="leading-[16px]"
          fontWeight="font-black"
          example="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
          className="text-[13px] leading-[16px] font-black text-[#0f172b] uppercase font-['Nunito Sans',sans-serif]"
        />
        
        <TypographyItem
          label="Captions"
          fontFamily="Nunito Sans Bold"
          size="text-[13px]"
          lineHeight="leading-[16px]"
          fontWeight="font-bold"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[13px] leading-[16px] font-bold text-[#0f172b] font-['Nunito Sans',sans-serif]"
        />
        
        <TypographyItem
          label="Footnote"
          fontFamily="Inter Regular"
          size="text-[11px]"
          lineHeight="leading-[1.2]"
          fontWeight="font-normal"
          example="The quick brown fox jumps over the lazy dog"
          className="text-[11px] leading-[1.2] font-normal text-[#0f172b] font-['Inter',sans-serif]"
        />
      </div>

      {/* Typography Tokens */}
      <div className="mb-16">
        <h2 className="text-[20px] font-bold text-[#0f172b] mb-6">Type Scale Tokens</h2>
        <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[#e2e8f0]">
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Token Name</th>
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Font</th>
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Size</th>
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Weight</th>
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Line Height</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleH1</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">48px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Semibold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">40px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleH2</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">40px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Semibold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">40px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleH3</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">33px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Semibold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">32px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleH4</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">28px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Semibold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">32px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleH5</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">23px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Semibold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">24px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleH6</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">19px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Bold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">24px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleBodyLarge</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">19px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Semibold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">24px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleBody</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">16px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Regular</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">20px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleBodyStrongCaps</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">16px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Black</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">20px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleBodyStrongMixedCase</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Flama</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">16px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">ExtraBold</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">20px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleLabels</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Nunito Sans</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">13px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Black</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">16px</td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">typeScaleCaptions</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Nunito Sans</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">13px</td>
                <td className="py-3 px-3 text-[13px] text-[#45556c]">Medium</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">16px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}