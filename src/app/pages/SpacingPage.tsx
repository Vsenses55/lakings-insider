type SpacingItemProps = {
  name: string;
  value: number;
};

function SpacingItem({ name, value }: SpacingItemProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`${name}`);
  };

  return (
    <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        {/* Left side - Value and size info */}
        <div className="flex items-baseline gap-3">
          <span className="font-bold text-[20px] text-[#0f172b]">{value}</span>
          <span className="font-normal text-[16px] text-[#45556c]">{value}px</span>
        </div>
        
        {/* Right side - Copy button */}
        <button 
          onClick={handleCopy}
          className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Click to copy</span>
        </button>
      </div>
      
      {/* Spacing visualization bar */}
      <div className="mb-3 bg-[#f8f9fa] rounded-[4px] p-3 flex items-center">
        <div 
          className="h-[32px] bg-[#111111] rounded-[2px]"
          style={{ width: `${value}px` }}
        />
      </div>
      
      {/* Usage examples */}
      <p className="font-normal text-[14px] text-[#90a1b9]">
        {name} • m-{value} • gap-{value}
      </p>
    </div>
  );
}

export default function SpacingPage() {
  const spacingValues: SpacingItemProps[] = [
    { name: 'px-0', value: 0 },
    { name: 'px-2', value: 2 },
    { name: 'px-4', value: 4 },
    { name: 'px-6', value: 6 },
    { name: 'px-8', value: 8 },
    { name: 'px-12', value: 12 },
    { name: 'px-16', value: 16 },
    { name: 'px-20', value: 20 },
    { name: 'px-24', value: 24 },
    { name: 'px-32', value: 32 },
    { name: 'px-40', value: 40 },
    { name: 'px-48', value: 48 },
    { name: 'px-64', value: 64 },
    { name: 'px-80', value: 80 },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
      <h1 className="text-[24px] font-bold text-[#0f172b] mb-2">Spacing Scale</h1>
      <p className="text-[#45556c] text-[14px] mb-12">
        Consistent spacing scale for margins, padding, and gaps throughout the design system.
      </p>
      
      {/* Spacing Scale Examples */}
      <h2 className="text-[20px] font-bold text-[#0f172b] mb-6">Spacing Scale Examples</h2>
      <div className="flex flex-col gap-4 mb-16">
        {spacingValues.map((spacing, index) => (
          <SpacingItem key={index} {...spacing} />
        ))}
      </div>

      {/* Spacing Tokens */}
      <div className="mb-16">
        <h2 className="text-[20px] font-bold text-[#0f172b] mb-6">Spacing Tokens</h2>
        <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr className="border-b-2 border-[#e2e8f0]">
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Token Name</th>
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Value</th>
                <th className="text-left py-3 px-3 font-semibold text-[14px] text-[#314158]">Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx0</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">0px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '0px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx2</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">2px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '2px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx4</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">4px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '4px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx6</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">6px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '6px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx8</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">8px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '8px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx12</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">12px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '12px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx16</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">16px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '16px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx20</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">20px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '20px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx24</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">24px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '24px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx32</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">32px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '32px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx40</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">40px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '40px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx48</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">48px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '48px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx64</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">64px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '64px' }}></div>
                </td>
              </tr>
              <tr className="border-b border-[#e2e8f0]">
                <td className="py-3 px-3 font-mono text-[13px] text-[#0f172b]">unitsPx80</td>
                <td className="py-3 px-3 font-mono text-[13px] text-[#45556c]">80px</td>
                <td className="py-3 px-3">
                  <div className="h-6 bg-[#111111] rounded" style={{ width: '80px' }}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}