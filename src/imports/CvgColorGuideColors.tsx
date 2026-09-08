import imgColorPreview from "figma:asset/7b15a01fe58a974012d32aed38cfde307fc0908a.png";

function ColorPreviewBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: `url('${imgColorPreview}')` }} className="bg-size-[36px_36px] bg-top-left h-[180px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}
type ListOfColorsBackgroundImageAndTextProps = {
  text: string;
};

function ListOfColorsBackgroundImageAndText({ text }: ListOfColorsBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function CvgColorGuideColors() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[48px] items-start px-[56px] py-[48px] relative size-full" data-name="cvg-color-guide-Colors">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Primary">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Primary</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Primary">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#cfcfcf] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#cfcfcf" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#a0a0a0] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#a0a0a0" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#707070] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[33px] text-white top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#707070" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#414141] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[33px] text-white top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#414141" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#111] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#111111" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#0e0e0e] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#0e0e0e" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#0a0a0a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#0a0a0a" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#070707] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#070707" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Primary/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#030303] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Primary/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#030303" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Secondary">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Secondary</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Secondary">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#e2e2e4] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#e2e2e4" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#c4c6c9] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#c4c6c9" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#a7a9ad] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#a7a9ad" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#898d92] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#898d92" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#6c7077] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#6c7077" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#565a5f] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#ebebeb] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#565a5f" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#414347] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#ebebeb] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#414347" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#2b2d30] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#2b2d30" />
            </div>
            <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-39px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Secondary/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#161618] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Secondary/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#161618" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Tertiary">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Tertiary</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Tertiary">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#ebebeb] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#ebebeb" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#d6d6d6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#d6d6d6" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#c2c2c2] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#c2c2c2" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#adadad] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#adadad" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#999] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#999999" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#7a7a7a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="-translate-x-1/2 absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-1/2 not-italic text-[33px] text-center text-white top-[calc(50%-12px)] whitespace-nowrap">AA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#7a7a7a" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#5c5c5c] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#5c5c5c" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#3d3d3d] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#ebebeb] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#3d3d3d" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Tertiary/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#1f1f1f] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#999] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Tertiary/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#1f1f1f" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Danger">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Danger</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Danger">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#efd6d7] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#6a1f20] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#efd6d7" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#dfadae] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#6a1f20] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#dfadae" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#d08586] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#d08586" />
            </div>
            <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#efd6d7] text-[33px] top-[calc(50%-39px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#c05c5d] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#efd6d7] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#c05c5d" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#b03335] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#efd6d7] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#b03335" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#8d292a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#efd6d7] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#8d292a" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#6a1f20] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#6a1f20" />
            </div>
            <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#efd6d7] text-[33px] top-[calc(50%-39px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#461415] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#461415" />
            </div>
            <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#dfadae] text-[33px] top-[calc(50%-39px)] whitespace-nowrap">AAA</p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Danger/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#230a0b] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#dfadae] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Danger/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#230a0b" />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Info">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Info</p>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="Info">
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/100">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#dbebeb] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/100</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#dbebeb" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/200">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#b7d6d6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/200</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#b7d6d6" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/300">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#92c2c2] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/300</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#92c2c2" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/400">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#6eadad] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/400</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#6eadad" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/500">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#4a9999] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#111] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/500</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#4a9999" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/600">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#3b7a7a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/600</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#3b7a7a" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/700">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#2c5c5c] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/700</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#2c5c5c" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/800">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#1e3d3d] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/800</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#1e3d3d" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="Info/900">
            <ColorPreviewBackgroundImage>
              <div className="bg-[#0f1f1f] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
              <p className="absolute font-['Flama:Semibold',sans-serif] leading-[32px] left-[calc(50%-34px)] not-italic text-[#f9f9f9] text-[33px] top-[calc(50%-12px)] whitespace-nowrap">AAA</p>
            </ColorPreviewBackgroundImage>
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">Info/900</p>
            <div className="content-start flex flex-wrap gap-[0px_8px] items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Mode 1</p>
              <ListOfColorsBackgroundImageAndText text="#0f1f1f" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}