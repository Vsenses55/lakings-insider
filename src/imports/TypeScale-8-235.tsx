import clsx from "clsx";
type Helper2Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper2({ text, text1, additionalClassNames = "" }: Helper2Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }} className={additionalClassNames}>
      <p className="mb-0">{text}</p>
      <p>{text1}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, additionalClassNames = "" }: Helper1Props) {
  return <Helper2 text={text} text1={text1} additionalClassNames={clsx("flex-[1_0_0] leading-[16px] min-h-px min-w-px relative text-[13px]", additionalClassNames)} />;
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return <Helper2 text={text} text1={text1} additionalClassNames={clsx("flex-[1_0_0] leading-[20px] min-h-px min-w-px relative text-[16px]", additionalClassNames)} />;
}
type Frame1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Frame1({ text, text1, additionalClassNames = "" }: Frame1Props) {
  return (
    <div className={clsx("content-stretch flex gap-[32px] items-start not-italic relative shrink-0 w-full", additionalClassNames)}>
      <Frame text="19px" text1="1.188rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
      <div className="flex-[1_0_0] font-['Flama:Semibold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[19px]">
        <p className="mb-0">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type FrameProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Frame({ text, text1, additionalClassNames = "" }: FrameProps) {
  return (
    <div className={clsx("bg-white content-stretch flex flex-col gap-[4px] items-end leading-[normal] overflow-clip relative shrink-0 text-[12px] w-[64px] whitespace-nowrap", additionalClassNames)}>
      <p className="opacity-40 relative shrink-0">{text}</p>
      <p className="opacity-40 relative shrink-0">{text1}</p>
    </div>
  );
}

export default function TypeScale() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-start p-[64px] relative size-full text-black" data-name="Type Scale">
      <div className="bg-white content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-end leading-[normal] not-italic overflow-clip pl-[96px] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Frame">
        <p className="opacity-40 relative shrink-0">Base Value: 16</p>
        <p className="opacity-40 relative shrink-0">Scale: 1.2</p>
      </div>
      <div className="content-stretch flex gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
        <Frame text="48px" text1="3.000rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
        <div className="flex-[1_0_0] font-['Flama:Semibold',sans-serif] leading-[48px] min-h-px min-w-px relative text-[48px]">
          <p className="mb-0">H1</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
        <Frame text="40px" text1="2.500rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
        <div className="flex-[1_0_0] font-['Flama:Semibold',sans-serif] leading-[40px] min-h-px min-w-px relative text-[40px]">
          <p className="mb-0">H2</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
        <Frame text="33px" text1="2.063rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
        <div className="flex-[1_0_0] font-['Flama:Semibold',sans-serif] leading-[32px] min-h-px min-w-px relative text-[33px]">
          <p className="mb-0">H3</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
        <Frame text="28px" text1="1.750rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
        <div className="flex-[1_0_0] font-['Flama:Semibold',sans-serif] leading-[32px] min-h-px min-w-px relative text-[28px]">
          <p className="mb-0">H4</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
        <Frame text="23px" text1="1.438rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
        <div className="flex-[1_0_0] font-['Flama:Semibold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[23px] uppercase">
          <p className="mb-0">H5</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start not-italic overflow-clip relative shrink-0 w-full" data-name="Frame">
        <Frame text="19px" text1="1.188rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal" />
        <div className="flex-[1_0_0] font-['Flama:Bold',sans-serif] leading-[24px] min-h-px min-w-px relative text-[19px] uppercase">
          <p className="mb-0">H6</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      <Frame1 text="Body (Large) bold" text1="The quick brown fox jumps over the lazy dog" />
      <Frame1 text="Body (Large)" text1="The quick brown fox jumps over the lazy dog" additionalClassNames="overflow-clip" />
      <div className="content-stretch flex font-normal gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
        <Frame text="16px" text1="1.000rem" additionalClassNames="font-['Inter:Regular',sans-serif] not-italic" />
        <Helper text="Body" text1="The quick brown fox jumps over the lazy dog" additionalClassNames="font-['Nunito_Sans:Regular',sans-serif]" />
      </div>
      <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
        <Frame text="16px" text1="1.000rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal not-italic" />
        <Helper text="Body" text1="The quick brown fox jumps over the lazy dog" additionalClassNames="font-['Nunito_Sans:Black',sans-serif] font-black" />
      </div>
      <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
        <Frame text="13px" text1="0.813rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal not-italic" />
        <Helper1 text="labels" text1="The quick brown fox jumps over the lazy dog" additionalClassNames="font-['Nunito_Sans:Black',sans-serif] font-black uppercase" />
      </div>
      <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
        <Frame text="13px" text1="0.813rem" additionalClassNames="font-['Inter:Regular',sans-serif] font-normal not-italic" />
        <Helper1 text="Captions" text1="The quick brown fox jumps over the lazy dog" additionalClassNames="font-['Nunito_Sans:Bold',sans-serif] font-bold" />
      </div>
      <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start not-italic overflow-clip relative shrink-0 w-full" data-name="Frame">
        <Frame text="11px" text1="0.688rem" />
        <div className="flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[11px]">
          <p className="mb-0">Footnote</p>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  );
}