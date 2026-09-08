function Container1() {
  return (
    <div className="bg-[#dadde5] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[72px] py-[41px] relative size-full">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Montserrat:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#00091c] text-[20px] text-center whitespace-nowrap">AAA</p>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0f172b] text-[14px] top-0 whitespace-nowrap">Primary 100</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Menlo:Regular',sans-serif] leading-[0] left-0 not-italic text-[#45556c] text-[12px] top-0 whitespace-nowrap">
        <span className="leading-[16px]">#</span>
        <span className="leading-[16px]">dadde5</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[12px] top-0 whitespace-nowrap">Headers, primary actions</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container1 />
      <Container2 />
    </div>
  );
}