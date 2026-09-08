import clsx from "clsx";

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[276px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8fafc] h-[70px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-px relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[68px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText({ text, additionalClassNames = "" }: TableCellTextProps) {
  return (
    <div className={clsx("absolute top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#45556c] text-[14px] top-[12.5px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type CodeText1Props = {
  text: string;
  additionalClassNames?: string;
};

function CodeText1({ text, additionalClassNames = "" }: CodeText1Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[14px] items-start left-[16px] top-[16.5px]", additionalClassNames)}>
      <p className="font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type CodeTextProps = {
  text: string;
  additionalClassNames?: string;
};

function CodeText({ text, additionalClassNames = "" }: CodeTextProps) {
  return (
    <div className={clsx("absolute bg-[#f1f5f9] content-stretch flex h-[22px] items-start left-[16px] px-[8px] py-[4px] rounded-[4px] top-[12.5px]", additionalClassNames)}>
      <p className="font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({ text, additionalClassNames = "" }: HeaderCellTextProps) {
  return (
    <div className={clsx("absolute h-[44.5px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[16px] not-italic text-[#0f172b] text-[14px] top-[12px] tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function H2() {
  return (
    <Wrapper1>
      <Wrapper>
        <TextText text="Lorem ipsum?" additionalClassNames="w-[183.984px]" />
        <Icon />
      </Wrapper>
    </Wrapper1>
  );
}

function H1() {
  return (
    <Wrapper1>
      <Wrapper>
        <TextText text="Lorem ipsum?" additionalClassNames="w-[210.047px]" />
        <Icon />
      </Wrapper>
    </Wrapper1>
  );
}

function H() {
  return (
    <Wrapper1>
      <Wrapper>
        <TextText text="Lorem ipsum?" additionalClassNames="w-[209.828px]" />
        <Icon />
      </Wrapper>
    </Wrapper1>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper2 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#0f172b] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="h-[26px] relative rounded-[4px] shrink-0 w-[90.5px]">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[13px] py-[5px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <Wrapper2 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#314158] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#0f172b] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Accordion</p>
        </div>
        <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Collapsible content sections, perfect for FAQs and content organization.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[318px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex h-[26px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <HeadingText text="Single Select (Default)" additionalClassNames="w-[151.828px]" />
          <ButtonText text="Copy Code" />
        </div>
        <Container1>
          <div className="content-stretch flex flex-col gap-[8px] h-[226px] items-start relative shrink-0 w-full" data-name="E1">
            <H />
            <H1 />
            <H2 />
          </div>
        </Container1>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[318px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex h-[26px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <HeadingText text="Multiple Select" additionalClassNames="w-[100.469px]" />
          <ButtonText text="Copy Code" />
        </div>
        <Container1>
          <div className="content-stretch flex flex-col gap-[8px] h-[226px] items-start relative shrink-0 w-full" data-name="E1">
            <H />
            <H1 />
            <H2 />
          </div>
        </Container1>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] h-[424px] items-start relative shrink-0 w-full" data-name="Container">
        <Text text="Usage" />
        <div className="h-[392px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute bg-[#0f172b] content-stretch flex flex-col h-[392px] items-start left-0 overflow-clip pl-[16px] pr-[285.844px] pt-[18px] rounded-[10px] top-0 w-[1052px]" data-name="Code Block">
            <div className="h-[356px] relative shrink-0 w-full" data-name="Code">
              <div className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#f1f5f9] text-[14px] top-[-2px] w-[751px] whitespace-pre-wrap">
                <p className="mb-0">{`import { Accordion } from "@/app/components/Accordion";`}</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">const items = [</p>
                <p className="mb-0">{`  {`}</p>
                <p className="mb-0">{`    title: "What is the Sherri Show?",`}</p>
                <p className="mb-0">{`    content: "The Sherri Show is a daily daytime talk show hosted by Sherri Shepherd...",`}</p>
                <p className="mb-0">{`  },`}</p>
                <p className="mb-0">{`  {`}</p>
                <p className="mb-0">{`    title: "When does the show air?",`}</p>
                <p className="mb-0">{`    content: "The Sherri Show airs weekdays. Check your local listings for times...",`}</p>
                <p className="mb-0">{`  },`}</p>
                <p className="mb-0">{`  {`}</p>
                <p className="mb-0">{`    title: "How can I get tickets?",`}</p>
                <p className="mb-0">{`    content: "Tickets are available through our website. Visit the tickets page...",`}</p>
                <p className="mb-0">{`  },`}</p>
                <p className="mb-0">];</p>
                <p className="mb-0">&nbsp;</p>
                <p>{`<Accordion items={items} />`}</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#1d293d] content-stretch flex h-[24px] items-start left-[985.56px] px-[12px] py-[4px] rounded-[4px] top-[12px] w-[54.438px]" data-name="Button">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center whitespace-nowrap">Copy</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
        <Text text="Props" />
        <div className="h-[136px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-px relative size-full">
              <div className="h-[134px] relative shrink-0 w-full" data-name="Table">
                <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-b border-solid h-[44.5px] left-0 top-0 w-[1050px]" data-name="Table Header">
                  <div className="absolute h-[44.5px] left-0 top-0 w-[1050px]" data-name="Table Row">
                    <HeaderCellText text="Prop" additionalClassNames="left-0 w-[252.172px]" />
                    <HeaderCellText text="Type" additionalClassNames="left-[252.17px] w-[146.719px]" />
                    <HeaderCellText text="Default" additionalClassNames="left-[398.89px] w-[143.891px]" />
                    <HeaderCellText text="Description" additionalClassNames="left-[542.78px] w-[507.219px]" />
                  </div>
                </div>
                <div className="absolute h-[89.5px] left-0 top-[44.5px] w-[1050px]" data-name="Table Body">
                  <div className="absolute border-[#e2e8f0] border-b border-solid h-[45px] left-0 top-0 w-[1050px]" data-name="Table Row">
                    <div className="absolute h-[45px] left-0 top-0 w-[252.172px]" data-name="Table Cell">
                      <CodeText text="items" additionalClassNames="w-[52.125px]" />
                    </div>
                    <div className="absolute h-[45px] left-[252.17px] top-0 w-[146.719px]" data-name="Table Cell">
                      <CodeText1 text="Array" additionalClassNames="w-[36.125px]" />
                    </div>
                    <TableCellText text="—" additionalClassNames="h-[45px] left-[398.89px] w-[143.891px]" />
                    <TableCellText text="Array of objects with title and content" additionalClassNames="h-[45px] left-[542.78px] w-[507.219px]" />
                  </div>
                  <div className="absolute h-[44.5px] left-0 top-[45px] w-[1050px]" data-name="Table Row">
                    <div className="absolute h-[44.5px] left-0 top-0 w-[252.172px]" data-name="Table Cell">
                      <CodeText text="allowMultiple" additionalClassNames="w-[109.922px]" />
                    </div>
                    <div className="absolute h-[44.5px] left-[252.17px] top-0 w-[146.719px]" data-name="Table Cell">
                      <CodeText1 text="boolean" additionalClassNames="w-[50.578px]" />
                    </div>
                    <div className="absolute h-[44.5px] left-[398.89px] top-0 w-[143.891px]" data-name="Table Cell">
                      <CodeText1 text="false" additionalClassNames="w-[36.125px]" />
                    </div>
                    <TableCellText text="Allow multiple items to be open at once" additionalClassNames="h-[44.5px] left-[542.78px] w-[507.219px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      </div>
    </div>
  );
}