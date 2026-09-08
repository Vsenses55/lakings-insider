import clsx from "clsx";
import svgPaths from "./svg-ys64f8hfol";
import imgTickets from "figma:asset/0f81995ea2622127c097861a09b9b23878f23410.png";
import imgTicketsPanel from "figma:asset/e6bcbe39c7cdacb951420d2dc79f0f4c91c4987c.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[20px] py-[15px] relative size-full">{children}</div>
    </div>
  );
}
type InputFieldEntryFieldProps = {
  additionalClassNames?: string;
};

function InputFieldEntryField({ children, additionalClassNames = "" }: React.PropsWithChildren<InputFieldEntryFieldProps>) {
  return (
    <div className={clsx("h-[50px] relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
type InputFieldTextProps = {
  text: string;
};

function InputFieldText({ text }: InputFieldTextProps) {
  return (
    <Wrapper>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#999] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type InputFieldProps = {
  className?: string;
  state?: "Default" | "Hover" | "Focused" | "Error";
};

function InputField({ className, state = "Default" }: InputFieldProps) {
  if (state === "Error") {
    return (
      <div className={className || "relative w-[500px]"} data-name="State=Error">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="h-[9px] relative shrink-0 w-[89px]" data-name="Labels">
            <p className="absolute font-['Nunito_Sans:ExtraBold',sans-serif] leading-[normal] left-0 not-italic text-[#b03335] text-[13px] top-0 whitespace-nowrap">Error Message</p>
          </div>
          <div className="bg-[#d9d9d9] h-[50px] relative shrink-0 w-full" data-name="Entry Field">
            <InputFieldText text="Email" />
          </div>
        </div>
      </div>
    );
  }
  if (state === "Focused") {
    return (
      <div className={className || "relative w-[500px]"} data-name="State=Focused">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="bg-[#414347] h-[50px] relative shrink-0 w-full" data-name="Entry Field">
            <div aria-hidden="true" className="absolute border-2 border-[#999] border-solid inset-0 pointer-events-none" />
            <InputFieldText text="|" />
          </div>
        </div>
      </div>
    );
  }
  if (state === "Hover") {
    return (
      <button className={className || "cursor-pointer relative w-[500px]"} data-name="State=Hover">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <InputFieldEntryField additionalClassNames="bg-[#ebebeb]">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#111] text-[16px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Enter Email
            </p>
          </InputFieldEntryField>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "relative w-[500px]"} data-name="State=Default">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <InputFieldEntryField additionalClassNames="bg-[#f9f9f9]">
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            Enter Email
          </p>
        </InputFieldEntryField>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full" data-name="Content">
      <div className="bg-[#f9f9f9] h-[244px] relative shrink-0 w-[585px]" data-name="Subscribe Component">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[48px] py-[24px] relative size-full">
            <p className="font-['Flama:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[23px] text-black text-center uppercase w-full">GET THE INSIDER SCOOP</p>
            <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Content">
              <InputField className="relative shrink-0 w-full" />
              <div className="bg-black h-[50px] relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[211px] py-[16px] relative size-full">
                    <p className="font-['Flama:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap">{"LABEL"}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Opt In">
                <div className="relative shrink-0 size-[20px]" data-name="Button">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Button">
                      <rect fill="var(--fill-0, #EBEBEB)" height="19.5" width="19.5" x="0.25" y="0.25" />
                      <rect height="19.5" stroke="var(--stroke-0, #999999)" strokeWidth="0.5" width="19.5" x="0.25" y="0.25" />
                      <path d={svgPaths.p2b9b8380} fill="var(--fill-0, #111111)" id="Checkmark" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-center min-h-px min-w-px relative" data-name="Messaging">
                  <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#8d8d8e] text-[13px]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                    <span className="leading-[normal]">{`By subscribing you agree to our `}</span>
                    <span className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                      privacy policy
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#ebebeb] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="h-[244px] relative shrink-0 w-[585px]" data-name="Tickets">
        <img alt="" className="absolute block max-w-none size-full" height="244" src={imgTickets} width="585" />
        <p className="absolute font-['Flama:Bold',sans-serif] inset-[80.74%_34.36%_13.52%_25.98%] leading-[24px] not-italic text-[19px] text-white uppercase whitespace-nowrap">GET YOUR TICKETS HERE</p>
        <div className="absolute inset-[81.24%_26.47%_13.21%_69.06%]" data-name="Path 175">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.129 13.546">
            <path d={svgPaths.p3b14ed00} fill="var(--fill-0, white)" id="Path 175" />
          </svg>
        </div>
        <div className="absolute inset-[31.56%_20.85%]" data-name="Tickets_Panel">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTicketsPanel} />
          </div>
        </div>
      </div>
    </div>
  );
}